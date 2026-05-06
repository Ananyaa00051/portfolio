import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { fadeUpVariants } from '../utils/animations';

export default function Experience() {
  return (
    <section id="experience" className="w-full py-32 bg-base relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="mb-20"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-text/60">02 — Experience</span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="mb-16"
        >
          <p className="text-xl md:text-2xl font-body text-text/90 border-l-2 border-accent pl-6 italic">
            “Experience across AI engineering, research, and design — building both intelligent systems and user-focused experiences.”
          </p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-16 py-8 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-10 w-3 h-3 bg-base border border-accent rounded-full -translate-x-[6.5px] group-hover:bg-accent transition-colors duration-300" />
              
              <div className="bg-transparent border border-white/5 p-8 rounded-sm hover:border-accent/30 hover:bg-white/[0.02] transition-all duration-500 shadow-[0_0_0_rgba(157,78,221,0)] hover:shadow-[0_0_30px_rgba(157,78,221,0.05)]">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-3xl font-heading text-text mb-1">{exp.company}</h3>
                    <p className="font-sans text-accent text-lg">{exp.role}</p>
                  </div>
                  <span className="font-mono text-sm text-text/50">{exp.date}</span>
                </div>
                
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="font-sans text-text/70 flex items-start">
                      <span className="text-accent mr-3 mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
