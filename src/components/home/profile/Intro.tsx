"use client";
import { motion } from "framer-motion";

export const IntroSection = () => {
  return (
    <div className="w-full lg:w-1/2 z-10 pt-10 lg:pt-0 px-4 sm:px-8 md:px-12 lg:px-0">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="space-y-6 text-center lg:text-left"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="space-y-2"
        >
          <motion.h2
            className="text-lg sm:text-xl font-medium text-gray-300 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: false }}
          >
            HELLO I AM
          </motion.h2>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            Naveez Munir
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-xl mt-4 mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            Software Engineer, Full Stack Developer (MERN), AWS Cloud Expert
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-6 pt-6 justify-center lg:justify-start"
        >
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-all">
            Start Consulting
          </button>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-300 font-medium">
              Available for Freelance
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-6 pt-8 justify-center lg:justify-start"
        >
          <span className="text-gray-400">Find me on —</span>
          <div className="flex gap-4 text-gray-300">
            <a href="#" className="hover:text-purple-500 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-purple-500 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-purple-500 transition-colors">
              GitHub
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
