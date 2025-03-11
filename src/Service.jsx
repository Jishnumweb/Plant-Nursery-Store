import React from 'react'
import { FaTruck } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa6";
import { RiCustomerServiceFill } from "react-icons/ri";

function Service() {
  return (
    <div>
        <div className="row">
            <div className="col-md-6 d-flex servicemainsub p-0">
                <div className="servicesub ">
                    <h4 ><FaTruck /></h4>
                    <h5> Shipping & Delivery</h5>
                    <p>We deliver within 3-7 business days using eco-friendly packaging. Free shipping is available on eligible orders</p>
                </div>
                <div className="servicesub">
                    <h4><FaSackDollar /></h4>
                    <h5>Return & Refund Policy</h5>
                    <p>Report damaged or incorrect plants within 7 days for a refund or store credit. Returns aren’t accepted for care</p>
                </div>
            </div>
            <div className="col-md-6 d-flex servicemainsub">
                <div className="servicesub">
                    <h4><FaLeaf /></h4>
                    <h5>Plant Care Support</h5>
                    <p>Every plant includes a care guide. Need help? Check our FAQs or contact our experts for advice.love from heart</p>
                </div>
                <div className="servicesub">
                    <h4><RiCustomerServiceFill /></h4>
                    <h5>Customer Support</h5>
                    <p>Reach us via WhatsApp, email, or phone. We reply within 24 hours to assist you.for all plant lovers in my world</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Service
