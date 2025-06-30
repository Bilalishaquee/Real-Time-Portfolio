import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Globe, Users, Brain, Database } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Proficient in both frontend and backend technologies, creating end-to-end solutions with MERN stack.'
    },
    {
      icon: Brain,
      title: 'Custom AI Solutions',
      description: 'Building intelligent applications with machine learning and AI integration for modern business needs.'
    },
    {
      icon: Database,
      title: 'Blockchain Development',
      description: 'Creating decentralized applications and smart contracts for secure and transparent systems.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Focus on writing efficient, scalable code that delivers exceptional user experiences.'
    },
    {
      icon: Globe,
      title: 'Modern Technologies',
      description: 'Always learning and implementing the latest tools and frameworks in web development.'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'Strong team player with excellent communication skills and agile development experience.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-16 sm:py-18 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-12 md:mb-16">
            I'm a passionate full-stack developer with a love for creating innovative web solutions. 
            My journey in tech is driven by curiosity and a constant desire to learn and grow.
            Specializing in MERN stack, custom AI solutions, and blockchain development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500 mb-3 sm:mb-4 group-hover:text-purple-600 transition-colors duration-300" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-14 md:mt-16 text-center"
        >
          <div className="inline-block p-5 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 dark:from-blue-500/20 dark:to-purple-600/20">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
              "Code is like humor. When you have to explain it, it's bad." - Cory House
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              This quote perfectly captures my philosophy of writing clean, intuitive code.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};