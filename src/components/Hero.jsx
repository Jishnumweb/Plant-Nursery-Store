import React from 'react'
import { motion } from 'framer-motion'


function Hero() {
  return (
    <div>
      <div className="row h-[450px] lg:h-auto">
        <motion.div className="col-md-6 flex justify-center"
        >
          <img src="images/first.png" alt="" className='h-[200px] object-contain mb-[30px] lg:h-[600px]' />
        </motion.div>
        <motion.div className="col-md-6 flex flex-col justify-center items-center text-center h-[300px] lg:h-auto"
          initial={{ opacity: 0, x: 100, y: window.innerWidth > 576 ? 0 : -50 }}
          whileInView={{ opacity: 1, x: window.innerWidth > 576 ? -150 : 0, y: window.innerWidth > 576 ? 0 : -90 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-[14px] lg:text-[40px] lg:mb-2 lg:mt-0 mb-[5px] mt-[5px] '>Welcome to Bhavyas <br />Plant Nursery </h1>
          <h4 className='text-[10px] lg:text-base lg:mb-0 mb-[5px]'>Step into a World of Freshness & Nature!</h4>
          <p className='p-0 lg:text-base text-[10px]'>At Planta, we believe that every home deserves a touch of nature. Whether you’re a seasoned plant parent or just starting your green journey, we’re here to bring you the best selection of vibrant, healthy plants. Our goal is to make plant shopping easy, enjoyable, and accessible for everyone. From air-purifying houseplants to stunning decorative greens, we have something for every space. Let’s grow together and make the world a little greener, one plant at a time!</p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration0: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <button className="menu__button">
              <span><a href="#contact" className='no-underline text-white'>Shop now</a></span>
            </button>          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
