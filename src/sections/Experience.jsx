import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { fadeUpVariants } from '../utils/animations';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Experience() {
  return (
    <section id="experience" className="w-full py-32 bg-base relative">
      <div className="container mx-auto px-6 md:px-12">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="mb-16"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-text/60">02 — Experience</span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {experience.map((exp) => (
            <motion.div
              key={exp.id}
              variants={cardVariant}
              className="group bg-white/[0.03] border border-white/10 rounded-lg p-6 hover:border-accent/40 hover:bg-white/[0.05] transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-heading text-text text-xl leading-snug group-hover:text-accent transition-colors duration-300">
                    {exp.company}
                  </h3>
                  <p className="font-sans text-accent/80 text-sm mt-1">{exp.role}</p>
                </div>
                <span className="font-mono text-[11px] text-text/40 bg-white/5 border border-white/10 px-2 py-1 rounded-sm whitespace-nowrap shrink-0">
                  {exp.date}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/5 mb-4" />

              {/* Points */}
              <ul className="space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 font-sans text-text/60 text-sm leading-relaxed">
                    <span className="text-accent mt-[3px] shrink-0 text-xs">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
