import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '../data/projects';
import { fadeUpVariants } from '../utils/animations';
import MagneticButton from '../components/common/MagneticButton';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative group w-full mb-32 last:mb-0"
    >
      <a href={project.link} className="block relative" data-cursor="project">
        {/* Background Number */}
        <div className="absolute -top-12 -left-4 md:-left-8 text-[120px] md:text-[200px] font-heading font-bold text-white/5 pointer-events-none z-0 leading-none select-none transition-all duration-500 group-hover:text-accent/10">
          0{index + 1}
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          
          {/* Image Container */}
          <div className="w-full md:w-3/5 aspect-[4/3] overflow-hidden rounded-sm relative">
            <motion.div 
              className="w-full h-[140%] origin-center"
              style={{ y }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.25,1,0.5,1]"
              />
            </motion.div>
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay pointer-events-none" />
          </div>

          {/* Info Container */}
          <div className="w-full md:w-2/5 flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-heading text-text mb-4 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            
            <p className="font-sans text-text/70 text-lg mb-8 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech) => (
                <span key={tech} className="font-mono text-xs text-text/50 bg-white/5 px-3 py-1 rounded-sm uppercase">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="inline-flex items-center text-text font-mono text-sm uppercase tracking-widest relative overflow-hidden group/link self-start">
              <span className="mr-2">View Project</span>
              <span className="text-accent transition-transform duration-300 group-hover/link:translate-x-1">→</span>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent -translate-x-[101%] group-hover/link:translate-x-0 transition-transform duration-300 ease-out" />
            </div>
          </div>
          
        </div>
      </a>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="work" className="w-full py-32 bg-base">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="mb-24"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-text/60">03 — Selected Work</span>
        </motion.div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-32 flex justify-center">
          <MagneticButton className="px-12 py-5 border border-white/20 rounded-full hover:bg-white/5 hover:border-accent transition-all duration-300">
            <span className="font-mono text-sm uppercase tracking-widest text-text">See All Work</span>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
