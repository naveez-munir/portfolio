"use client";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export const IntroSection = () => {
  return (
    <motion.div
      className="mt-auto mb-12 w-full order-2 sm:w-1/4 sm:order-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <AnimatedSection delay={0}>
        <h1 className="text-4xl font-bold mb-4">
          Naveez Munir<span className="text-accent">.</span>
        </h1>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <p className="mb-4">Twitter | LinkedIn</p>
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <p className="mb-8">GitHub | Gmail</p>
      </AnimatedSection>
      <AnimatedSection delay={0.6}>
        <button className="px-6 py-3 bg-accent text-foreground font-semibold rounded-full shadow-custom">
          Contact Me
        </button>
      </AnimatedSection>
    </motion.div>
  );
};
