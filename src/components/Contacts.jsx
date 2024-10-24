import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h1 whileInView={{opacity: 1, y:0}} 
        transition={{duration:1}}
      initial ={{opacity:0, y:-100}} className='my-10 text-center text-4xl'>Get In Touch</motion.h1>
        <motion.div whileInView={{opacity: 1, y:0}} 
        transition={{duration:1.5}}
      initial ={{opacity:0, y:-100}} className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href='#'className='border-b'>{CONTACT.email}</a>
        </motion.div>
    </div>
  )
}

export default Contacts