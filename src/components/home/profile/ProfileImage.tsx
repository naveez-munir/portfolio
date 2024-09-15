"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import MyImage from "@/../public/images/naveezpic.png";

export const ProfileImage = () => {
  return (
    <motion.div
      className="flex justify-center sm:mt-auto order-1 sm:order-2"
      initial={{ opacity: 0, scale: 0.8 }} // Initial state
      animate={{ opacity: 1, scale: 1 }} // Final state
      transition={{ duration: 0.8 }} // Animation duration
    >
      <Image
        src={MyImage}
        alt="my image"
        priority
        className="w-auto h-auto md:w-56 md:h-56 lg:w-96 lg:h-96 md:mb-10 rounded-full object-cover shadow-custom"
      />
    </motion.div>
  );
};
