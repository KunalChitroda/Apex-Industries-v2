"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

interface ScrollToTopProps {
  showScrollTop: boolean;
  scrollToTop: () => void;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ showScrollTop, scrollToTop }) => {
  if (!showScrollTop) return null;

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white p-4 rounded-full shadow-xl shadow-red-500/25 hover:shadow-2xl hover:shadow-red-500/30 backdrop-blur-sm border border-white/20 transition-all duration-300 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <ChevronUp className="w-6 h-6 group-hover:translate-y-[-2px] transition-transform duration-200" />
    </motion.button>
  );
};

export default ScrollToTop; 