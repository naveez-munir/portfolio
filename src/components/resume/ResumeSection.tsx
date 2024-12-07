"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { ResumeTimeline } from "./ResumeTimeline";
import { educationData, experienceData } from "@/data/resumeData";

export const ResumeSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-accent mb-4">My Resume</h1>
            <p className="text-lg text-foreground/80">
              Professional Experience & Education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative" ref={ref}>
              <ResumeTimeline title="Experience" items={experienceData} />
            </div>
            <div className="relative">
              <ResumeTimeline title="Education" items={educationData} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
