import React from 'react'
import { FaTruck } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa6";
import { RiCustomerServiceFill } from "react-icons/ri";

function Servicenew() {
    return (
        <div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px] m-[5px]">
                <div className="bg-[#AAAAAA0E] p-[0px_10px] lg:p-[10px] rounded-[3px] text-center flex flex-col justify-center items-center">
                    <h4 className='text-[10px] lg:text-base mt-[15px] lg:mt-0'><FaTruck /></h4>
                    <h5 className='text-[10px] lg:text-base'> Shipping & Delivery</h5>
                    <p  className='text-[9px] lg:text-base text-[#196039b1]'>We deliver within 3-7 business days using eco-friendly packaging. Free shipping is available on eligible orders</p>
                </div>
                <div className="bg-[#AAAAAA0E] p-[0px_10px] lg:p-[10px] rounded-[3px] text-center flex flex-col justify-center items-center">
                    <h4 className='text-[10px] lg:text-base mt-[15px] lg:mt-0'><FaSackDollar /></h4>
                    <h5  className='text-[10px] lg:text-base'>Return & Refund Policy</h5>
                    <p className='text-[9px] lg:text-base text-[#196039b1]'>Report damaged or incorrect plants within 7 days for a refund or store credit. Returns aren’t accepted for care</p>
                </div>
                <div className="bg-[#AAAAAA0E] p-[0px_10px] lg:p-[10px] rounded-[3px] text-center flex flex-col justify-center items-center">
                    <h4 className='text-[10px] lg:text-base mt-[15px] lg:mt-0'><FaLeaf /></h4>
                    <h5 className='text-[10px] lg:text-base'>Plant Care Support</h5>
                    <p className='text-[9px] lg:text-base text-[#196039b1]'>Every plant includes a care guide. Need help? Check our FAQs or contact our experts for advice.love from heart</p>
                </div>
                <div className="bg-[#AAAAAA0E] p-[0px_10px] lg:p-[10px] rounded-[3px] text-center flex flex-col justify-center items-center">
                    <h4 className='text-[10px] lg:text-base mt-[15px] lg:mt-0'><RiCustomerServiceFill /></h4>
                    <h5 className='text-[10px] lg:text-base'>Customer Support</h5>
                    <p className='text-[9px] lg:text-base text-[#196039b1]'>Reach us via WhatsApp, email, or phone. We reply within 24 hours to assist you.for all plant lovers in my world</p>
                </div>
            </div>
        </div>
    )
}

export default Servicenew
