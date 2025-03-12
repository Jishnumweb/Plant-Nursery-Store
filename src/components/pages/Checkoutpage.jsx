import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removecart } from '../../redux/Features/Cartslice'
import { useNavigate } from 'react-router-dom'

function Checkoutpage() {

  const cart = useSelector(state => state.cart.value)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const totalPrice = cart.reduce((total, item) => total + item.price, 0)

  return (
    <div>
      {
        cart.length ?
        <div classNameName="checkoutpage">
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">

            <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
              <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                <div className="space-y-6">

                  {
                    
                    cart.map((carts) => (
                      <div className="rounded-lg border   p-4 shadow-sm dark:border-gray-700 bg-[#e7e4e4a5] text-green-900 md:p-6">
                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                          <a href="#" className="shrink-0 md:order-1">
                            <img className="hidden h-20 w-20 dark:block" src={carts.images} alt="imac image" />
                          </a>

                          <div className="flex items-center justify-between md:order-3 md:justify-end">

                            <div className="text-end md:order-4 md:w-32">
                              <p className="text-base font-bold text-gray-900 ">{carts.price}/-</p>
                            </div>
                          </div>

                          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                            <a href="#" className="text-base font-medium text-gray-900 hover:underline text-green-900 no-underline">{carts.name}</a>

                            <div className="flex items-center gap-4">


                              <button type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500 " onClick={() => dispatch(removecart(carts.id))}>
                                <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                </svg>
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    ))
                  }







                </div>

              </div>

              <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                <div className="space-y-4 rounded-lg border  p-4 shadow-sm dark:border-gray-700 dark:bg-green-800 sm:p-6">
                  <p className="text-xl font-semibold text-white ">Order summary</p>

                  <div className="space-y-4">
                    <div className="space-y-2">


                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                        <dd className="text-base font-medium text-green-600">-20/-</dd>
                      </dl>



                    </div>

                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt className="text-base font-bold text-white ">Total</dt>
                      <dd className="text-base font-bold text-white">{totalPrice}/-</dd>
                    </dl>
                  </div>

                  <a href="#" onClick={()=>navigate("/order")} className="flex w-full items-center justify-center rounded-lg bg-green-900 no-underline px-5 py-2.5 text-sm font-medium text-white ">Proceed to Checkout</a>

                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                    <a href="#" title="" className="inline-flex items-center gap-2 text-sm font-medium no-underline text-orange-50  hover:no-underline " onClick={() => navigate("/")}>
                      Continue Shopping
                      <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                      </svg>
                    </a>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>

      </div>
            : <div className='h-screen flex flex-col justify-center items-center text-[#eeeeee] container '>
            <h2 className='lg:text-base text-[15px] text-center'>"Your cart is empty. Start adding your favorite items!"</h2>
            <div className="flex items-center justify-center gap-2">
                    <a href="#" title="" className="inline-flex items-center gap-2  font-medium no-underline text-[13px]  hover:no-underline " onClick={() => navigate("/")}>
                      Continue Shopping
                      <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                      </svg>
                    </a>
                  </div>
          </div>
      }



    </div>
  )
}

export default Checkoutpage
