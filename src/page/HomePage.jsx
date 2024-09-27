import React from "react";
import { Button } from "flowbite-react";
import { motion } from "framer-motion";

export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 dark:text-white text-black">
      {/* Main Section */}
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-16 p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold mb-6 border-b-4 border-teal-500 dark:border-blue-500 inline-block pb-2">
            <span className="hover:text-teal-500 dark:hover:text-blue-500 transition duration-300">
              Aditya Bayu Prabowo
            </span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
            A passionate software developer with a strong foundation in building
            impactful applications using Java Spring Boot, React.js, and React
            Native. Experienced in robotics and IoT with expertise in frameworks
            like DARwIn-OP, ThingSpeak, and Arduino.
          </p>
          <Button
            color="success"
            pill
            size="lg"
            className="hover:bg-green-600 dark:hover:bg-green-500 transition duration-300 transform hover:scale-105 hover:shadow-lg"
            href="/portofolio"
          >
            <p className="dark:text-white text-black font-bold">
              Let’s get started &rarr;
            </p>
          </Button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/src/assets/Foto_Aditya_Bayu_Prabowo-removebg-preview.png"
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl"
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      {/* About Me Section */}
      <motion.div
        className="max-w-4xl mx-auto p-6 mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          I am a software developer with expertise in full-stack development
          using Java Spring Boot, React.js, and React Native. Over the years, I
          have successfully developed impactful web and mobile applications. My
          experience extends to robotics and IoT, where I have worked with
          frameworks like DARwIn-OP, ThingSpeak, and Arduino. I have also led
          automation and robotics projects, utilizing cost-efficient solutions
          to solve engineering challenges. Additionally, I have published a
          research paper on cost-effective automation for humanoid robots in E3S
          Web of Conferences.
        </p>
      </motion.div>
    </div>
  );
};

export default HomePage;
