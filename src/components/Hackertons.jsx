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

const Technologies = () => {
  return (
    <div >
      <motion.div whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}
        initial={{ opacity: 0, x: -100 }}
        className="flex flex-wrap items-center justify-center gap-4">

        {/* Each icon has a different animation duration */}
        {/* Technologies section is unchanged */}
        {/* Insert your previous technology icons here... */}

      </motion.div>

      {/* Hackathon Section */}
      <motion.h1 whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}
        initial={{ opacity: 0, x: -100 }} className="my-20 text-center text-4xl">
        Hackathons
      </motion.h1>

      <motion.div whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}
        initial={{ opacity: 0, x: -100 }}
        className="flex flex-wrap items-center justify-center gap-4">

        {/* Hackathon Images */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Nerdam} alt="Nerdam Hackathon" className="w-32 h-auto" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Girlcode} alt="Girlcode Hackathon" className="w-32 h-auto" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Mukuru} alt="Mukuru Hackathon" className="w-32 h-auto" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Melsoft} alt="Melsoft Hackathon" className="w-32 h-auto" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Investec} alt="Investec Hackathon" className="w-32 h-auto" />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Technologies;
