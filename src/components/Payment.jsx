

import { useNavigate } from "react-router-dom";

export default function Payment() {



  const navigate = useNavigate()

  return (

    <div role="alert" className="rounded-xl border flex flex-col justify-center items-center h-screen container">
      <div className="flex justify-center items-center gap-4">
        <span className="text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>

        <div className="">
          <strong className="block font-medium text-gray-900">Order Completed!</strong>

          <p className="mt-1 text-sm text-gray-700">Thank you for your order. We have received your request and will process it shortly. You will receive updates via email/SMS.</p>
        </div>



      </div>
      <div className="flex items-center justify-center gap-2 mt-3">
          <a href="#" title="" className="inline-flex items-center gap-2 text-sm font-medium no-underline  hover:no-underline " onClick={() => navigate("/")}>
            Continue Shopping
            <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
            </svg>
          </a>
        </div>
    </div>
  );
}
