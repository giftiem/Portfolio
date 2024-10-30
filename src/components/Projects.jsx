import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pd-4">
        <motion.h1
        whileInView={{opacity: 1, y:0}} 
        transition={{duration:0.5}}
        initial ={{opacity:0, y:-100}}
        className='my-20 text-center text-4xl'>Projects</motion.h1>
        <div>{PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div whileInView={{opacity: 1, x:0}} transition={{duration:0.5}}
                    initial ={{opacity:0, x:-100}} className='w-full lg:w-1/4'>
                    <img 
                    src={project.image} 
                    width={150} 
                    height={150} 
                    alt={project.title}
                    className='mb-6 rounded'
                    style={{ width: '200px', height: 'auto' }} />
                </motion.div>
                <motion.div
                whileInView={{opacity: 1, x:0}} transition={{duration:1}}
                initial ={{opacity:0, x:100}}
                className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'> {project.title} </h6>
                    <p className='mb-4 text-neutral-400'>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-gray-400'>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-4">
                      <button 
                        className="bg-gradient-to-r from-gray-500 via-white to-gray-500 text-gray-800 py-1.5 px-4 rounded-full hover:bg-gradient-to-r hover:from-gray-600 hover:via-white hover:to-gray-600">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          GitHub Repo
                        </a>
                      </button>
                    </div>
                </motion.div>    
            </div>
        ))}</div>
    </div>
  )
}

export default Projects
