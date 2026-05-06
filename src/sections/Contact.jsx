import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, CheckCircle2 } from 'lucide-react';
import { fadeUpVariants, textVariants, staggerContainer } from '../utils/animations';
import MagneticButton from '../components/common/MagneticButton';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { name: "LinkedIn", url: "#" },
    { name: "GitHub", url: "https://github.com/Ananyaa0005" },
    { name: "Twitter/X", url: "#" },
    { name: "Dribbble", url: "#" }
  ];

  return (
    <section id="contact" className="w-full py-32 bg-base">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="mb-20"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-text/60">05 — Let's Talk</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column */}
          <div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="clip-text">
                <motion.h2 variants={textVariants} className="text-5xl md:text-7xl font-heading text-text leading-tight">
                  Got a project
                </motion.h2>
              </div>
              <div className="clip-text">
                <motion.h2 variants={textVariants} className="text-5xl md:text-7xl font-heading text-text leading-tight">
                  in mind?
                </motion.h2>
              </div>
            </motion.div>

            {/* Email Interaction */}
            <div className="mb-10">
              <p className="font-mono text-sm text-text/60 mb-4 uppercase">Drop me a line</p>
              <div 
                className="group inline-flex items-center cursor-pointer"
                onClick={() => handleCopy("ananyaa00051@gmail.com")}
              >
                <span className="text-3xl md:text-5xl font-body text-accent border-b border-accent/30 group-hover:border-accent transition-colors break-all">
                  ananyaa00051@gmail.com
                </span>
                <div className="ml-4 p-3 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-4 group-hover:translate-x-0 hidden md:block">
                  {copied ? <CheckCircle2 className="text-green-500 w-5 h-5" /> : <Copy className="text-text w-5 h-5" />}
                </div>
              </div>
            </div>

            {/* Phone Interaction */}
            <div className="mb-16">
              <p className="font-mono text-sm text-text/60 mb-4 uppercase">Give me a call</p>
              <div 
                className="group inline-flex items-center cursor-pointer"
                onClick={() => handleCopy("+917838519631")}
              >
                <span className="text-3xl md:text-5xl font-body text-accent border-b border-accent/30 group-hover:border-accent transition-colors">
                  +91 78385 19631
                </span>
                <div className="ml-4 p-3 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-4 group-hover:translate-x-0 hidden md:block">
                  {copied ? <CheckCircle2 className="text-green-500 w-5 h-5" /> : <Copy className="text-text w-5 h-5" />}
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="font-mono text-sm text-text/60 mb-6 uppercase">Connect</p>
              <div className="flex flex-wrap gap-4">
                {socials.map((social) => (
                  <MagneticButton key={social.name}>
                    <a 
                      href={social.url}
                      className="px-6 py-3 border border-white/10 rounded-full font-mono text-sm text-text hover:text-base hover:bg-accent hover:border-accent transition-all duration-300 inline-block hover:-rotate-2"
                    >
                      {social.name}
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="flex flex-col space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="group">
                <label className="block font-mono text-sm text-text/60 mb-2 uppercase group-focus-within:text-accent transition-colors">Name</label>
                <input 
                  type="text" 
                  placeholder="What's your name?" 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-text font-sans text-xl focus:outline-none focus:border-accent transition-colors placeholder:text-text/20"
                />
              </div>
              <div className="group">
                <label className="block font-mono text-sm text-text/60 mb-2 uppercase group-focus-within:text-accent transition-colors">Email</label>
                <input 
                  type="email" 
                  placeholder="hello@company.com" 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-text font-sans text-xl focus:outline-none focus:border-accent transition-colors placeholder:text-text/20"
                />
              </div>
              <div className="group">
                <label className="block font-mono text-sm text-text/60 mb-2 uppercase group-focus-within:text-accent transition-colors">Message</label>
                <textarea 
                  rows="4"
                  placeholder="Tell me about your project..." 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-text font-sans text-xl focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-text/20"
                ></textarea>
              </div>
              
              <div className="pt-4">
                <MagneticButton className="w-full md:w-auto px-12 py-5 bg-accent text-base font-mono text-sm uppercase tracking-widest font-bold hover:bg-white transition-colors duration-300">
                  Send Message
                </MagneticButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
