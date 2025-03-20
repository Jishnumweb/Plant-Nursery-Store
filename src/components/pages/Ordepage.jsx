import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { emptyCart } from '../../redux/Features/Cartslice';
import Payment from '../Payment';
// import Payment from '../Payment';

function OrderPage() {

    const cart = useSelector(state => state.cart.value)
    let totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        country: "",
        zip: "",
        card: ""

    })
    const [show, setShow] = useState(false)
    const [cash,setCash]= useState(false)

    // const [isOpen,setIsopen]= useState(false)

    const handleChange = (event) => {
        setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
        console.log(form);

    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!form.name || !form.email || !form.address || !form.city || !form.zip || !form.country || !form.card) {
            setError("All fields are required")
            return;
        }
        setShow(!show)
        dispatch(emptyCart())

    }
    const handlePay = ()=>{
        setCash(!cash)
    }

    return (
        <div>
            {
                show ? <Payment /> : <div className="leading-loose h-screen flex justify-center items-center">
                    <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl mt-5">
                        <p className="text-gray-800 font-medium">Customer information</p>

                        <div>
                            <label className="block text-sm text-gray-700" htmlFor="cus_name">Name</label>
                            <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                id="cus_name" name="name" type="text" required placeholder="Your Name" aria-label="Name" onChange={handleChange} />
                        </div>

                        <div className="mt-2">
                            <label className="block text-sm text-gray-600" htmlFor="cus_email">Email</label>
                            <input className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
                                id="cus_email" name="email" type="email" required placeholder="Your Email" aria-label="Email" onChange={handleChange} />
                        </div>

                        <div className="mt-2">
                            <label className="block text-sm text-gray-600" htmlFor="cus_address">Address</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                id="cus_address" name="address" type="text" required placeholder="Street" aria-label="Address" onChange={handleChange} />
                        </div>

                        <div className="mt-2">
                            <label className="hidden text-sm block text-gray-600" htmlFor="cus_city">City</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                id="cus_city" name="city" type="text" required placeholder="City" aria-label="City" onChange={handleChange} />
                        </div>

                        <div className="inline-block mt-2 w-1/2 pr-1">
                            <label className="hidden block text-sm text-gray-600" htmlFor="cus_country">Country</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                id="cus_country" name="country" type="text" required placeholder="Country" aria-label="Country" onChange={handleChange} />
                        </div>

                        <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                            <label className="hidden block text-sm text-gray-600" htmlFor="cus_zip">Zip</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                id="cus_zip" name="zip" type="text" required placeholder="Zip" aria-label="Zip" onChange={handleChange} />
                        </div>

                        <p className="mt-4 text-gray-800 font-medium">Payment information</p>

                        <div>
                            <label className="block text-sm text-gray-600" htmlFor="cus_card">Card</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                                id="cus_card" name="card" type="text" required placeholder="Card Number MM/YY CVC" aria-label="Card" onChange={handleChange} />
                        </div>
                        <div>
                            <div className="flex gap-4 mt-3">
                                <input type="checkbox" name="" id="" onClick={handlePay} className='bg-green-600'/>
                                <label htmlFor="" className='text-green-700'>Cash on delivery</label>

                            </div>
                        </div>

                        <div className="mt-4">
                            {cash ?                             <button className="px-4 py-1 text-white  tracking-wider bg-green-800 rounded" type="submit" onClick={handleSubmit}>
                                Cash on delivery {totalPrice+10}/-
                            </button> :                             <button className="px-4 py-1 text-white tracking-wider bg-green-800 rounded" type="submit" onClick={handleSubmit}>
                                Pay Online {totalPrice}/-
                            </button>}

                            <p className='text-red-600'>{error}</p>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <a href="#" title="" className="inline-flex items-center gap-2  font-medium no-underline text-[13px]  hover:no-underline " onClick={() => navigate("/")}>
                                Continue Shopping
                                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                </svg>
                            </a>
                        </div>

                    </form>
                </div>
            }

        </div>
    );
}

export default OrderPage;
