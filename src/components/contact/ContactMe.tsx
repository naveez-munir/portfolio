"use client";
import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
} from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const formVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
};

const ContactMe: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef(null);
  const inView = useInView(formRef, {
    once: false,
    margin: "-10% 0px -10% 0px",
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <motion.form
        ref={formRef}
        initial="hidden"
        animate={controls}
        variants={formVariants}
        onSubmit={handleSubmit}
        className={`w-full max-w-xl md:max-w-3xl px-6 py-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105`}
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
          borderColor: "var(--border-color)",
          boxShadow: `0 4px 6px var(--shadow-color)`,
        }}
      >
        <h2
          className={`text-3xl font-semibold mb-6 text-center`}
          style={{ color: "var(--foreground)" }}
        >
          Contact Me
        </h2>

        <div className="mb-6">
          <label
            htmlFor="name"
            className={`block mb-2 text-sm font-medium`}
            style={{ color: "var(--foreground)" }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2`}
            style={{
              backgroundColor: "var(--background)",
              color: "var(--foreground)",
              borderColor: "var(--border-color)",
              boxShadow: `0 2px 4px var(--shadow-color)`,
              transition: "box-shadow 0.3s ease-in-out",
            }}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className={`block mb-2 text-sm font-medium`}
            style={{ color: "var(--foreground)" }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2`}
            style={{
              backgroundColor: "var(--background)",
              color: "var(--foreground)",
              borderColor: "var(--border-color)",
              boxShadow: `0 2px 4px var(--shadow-color)`,
            }}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className={`block mb-2 text-sm font-medium`}
            style={{ color: "var(--foreground)" }}
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2`}
            style={{
              backgroundColor: "var(--background)",
              color: "var(--foreground)",
              borderColor: "var(--border-color)",
              boxShadow: `0 2px 4px var(--shadow-color)`,
            }}
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className={`px-8 py-3 text-base font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 transition-all duration-300`}
            style={{
              color: "var(--background)",
              backgroundColor: "var(--accent)",
              boxShadow: `0 2px 4px var(--shadow-color)`,
            }}
          >
            Send Message
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default ContactMe;
