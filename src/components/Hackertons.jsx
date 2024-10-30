import React from 'react';
import { motion } from "framer-motion";

// Import hackathon images (make sure to have these files in your project)
import Nerdam from '../assets/Nerdma.png';
import Girlcode from '../assets/Girlcode.png';
import Mukuru from '../assets/Mukuru.png';
import Melsoft from '../assets/Melsoft.png';
import Investec from '../assets/Investec.png';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const hackathons = [
  {
    title: "Nerdam Hackathon",
    image: Nerdam,
    description: "Built a call center agent using Django, OpenAI, Play AI, and Python. The agent handles customer inquiries efficiently.",
    technologies: ["Django", "OpenAI", "Play AI", "Python"]
  },
  {
    title: "Girlcode Hackathon",
    image: Girlcode,
    description: "Developed a charity app focused on SDG goals with a real-time dashboard.",
    technologies: ["OpenAI", "Python", "HTML", "CSS", "JavaScript", "Flask"]
  },
  {
    title: "Mukuru Hackathon",
    image: Mukuru,
    description: "Created a fintech solution using Node.js, JavaScript, and the Mukuru API to locate payout and pay-in centers for remittances across Africa.",
    technologies: ["Node.js", "JavaScript", "Mukuru API"]
  },
  {
    title: "Melsoft Hackathon",
    image: Melsoft,
    description: "Developed a business coach and job matching platform offering learnership opportunities. Utilized React, MySQL, OpenAI, and the Job Matching API from Quick API.",
    technologies: ["React", "MySQL", "Gemini", "OpenAI", "Quick API"]
  },
  {
    title: "Investec Hackathon",
    image: Investec,
    description: "Created 'Money Talks', a voice assistant that allows users to manage their finances and make transactions hands-free, using Investec’s APIs and Play AI.",
    technologies: ["Investec API", "Play AI"]
  }
];

const Technologies = () => {
  return (
    <div className="py-10">
      <motion.h1 whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}
        initial={{ opacity: 0, x: -100 }} className="my-10 text-center text-4xl font-bold">
        Hackathons
      </motion.h1>

      {/* Cards Section */}
      <motion.div whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}
        initial={{ opacity: 0, x: -100 }}
        className="flex flex-wrap items-center justify-center gap-8">
        
        {/* Hackathon Cards with Border */}
        {hackathons.map((hackathon, index) => (
          <motion.div
            key={index}
            variants={iconVariants(2.5 + index * 0.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-6 w-80 transition-transform duration-300"
          >
            <img src={hackathon.image} alt={hackathon.title} className="w-32 h-auto mx-auto mb-4" />
            <h2 className="text-center text-xl font-bold mb-2">{hackathon.title}</h2>
            <p className="text-neutral-400 text-sm mb-4">{hackathon.description}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {hackathon.technologies.map((tech, idx) => (
                <span key={idx} className="bg-gray-800 text-white px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

      </motion.div>
    </div>
  );
};

export default Technologies;
