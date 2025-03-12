import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { increment, removecart } from '../redux/Features/Cartslice';
// import { useSelector } from 'react-redux';

function Productcard({ item }) {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.value || []);
    useEffect(() => {
        console.log("Productcard Component Rendered");
    }, []);

    return (
        <div>
            <div className="bg-[#EDEDEDDA] relative p-[20px]">
                <motion.div className="proimg"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: window.innerWidth > 576 ? -55 : -45 }}
                    transition={{ duration: 0.6 }}
                >
                    <img src={item.images}  alt="Image" loading="lazy" className='mb-5' />
                </motion.div>
                <div className="absolute  lg:bottom-[20px] lg:left-[50px] bottom-[20px] left-[10px] right-[10px] flex flex-col justify-center items-center text-center">
                    <p className='mb-2'>{item.name} </p>
                    <div className="flex lg:gap-[10px] gap-[5px]  lg:text-base text-[10px] mt-2 ">
                        <button onClick={() => navigate("/product", { state: { item } })}
                            className="cursor-pointer group relative  hover:bg-zinc-300  text-[13px]   transition-all duration-200 ease-in-out shadow hover:shadow-lg lg:w-28 lg:h-7 h-8 w-20"
                        >
                            <div className="relative flex items-center justify-center gap-2">
                                <span className="relative inline-block overflow-hidden">
                                    <span
                                        className="block transition-transform duration-300 group-hover:-translate-y-full"
                                    >
                                         Details
                                    </span>
                                    <span
                                        className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0"
                                    >
                                        Explore
                                    </span>
                                </span>

                                <svg
                                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-45"
                                    viewBox="0 0 24 24"
                                >
                                    <circle fill="currentColor" r="11" cy="12" cx="12"></circle>
                                    <path
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                        stroke="white"
                                        d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
                                    ></path>
                                </svg>
                            </div>
                        </button>

                        {
                            cart.some((carts) => carts.id === item.id) ?
                                <button className="ui-btn" onClick={() => dispatch(removecart(item.id))}>Remove</button>
                                : <button className="uis-btn" onClick={() => dispatch(increment(item))}>Add  cart</button>

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productcard
