import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { increment, removecart } from '../redux/Features/Cartslice';


function Fruitplan({ item }) {
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart.value || []); 
    const dispatch = useDispatch()

    return (
        <div>
            <div className="bg-[#EDEDEDDA] relative p-[20px]">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: window.innerWidth > 576 ? -55 : -45 }}
                    transition={{ duration: 0.6 }}
                >
                    <img src={item.images} alt="" className='mb-5' />
                </motion.div>
                <div className="absolute lg:bottom-[20px] lg:left-[65px] bottom-[20px] left-[17px] flex flex-col justify-center items-center text-center">
                    <p className='mb-2'>{item.name}</p>
                    <div className="flex lg:gap-[10px] gap-[5px] lg:text-base text-[10px]">
                        <button className="menu__button">
                            <span onClick={() => navigate("/product", { state: { item } })}>View Details</span>
                        </button>
                        {
                            cart.some((carts) => carts.id === item.id) ? <button className="menu__buttons" onClick={() => {
                                console.log("🟢 Button Clicked!", item);
                                dispatch(removecart(item.id));
                            }}>
                                <span>remove cart</span>
                            </button> : <button className="menu__button" onClick={() => {
                                console.log("🟢 Button Clicked!", item);
                                dispatch(increment(item));
                            }}>
                                <span>Add to cart</span>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fruitplan
