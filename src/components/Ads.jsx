import React from 'react'
import { motion } from 'framer-motion'

function Ads() {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 relative bg-[#EDEDEDDA]">
                <motion.div className="flex items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <img src="images/plot.png" alt='' className='h-[150px] lg:h-[350px] lg:object-cover object-contain rounded-[20px] p-[20px_5px] lg:p-[20px_40px] ' />
                </motion.div>
                <motion.div className="flex flex-col justify-center items-center text-center p-[5px_10px] absolute left-[100px] top-[30px] lg:flex lg:flex-col lg:text-center lg:justify-center lg:items-center lg:absolute lg:left-[270px] lg:p-[80px_100px] "
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className='text-[7px] lg:text-base'>Why Choose Bhavya’s Plant Store?</h3>
                    <p className='mb-0  text-[6px] lg:text-base'>At Bhavya’s Plant Store, we take pride in offering a diverse selection of healthy, well-nurtured plants that bring life to your spaces. Whether you're looking for vibrant flowering plants, easy-to-care-for succulents, or fresh herbs for your kitchen, we have something for every plant lover. Our commitment to quality ensures that each plant is handpicked and cared for with expertise. With affordable pricing, expert guidance, and a passion for greenery, we strive to make plant shopping an enjoyable and fulfilling experience. Visit us and bring home a touch of nature today!motion.</p>
                    <p className='txt text-[6px] lg:text-base'>shop now</p>
                </motion.div>
            </div>
        </div>
    )
}

export default Ads
