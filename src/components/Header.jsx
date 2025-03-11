'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import OffCanvasExample from './Offcanvas'
import { useNavigate } from 'react-router-dom'

// const products = [
//   { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
//   { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
//   { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
//   { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
//   { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
// ]
// const callsToAction = [
//   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//   { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <header >
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between  lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#home" className="-m-1.5 ">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="images/planta.png"
              className="h-[30px] w-auto"
              onClick={()=>navigate("/")}
            />
          </a>
        </div>
        <div className="div mx-2">
        <OffCanvasExample/>

        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className=" inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">



          </Popover>

          <a href="#contact" className="text-sm/6 font-semibold text-gray-900 no-underline">
            Plants
          </a>
          <a href="#review" className="text-sm/6 font-semibold text-gray-900 no-underline">
            Reviews
          </a>
          <a href="#contactss" className="text-sm/6 font-semibold text-gray-900 no-underline">
            Contact us
          </a>
          
        </PopoverGroup>
        
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10  overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="images/planta.png"
                className="planta-logo h-14 w-24 object-contain"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root ">
            <div className="-my-6 divide-y divide-gray-500/10 flex flex-col gap-5 mt-5">

            <a href="#contact" className="text-sm/6 font-semibold text-gray-900 no-underline">
            Plants
          </a>
          <a href="#review" className="text-sm/6 font-semibold text-gray-900 no-underline">
            Reviews
          </a>
          <a href="#contactss" className="text-sm/6 font-semibold text-gray-900 no-underline">
            Contact us
          </a>
              
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
