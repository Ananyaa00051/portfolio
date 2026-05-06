import { motion } from 'framer-motion';

export default function MarqueeRow({ items, direction = "left", speed = 20 }) {
  const marqueeVariants = {
    animate: {
      x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      },
    },
  };

  // Duplicate items to create infinite scroll effect
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden whitespace-nowrap py-4">
      <motion.div
        className="flex space-x-12 px-6"
        variants={marqueeVariants}
        animate="animate"
      >
        {displayItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 text-2xl md:text-4xl font-heading text-text/60">
            {typeof item === "string" ? <span>{item}</span> : item}
            <span className="text-accent ml-12">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
