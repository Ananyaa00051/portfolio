import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { fadeUpVariants } from '../utils/animations';

const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.link || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-accent/40 transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover overlay with description */}
        <div className="absolute inset-0 bg-base/90 backdrop-blur-sm flex flex-col justify-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="font-sans text-text/80 text-sm leading-relaxed line-clamp-4">
            {project.description}
          </p>
          <span className="mt-4 font-mono text-xs text-accent uppercase tracking-widest">
            View Project →
          </span>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-4">
        <h3 className="font-heading text-text text-base font-semibold mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] text-text/50 bg-white/5 border border-white/10 px-2 py-0.5 rounded-sm uppercase"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="font-mono text-[10px] text-text/30 px-1 py-0.5">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </a>
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
          className="mb-16"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-text/60">03 — Selected Work</span>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
