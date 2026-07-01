import { motion } from 'framer-motion';
import { academics } from '../data/academics';
import { fadeUpVariants } from '../utils/animations';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Academics() {
  return (
    <section id="academics" className="w-full py-32 bg-base relative">
      <div className="container mx-auto px-6 md:px-12">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="mb-16"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-text/60">02.5 — Academics</span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {academics.map((academic) => (
            <motion.div
              key={academic.id}
              variants={cardVariant}
              className="group bg-white/[0.03] border border-white/10 rounded-lg p-6 hover:border-accent/40 hover:bg-white/[0.05] transition-all duration-300"
            >
              {/* Header */}
              <div className="mb-4">
                <span className="font-mono text-[11px] text-text/40 bg-white/5 border border-white/10 px-2 py-1 rounded-sm">
                  {academic.date}
                </span>
                <h3 className="font-heading text-text text-lg leading-snug mt-3 group-hover:text-accent transition-colors duration-300">
                  {academic.institution}
                </h3>
                <p className="font-sans text-accent/80 text-sm mt-1">{academic.degree}</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/5 mb-4" />

              {/* Points */}
              <ul className="space-y-2">
                {academic.points.map((point, i) => (
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
