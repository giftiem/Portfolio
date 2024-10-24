import React from 'react';
import { education, certifications } from '../constants';
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 p-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        initial={{ opacity: 0, y: -100 }}
        className='my-20 text-center text-4xl'>
        Education & Certifications
      </motion.h1>

      {/* Education Section */}
      <div className="mb-8 flex flex-wrap lg:justify-start lg:ml-auto lg:max-w-4xl">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          initial={{ opacity: 0, x: -100 }}
          className="w-full lg:w-1/4">
          <p className='mb-2 text-sm text-neutral-400'>{education.period}</p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          initial={{ opacity: 0, x: 100 }}
          className='w-full max-w-xl lg:w-3/4'>
          <h6 className='mb-2 font-semibold '>{education.degree} -{" "}
            <span className="text-sm text-gray-500">
              {education.institution}
            </span>
          </h6>
        </motion.div>
      </div>

      {/* Certifications Section */}
      <div>
        {certifications.map((certification, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-start lg:ml-auto lg:max-w-4xl">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }}
              initial={{ opacity: 0, x: -100 }}
              className="w-full lg:w-1/4">
              <p className='mb-2 text-sm text-neutral-400'>{certification.issued}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }}
              initial={{ opacity: 0, x: 100 }}
              className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold '>{certification.certification} -{" "}
                <span className="text-sm text-gray-500">
                  {certification.institution}
                </span>
              </h6>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
