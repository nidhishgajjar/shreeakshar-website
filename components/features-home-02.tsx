'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import Image from 'next/image'
import FeaturesImage from '@/public/images/features-home-02.png';

export default function FeaturesHome02() {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 


  useEffect(() => {
    const interval = setInterval(() => {
      setTab(prevTab => (prevTab === 3 ? 1 : prevTab + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='px-10 md:mt-5 mt-24'>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-200">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-bricolage text-slate-800">Why us?</h2>
          </div>

          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-start md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">

            {/* Tabs items (images) */}
            <div className="md:rtl md:w-5/12 lg:w-1/2 order-1 md:order-none">
              <div className="transition-all">
                <div className="relative flex flex-col" data-aos="fade-down" ref={tabs}>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 -translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={FeaturesImage} width={540} height={620} alt="Features home 2 01" />
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 -translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={FeaturesImage} width={540} height={620} alt="Features home 2 02" />
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 -translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={FeaturesImage} width={540} height={620} alt="Features home 2 03" />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:w-7/12 lg:w-1/2" data-aos="fade-up">
              {/* <div className="mb-8 text-center md:text-left"> */}
                {/* <h3 className="h3 text-slate-800 font-bricolage mb-3">Why us?</h3> */}
                {/* <p className="text-xl text-slate-500">Shree Akshar gives you the guarantee on the free check of the file sent and the plate made.</p> */}
              {/* </div> */}
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0 md:mt-16 space-y-12">
                <button
                  className={`flex items-start text-left bg-white border-2 px-5 py-3 rounded shadow-md transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'border-transparent opacity-50 hover:opacity-75' : 'border-2 border-blue-500 opacity-100'}`}
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <svg className="w-8 h-8 fill-current text-blue-600 shrink-0 mt-1 mr-4"  xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 256 256"><path d="M208,144H136V95.19a40,40,0,1,0-16,0V144H48a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V160A16,16,0,0,0,208,144ZM104,56a24,24,0,1,1,24,24A24,24,0,0,1,104,56ZM208,208H48V160H208v48Zm-40-96h32a8,8,0,0,1,0,16H168a8,8,0,0,1,0-16Z"></path></svg>
                  <div>
                    <div className="text-slate-800 font-medium mb-1">Full control of the Plate</div>
                    <div className="text-slate-500">Shree Akshar gives you the guarantee on the free check of the file sent and the plate made. </div>
                  </div>
                </button>
                <button
                  className={`flex items-start text-left bg-white border-2 px-5 py-3 rounded shadow-md transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'border-transparent opacity-50 hover:opacity-75' : 'border-2 border-blue-500 opacity-100'}`}
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <svg className="w-8 h-8 fill-current text-blue-600 shrink-0 mt-1 mr-4" xmlns="http://www.w3.org/2000/svg"  fill="#000000" viewBox="0 0 256 256"><path d="M254.3,107.91,228.78,56.85a16,16,0,0,0-21.47-7.15L182.44,62.13,130.05,48.27a8.14,8.14,0,0,0-4.1,0L73.56,62.13,48.69,49.7a16,16,0,0,0-21.47,7.15L1.7,107.9a16,16,0,0,0,7.15,21.47l27,13.51,55.49,39.63a8.06,8.06,0,0,0,2.71,1.25l64,16a8,8,0,0,0,7.6-2.1l55.07-55.08,26.42-13.21a16,16,0,0,0,7.15-21.46Zm-54.89,33.37L165,113.72a8,8,0,0,0-10.68.61C136.51,132.27,116.66,130,104,122L147.24,80h31.81l27.21,54.41ZM41.53,64,62,74.22,36.43,125.27,16,115.06Zm116,119.13L99.42,168.61l-49.2-35.14,28-56L128,64.28l9.8,2.59-45,43.68-.08.09a16,16,0,0,0,2.72,24.81c20.56,13.13,45.37,11,64.91-5L188,152.66Zm62-57.87-25.52-51L214.47,64,240,115.06Zm-87.75,92.67a8,8,0,0,1-7.75,6.06,8.13,8.13,0,0,1-1.95-.24L80.41,213.33a7.89,7.89,0,0,1-2.71-1.25L51.35,193.26a8,8,0,0,1,9.3-13l25.11,17.94L126,208.24A8,8,0,0,1,131.82,217.94Z"></path></svg>
                  <div>
                    <div className="text-slate-800 font-medium mb-1">Non-disclosure agreement</div>
                    <div className="text-slate-500">Shree Akshar gives you the fullest guarantee for the processing of your personal data and those of your company. </div>
                  </div>
                </button>
                <button
                  className={`flex items-start text-left bg-white border-2 px-5 py-3 rounded shadow-md transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'border-transparent opacity-50 hover:opacity-75' : 'border-2 border-blue-500 opacity-100'}`}
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                 <svg  className="w-8 h-8 fill-current text-blue-600 shrink-0 mt-1 mr-4"  xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                  <div>
                    <div className="text-slate-800 font-medium mb-1">Final product made & delivered</div>
                    <div className="text-slate-500">Shree Akshar manufactures the purchased items in 24 or 72 hours and entrusts them to the best national and international couriers.</div>
                  </div>
                </button>
              </div>

              <div className="text-center flex justify-center items-center md:text-left">
                <button
                  className="mt-12  py-1 px-3 bg-inherit text-blue-500 shadow-sm hover:text-blue-700 transition duration-300"
                  onClick={() => setIsOpen(true)}
                >
                  View More
                </button>
              </div>

              
            </div>

          </div>


            {/* Dialog */}
            <Transition show={isOpen} as="div" className="relative z-10">
            <Dialog as="div" className="fixed inset-0 overflow-y-auto" onClose={() => setIsOpen(false)}>
              <div className="flex items-center justify-center min-h-screen px-8">
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                <div className="bg-white px-2 py-4 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                  <div className="px-4 py-5 sm:p-6">
                    <Dialog.Title as="h3" className="md:text-xl text-lg leading-6 font-medium text-gray-900">
                      Looking for more reasons?
                    </Dialog.Title>
                    <div className="mt-5">
                      <p className="text-base font-light tracking-wide text-neutral-500">
                     <p className='mb-5 text-neutral-900'>Still unsure why to choose us here are few thing that will help you make an informed decision.</p>

<li>Crisp 1:1 image and dot reproduction on plate and on print.</li>
<li>Improved smoothness of ink lay down and density on prints.</li>

<li>Expanded color gamut.</li>
<li>Increased ink transfer efficiency and fewer usage of inks.</li>

<li>Gravure class print results.</li>
<li>Better print contrast, improved tonal range, smooth solids, brighter colors and crisp text.</li>

<li>Cleaner printing with reduced operational efforts.</li>
<li>Jaw dropping prints that make them stand on the shelf.</li>

<li>Quality and economic benefits for printer and print buyer.</li>
                      </p>
                    </div>
                    <div className="mt-5 sm:mt-6 flex justify-end items-center">
                      <button
                        type="button"
                        className="inline-flex justify-center w-24 rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition>

        </div>
      </div>
    </section>
  )
}