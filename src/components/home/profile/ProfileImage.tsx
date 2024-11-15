"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import MyImage from "@/../public/images/heroImage.svg";

export const ProfileImage = () => {
  return (
    <div className="hidden lg:flex relative w-full lg:w-1/2 h-full items-center justify-center">
      <motion.div
        className="relative w-full max-w-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <motion.div
          className="absolute top-1/4 right-10 w-8 h-8 border-4 border-yellow-400 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        ></motion.div>
        <motion.div
          className="absolute top-1/3 -right-4 w-4 h-4 bg-purple-400 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        ></motion.div>

        <Image
          src={MyImage}
          alt="hero image"
          className="w-full h-auto"
          priority
        />
      </motion.div>
    </div>
  );
};
