import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/giftprofile.png";
import { delay, motion } from "framer-motion";

const container = (delay) =>({
    hidden: {x: -100 ,opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5,delay: delay,
        }
    }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pd-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden" 
            animate ="visible"
            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Gift Mphuthi
            </motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial="hidden" 
            animate ="visible"
            className="bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text text-4xl tracking-tighter text-transparent">
              Software Engineer
            </motion.span>
            <motion.p
            variants={container(1)}
            initial="hidden" 
            animate ="visible"
            className="my-2 max-w-wxl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
            
            <motion.div 
            variants={container(1.5)}
            initial="hidden" 
            animate ="visible"
            className="flex gap-4">
              <button className="bg-gradient-to-r from-gray-500 via-white to-gray-500 text-gray-800 py-2 px-6 rounded-full hover:bg-gradient-to-r hover:from-gray-600 hover:via-white hover:to-gray-600">
                Download CV
              </button>
              
              <button className="bg-gradient-to-r from-white via-gray-500 to-white text-gray-800 py-2 px-6 rounded-full border border-gray-500 hover:bg-gradient-to-r hover:from-white hover:via-gray-600 hover:to-white">
                Contact
              </button>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
            initial={{x:100 ,opacity: 0}}
            animate={{x:0,opacity: 1}}
            transition={{duration: 1 , delay: 1.2}}
            src={profilepic} alt="profilepic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
