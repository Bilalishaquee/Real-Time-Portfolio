import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 sm:py-10 md:py-12 transition-colors duration-300 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-6 sm:mb-8">
            <motion.div
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 sm:mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Bilal Ishaque
            </motion.div>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Full Stack Developer passionate about creating innovative solutions and beautiful user experiences.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-gray-400 text-sm sm:text-base">
              <span>Made</span>
              {/* <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div> */}
              <span>by</span>
              <Code className="w-4 h-4 text-blue-400" />
              <span>Bilal Ishaque</span>
            </div>
            <p className="text-gray-500 mt-1.5 sm:mt-2 text-xs sm:text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};