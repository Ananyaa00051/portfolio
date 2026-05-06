import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import MarqueeRow from '../components/common/MarqueeRow';
import { textVariants, staggerContainer } from '../utils/animations';

const AnimatedGeometry = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.15;
  });

  return (
    <Icosahedron ref={meshRef} args={[2, 0]} position={[0, 0, 0]} scale={1.5}>
      <meshStandardMaterial
        color="#1a1a1a"
        wireframe
        emissive="#0a0a0a"
        roughness={0.2}
      />
    </Icosahedron>
  );
};

export default function Hero() {
  const title1 = "ANNANYA";
  const title2 = "SHARMA";

  return (
    <section className="relative w-full h-screen flex flex-col justify-between overflow-hidden pt-32">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} intensity={1} />
          <AnimatedGeometry />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center z-10 pointer-events-none">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          <div className="clip-text">
            <motion.h1
              variants={textVariants}
              custom={1}
              className="text-[12vw] leading-[0.85] font-heading font-bold text-text tracking-tighter"
            >
              {title1}
            </motion.h1>
          </div>
          <div className="clip-text ml-auto">
            <motion.h1
              variants={textVariants}
              custom={3}
              className="text-[10vw] leading-[0.85] font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-700 tracking-tighter"
            >
              {title2}
            </motion.h1>
          </div>
        </motion.div>
      </div>

      {/* Bottom Area */}
      <div className="relative z-10 w-full pb-8">
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-end mb-8">
          <div className="hidden md:block w-1/3">
            <p className="font-body text-2xl text-text/80 leading-snug">
              Crafting digital experiences through motion, 3D, and interaction.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-text/60">Scroll</span>
            <motion.div 
              className="w-[1px] h-12 bg-white/20 relative overflow-hidden"
            >
              <motion.div 
                className="absolute top-0 left-0 w-full h-1/2 bg-accent"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            </motion.div>
          </div>
        </div>

        <div className="border-t border-b border-white/5 bg-base/50 backdrop-blur-sm">
          <MarqueeRow 
            items={[
              "Available for work",
              "Portfolio 2025",
              "Based in Delhi, India",
              "Open to opportunities"
            ]} 
            speed={25} 
          />
        </div>
      </div>
    </section>
  );
}
