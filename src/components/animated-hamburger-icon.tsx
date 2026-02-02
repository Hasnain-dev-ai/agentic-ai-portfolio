"use client";

import { motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  className?: string;
}



export default function AnimatedHamburgerIcon({ isOpen, className = '' }: Props) {
  return (
    <div className={`relative flex flex-col justify-center items-center w-6 h-6 ${className}`}>
      <motion.div
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 6 : -6
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="absolute w-5 h-0.5 bg-white rounded-full"
      />
      <motion.div
        animate={{
          opacity: isOpen ? 0 : 1,
          x: isOpen ? 10 : 0
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute w-5 h-0.5 bg-white rounded-full"
      />
      <motion.div
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -6 : 6
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="absolute w-5 h-0.5 bg-white rounded-full"
      />
    </div>
  );
}