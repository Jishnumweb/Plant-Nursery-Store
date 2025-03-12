import React from 'react'
import { motion } from 'framer-motion'

function Category() {
    return (
        <div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-5 grid grid-cols-1 gap-3">
                <div className="bg-[#EDEDEDDA] rounded-[3px] d-flex " >
                    <div className="flex flex-col justify-center items-center lg:ml-[30px] text-center ml-[10px]">
                        <h2 className='text-[12px] lg:text-base'>Indoor Plants</h2>
                        <p className='text-[10px] lg:text-base'>Freshen up your space with easy-care indoor plants that purify the air and add a natural touch</p>
                        <button className="mouse">
                            <div className="scroll"></div>

                        </button>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: window.innerWidth > 576 ? -45 : -25 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src="images/second.png" alt="" className='w-[400px] h-[220px] object-cover lg:w-[600px] lg:h-[300px]' />
                    </motion.div>
                </div>


                <div className="bg-[#EDEDEDDA] rounded-[3px] d-flex " >
                    <div className="flex flex-col justify-center items-center lg:ml-[30px] text-center ml-[10px]">
                        <h2 className='text-[12px] lg:text-base'>Outdoor Plants</h2>
                        <p className='text-[10px] lg:text-base'>Freshen up your space with easy-care indoor plants that purify the air and add a natural touch</p>
                        <button className="mouse">
                            <div className="scroll"></div>

                        </button>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: window.innerWidth > 576 ? -50 : -25 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src="images/areca.png" alt="" className='w-[400px] h-[220px] object-cover lg:w-[600px] lg:h-[300px]' />
                    </motion.div>
                </div>


            </div>

        </div>
    )
}

export default Category
