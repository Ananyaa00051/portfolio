import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import useMousePosition from '../../hooks/useMousePosition';

export default function Cursor() {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default"); // default, project, text

  // Use spring for a smooth trailing effect
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);

  useEffect(() => {
    // A quick hack to detect hover on interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovered(true);
        setCursorVariant("hover");
      } else if (target.closest('[data-cursor="project"]')) {
        setIsHovered(true);
        setCursorVariant("project");
      } else {
        setIsHovered(false);
        setCursorVariant("default");
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  const variants = {
    default: {
      x: x - 8,
      y: y - 8,
      height: 16,
      width: 16,
      backgroundColor: "rgba(157, 78, 221, 1)",
      mixBlendMode: "difference"
    },
    hover: {
      x: x - 24,
      y: y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(157, 78, 221, 0.2)",
      border: "1px solid rgba(157, 78, 221, 1)",
      mixBlendMode: "normal"
    },
    project: {
      x: x - 40,
      y: y - 40,
      height: 80,
      width: 80,
      backgroundColor: "rgba(157, 78, 221, 0.9)",
      mixBlendMode: "normal"
    }
  };

  // Trailing dot variants
  const trailerVariants = {
    default: {
      x: cursorX.get() - 4,
      y: cursorY.get() - 4,
      opacity: 0.5
    },
    hover: {
      opacity: 0
    },
    project: {
      opacity: 0
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center text-base font-mono text-[10px]"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      >
        {cursorVariant === "project" && "View"}
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-text rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{ x: cursorX, y: cursorY }}
        animate={cursorVariant === "default" ? { opacity: 0.5 } : { opacity: 0 }}
      />
    </>
  );
}
