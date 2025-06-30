import React from 'react';
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {
  const skills = [
    { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600' },
    { name: 'TypeScript', level: 90, color: 'from-blue-400 to-blue-600' },
    { name: 'React', level: 92, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Node.js', level: 88, color: 'from-green-400 to-green-600' },
    { name: 'Python', level: 85, color: 'from-blue-500 to-blue-700' },
    { name: 'MongoDB', level: 82, color: 'from-green-500 to-green-700' },
    { name: 'PostgreSQL', level: 80, color: 'from-blue-600 to-blue-800' },
    { name: 'Docker', level: 75, color: 'from-cyan-500 to-cyan-700' },
    { name: 'TensorFlow/PyTorch', level: 78, color: 'from-orange-400 to-red-600' },
    { name: 'NLP/LLMs', level: 75, color: 'from-purple-400 to-purple-700' },
    { name: 'Solidity', level: 80, color: 'from-gray-500 to-gray-800' },
    { name: 'Web3.js/Ethers.js', level: 78, color: 'from-indigo-400 to-indigo-700' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-18 md:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            Technical <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical expertise and proficiency levels across various technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group"
            >
              <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 md:gap-8 text-center max-w-4xl mx-auto"
        >
          {[
            { label: 'Years Experience', value: '3+' },
            { label: 'Projects Completed', value: '50+' },
            { label: 'Technologies', value: '15+' },
            { label: 'Happy Clients', value: '25+' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="p-3 sm:p-4 rounded-lg bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-1.5 sm:mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};