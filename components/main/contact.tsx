"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";


import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

const fieldVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ContactForm = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-20 pb-20 z-[20]"
    >
      {/* Background Video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/encryption-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>

      {/* Form Container */}
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="w-[90%] md:w-[50%] z-[20] backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl"
      >
        {/* Heading */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-4xl font-bold text-white text-center mb-10"
        >
          Contact Me
        </motion.h1>

        <form className="flex flex-col gap-6">
          {/* Name */}
          <motion.input
            custom={0}
            variants={fieldVariant}
            initial="hidden"
            animate="visible"
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg border border-white/20 bg-gray-900/80 text-white
                       focus:outline-none focus:border-purple-500
                       transition-all duration-300 hover:border-purple-400"
          />

          {/* Email */}
          <motion.input
            custom={1}
            variants={fieldVariant}
            initial="hidden"
            animate="visible"
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg border border-white/20 bg-gray-900/80 text-white
                       focus:outline-none focus:border-purple-500
                       transition-all duration-300 hover:border-purple-400"
          />

          {/* Message */}
          <motion.textarea
            custom={2}
            variants={fieldVariant}
            initial="hidden"
            animate="visible"
            rows={5}
            placeholder="Your Message"
            className="px-4 py-3 rounded-lg border border-white/20 bg-gray-900/80 text-white
                       focus:outline-none focus:border-purple-500
                       transition-all duration-300 hover:border-purple-400 resize-none"
          />

          {/* CTA Button */}
          <motion.button
            type="submit"
            variants={slideInFromTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="Welcome-box flex items-center justify-center gap-2 py-[10px] px-[16px]
                      border border-[#7042f88b] opacity-[0.9]
                      text-white rounded-lg cursor-pointer mx-auto"
          >
            <SparklesIcon className="text-[#b49bff] h-5 w-5" />
            <span className="Welcome-text text-[14px]">
              Send Message
            </span>
          </motion.button>

        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
