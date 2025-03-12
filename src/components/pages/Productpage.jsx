"use client"; 
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GiPlantWatering } from "react-icons/gi";
import { CiLight } from "react-icons/ci";
import { MdOutlineGppGood } from "react-icons/md";
import plantsData from '../../datas/plantdata';
import Outdoor from '../Outdoor';
import { GrFavorite } from "react-icons/gr";
import { MdOutlineFavorite } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { increment, removecart } from '../../redux/Features/Cartslice';

function Productpage() {
    const location = useLocation()
    const { item } = location.state || {}
    const plants = plantsData
    const newplant = plants.filter((plantss) => plantss.category === item.category)
    const [image, setImage] = useState(`${item.images}`)
    const [bgcolor,setBgcolor] = useState("")
    const [text,setText] = useState("black")
    const handleImage = (images,color) => {
        setImage(images)
        setBgcolor(color)
    }
    const cart = useSelector(state => state.cart.value)
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
    return (
        <div>
            <div className="grid grid-cols-1  lg:grid-cols-2 mt-[100px] container  mb-5" style={{ backgroundColor: bgcolor,color:text,transition: "background-color 0.6s ease-in-out" }}>
                <div className="flex flex-col justify-start items-start p-[40px_10px] lg:mr-[30px] mr-0 text-[#196039] mb-4">
                    <motion.div className=" mb-3"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration0: 2.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className='text-[15px] lg:text-base'>{item.name}</h2>
                        <p className='lg:text-[15px] text-[10px] mb-4'>{item.description}</p>
                        <h6 className=' text-[11px] lg:text-base mb-3'>care level : {item.careLevel}</h6>
                        <div className="flex items-center gap-[10px] mb-5">
                        {
                            cart.some((carts) => carts.id === item.id) ?
                                <button className="ui-btn" onClick={() => dispatch(removecart(item.id))}>Remove</button>
                                : <button className="uis-btn" onClick={() => dispatch(increment(item))}>Add  cart</button>

                        }
                        </div>
                    </motion.div>
                    <h4 className='mt-4 mb-3 text-[14px]'>Treatments & Facts</h4>
                    <div className="flex text-center lg:flex-row flex-col lg:p-[10px] p-0 order-0 bg-[#EDEDED94] rounded-[10px] lg:gap-[2px] lg:w-[600px]">
                        <div className="p-[2px_10px] flex flex-col justify-center items-center">
                            <p className='text-[10px lg:text-[20px]'><GiPlantWatering /></p>
                            <h5 className='text-[10px] lg:text-[17px]'>Watering</h5>
                            <p className='text-[10px] lg:text-[12px]'>{item.watering}</p>
                        </div>
                        <div className="p-[2px_10px] flex flex-col justify-center items-center">
                            <p className='text-[10px] lg:text-[20px]'><CiLight /></p>
                            <h5 className='text-[10px] lg:text-[17px]'>light</h5>
                            <p className='text-[10px] lg:text-[12px]'>{item.light}</p>
                        </div>
                        <div className="p-[2px_10px] flex flex-col justify-center items-center">
                            <p className='text-[10px] lg:text-[20px]'><MdOutlineGppGood /></p>
                            <h5 className='text-[10px] lg:text-[17px]'>Beneifts</h5>
                            <p className='text-[10px] lg:text-[12px]'>{item.benefits.slice(0,100)}</p>
                        </div>
                    </div>
                </div>
                <motion.div className="order-2 "
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: window.innerWidth > 576 ? -45 : -45 }}
                    transition={{ duration: 0.6 }}
                >
                    <img src={image} alt="Image" loading="lazy"className='object-contain p-[0px_50px] h-[200px] lg:h-[500px]' />

                    <div className="flex justify-center items-center gap-[10px] lg:mt-0 mt-4">
                        <div className="h-[100px]" onClick={() => handleImage(item.images)}>
                            <img src={item.images} alt="Image" loading="lazy" className='h-[100px] object-contain' />
                        </div>
                        <div className="h-[100px]" onClick={() => handleImage(item.image2,"#D2FBA4")}>
                            <img src={item.image2} alt="Image" loading="lazy" className='h-[100px] object-contain' />
                        </div>
                        <div className="h-[100px]" onClick={() => handleImage(item.image3,"#ECF87F")}>
                            <img src={item.image3} alt="Image" loading="lazy" className='h-[100px] object-contain' />
                        </div>
                    </div>
                </motion.div>
            </div>
            <h4 className='container mb-5 related'>Related Plants</h4>
            <div className="container grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-x-10">
                {
                    newplant.map((plant) => (
                        <Outdoor key={plant.id} item={plant} />

                    ))
                }
            </div>
        </div>
    )
}

export default Productpage
