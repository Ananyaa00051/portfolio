import { motion } from 'framer-motion';
import { fadeUpVariants, staggerContainer } from '../utils/animations';
import { Code2, Server, Palette, Database, Terminal, Layers, Brain, BarChart } from 'lucide-react';

const skillGroups = [
  {
    category: "Languages & Dev",
    icon: <Code2 className="text-accent w-6 h-6 mb-4" />,
    skills: ["Python", "SQL (MySQL)", "React", "Vite", "Tailwind CSS", "HTML", "CSS"]
  },
  {
    category: "AI & GenAI",
    icon: <Brain className="text-accent w-6 h-6 mb-4" />,
    skills: ["Machine Learning", "Deep Learning", "NLP", "LLMs", "RAG", "Agentic AI", "Prompt Engineering"]
  },
  {
    category: "Frameworks",
    icon: <Layers className="text-accent w-6 h-6 mb-4" />,
    skills: ["LangChain", "LangGraph", "Hugging Face", "TensorFlow", "Keras", "Scikit-learn"]
  },
  {
    category: "Data & Analytics",
    icon: <BarChart className="text-accent w-6 h-6 mb-4" />,
    skills: ["Pandas", "NumPy", "Data Preprocessing", "Feature Engineering", "Excel", "Power BI", "Data Viz"]
  },
  {
    category: "Tools & Platforms",
    icon: <Terminal className="text-accent w-6 h-6 mb-4" />,
    skills: ["Git", "GitHub", "VS Code", "Google Colab", "Notion"]
  },
  {
    category: "Design & Product",
    icon: <Palette className="text-accent w-6 h-6 mb-4" />,
    skills: ["Figma", "Canva", "UI/UX Design", "Visual Design"]
  }
];

export default function Skills() {
  return (
    <section className="w-full py-32 bg-base relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="mb-20"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-text/60">04 — Stack</span>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              variants={fadeUpVariants}
              className="bg-white/[0.02] border border-white/5 p-8 rounded-sm hover:border-accent/30 transition-colors duration-500 group"
            >
              {group.icon}
              <h3 className="text-2xl font-heading text-text mb-6">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="font-mono text-xs text-text/60 bg-white/5 px-3 py-1 rounded-sm group-hover:text-text transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
