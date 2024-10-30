import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript, SiPython, SiDjango, SiNodedotjs, SiFlask, SiMysql, SiPostgresql, SiMongodb, SiGit, SiDocker, SiFlutter } from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <div className="border-b border-neutral-900 pd-24">
      <motion.h1 whileInView={{opacity: 1, x:0}} transition={{duration:1.5}}
      initial ={{opacity:0, x:-100}}className="my-20 text-center text-4xl">Skills & Technologies</motion.h1>
      <motion.div whileInView={{opacity: 1, x:0}} transition={{duration:1.5}}
      initial ={{opacity:0, x:-100}}
      className="flex flex-wrap items-center justify-center gap-4">
        
        {/* Each icon has a different animation duration */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-yellow-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPython className="text-7xl text-blue-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJava className="text-7xl text-red-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiDjango className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiNodedotjs className="text-7xl text-green-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiFlask className="text-7xl text-white" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiFlutter className="text-7xl text-blue-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-blue-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiGit className="text-7xl text-orange-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiDocker className="text-7xl text-blue-400" />
        </motion.div>

       
      </motion.div>
    </div>
  );
};

export default Technologies;
