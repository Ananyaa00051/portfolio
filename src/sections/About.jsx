import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUpVariants } from '../utils/animations';

const AnimatedCounter = ({ from, to, duration = 2, suffix = "" }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTime;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(from + (to - from) * progress));
          requestAnimationFrame(animateCount);
        } else {
          setCount(to);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [inView, from, to, duration]);

  return (
    <span ref={nodeRef}>
      {count}
      {suffix}
    </span>
  );
};

export default function About() {
  const imageRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    setTiltStyle({
      transform: `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.02, 1.02, 1.02)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`,
    });
  };

  const skills = ["Python", "Machine Learning", "Deep Learning", "NLP", "LLMs", "LangChain", "React", "SQL", "Power BI", "Figma"];

  return (
    <section id="about" className="w-full py-32 bg-base">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="mb-16"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-text/60">01 — About</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image with Tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm group"
          >
            <div 
              ref={imageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={tiltStyle}
              className="w-full h-full transition-transform duration-200 ease-out will-change-transform"
            >
              <img 
                src="/annanya-photo.jpg"  
                alt="Annanya Sharma"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-accent/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="flex flex-col space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
            >
              <h2 className="text-4xl md:text-5xl font-body leading-tight text-text mb-6">
                I merge technical precision with creative vision to build digital experiences that leave a lasting impression.
              </h2>
              <p className="font-sans text-text/70 text-lg leading-relaxed">
                With a background in design and development, I specialize in creating highly interactive, accessible, and performant web applications. I believe that every interaction should feel intentional and every pixel should serve a purpose.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 py-8 border-t border-b border-white/5">
              <div>
                <p className="text-5xl font-heading font-bold text-accent mb-2">
                  9.1
                </p>
                <p className="font-mono text-sm text-text/60 uppercase">CGPA (Top Performer)</p>
              </div>
              <div>
                <p className="text-5xl font-heading font-bold text-text mb-2">
                  <AnimatedCounter from={0} to={10} suffix="+" />
                </p>
                <p className="font-mono text-sm text-text/60 uppercase">Projects Built</p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <p className="font-mono text-sm text-text/60 uppercase mb-4">Core Arsenal</p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 border border-white/10 rounded-full text-sm font-sans text-text/80 hover:border-accent hover:text-accent transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
