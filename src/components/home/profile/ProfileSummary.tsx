"use client"
import { ProfileImage } from "./ProfileImage";
import { IntroSection } from "./Intro";
import { motion } from "framer-motion";
export const ProfileSummary = () => {
  return (
    <div className="relative min-h-[65vh] md:min-h-[80vh] bg-background overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-foreground/5">
        <div className="max-w-5xl mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between h-full pt-20 lg:pt-0">
            <IntroSection />
            <ProfileImage />
          </div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-2 md:bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-accent"
        >
          <path
            d="M12 4v16m0 0l-6-6m6 6l6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
 };
