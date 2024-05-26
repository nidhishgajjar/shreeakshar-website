// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function OurProcess() {
  return (
    <section id='ourprocess'>
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Our Process</p>
              {/* <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</h1> */}
              <p className="mt-6 text-xl leading-8 text-gray-700">
              At Shree Akshar, we make the process of getting your flexo plates simple and hassle-free. From receiving your artwork to delivering the final plates, we take care of everything. Here’s how you can get started and receive your flexo plates in just a few easy steps:
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="my-14 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  {/* <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M144,48V208a8,8,0,0,1-16,0V62.13L100.12,78.86a8,8,0,1,1-8.24-13.72l40-24A8,8,0,0,1,144,48Z"></path></svg> */}
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#4d22b3" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM140,80v96a8,8,0,0,1-16,0V95l-11.56,7.71a8,8,0,1,1-8.88-13.32l24-16A8,8,0,0,1,140,80Z"></path></svg>
                  <span>
                    <strong className="font-semibold text-gray-900">Send Us Your Artwork</strong> 
                    <ul>
                      <li><strong>Prepare Your Design:</strong> Make sure your artwork is ready in PDF format.</li>
                      <li><strong>Specify the Size:</strong> Clearly mention the size of the plate you need.</li>
                      <li><strong>Email Us:</strong> Send the PDF file and size details to our email.</li>
                    </ul>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                  <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#4d22b3" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M153.56,123.26,120,168h32a8,8,0,0,1,0,16H104a8,8,0,0,1-6.4-12.8l43.17-57.56a16,16,0,1,0-27.86-15,8,8,0,0,1-15.09-5.34,32,32,0,1,1,55.74,29.93ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                  <span>
                    <strong className="font-semibold text-gray-900"> Artwork Review and Approval</strong> 
                    <ul>
                      <li><strong>Review:</strong> Our expert team will review your artwork for quality and compatibility.</li>
                      <li><strong>Approval:</strong> We will send you a proof for your approval. Once you approve, we proceed to the next step.</li>
                    </ul>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                  <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#4d22b3" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M160,152a36,36,0,0,1-61.71,25.19A8,8,0,1,1,109.71,166,20,20,0,1,0,124,132a8,8,0,0,1-6.55-12.59L136.63,92H104a8,8,0,0,1,0-16h48a8,8,0,0,1,6.55,12.59l-21,30A36.07,36.07,0,0,1,160,152Zm72-24A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                  <span>
                    <strong className="font-semibold text-gray-900">Pre-Press Preparation</strong> 
                    <ul>
                      <li><strong>Optimization:</strong> We optimize your artwork for the flexographic printing process.</li>
                      <li><strong>Plate Layout:</strong> Our pre-press team prepares the layout, ensuring perfect alignment and precision.</li>
                    </ul>
                  </span>
                </li>
                
                <li className="flex gap-x-3">
                  {/* <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                  <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#4d22b3" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm32-72h-8V80a8,8,0,0,0-14.31-4.91l-56,72A8,8,0,0,0,88,160h48v16a8,8,0,0,0,16,0V160h8a8,8,0,0,0,0-16Zm-24,0H104.36L136,103.32Z"></path></svg>
                  <span>
                    <strong className="font-semibold text-gray-900">Flexo Plate Production</strong> 
                    <ul>
                      <li><strong>Engraving:</strong> Using state-of-the-art technology, we engrave your design onto the flexo plate.</li>
                      <li><strong>Quality Check:</strong> Each plate undergoes a stringent quality check to ensure it meets our high standards.</li>
                    </ul>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                  <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#4d22b3" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM118.78,88l-4.19,25.14A38.8,38.8,0,0,1,124,112a36,36,0,0,1,0,72,35.54,35.54,0,0,1-25.71-10.4,8,8,0,1,1,11.42-11.2A19.73,19.73,0,0,0,124,168a20,20,0,0,0,0-40,19.73,19.73,0,0,0-14.29,5.6,8,8,0,0,1-13.6-6.92l8-48A8,8,0,0,1,112,72h40a8,8,0,0,1,0,16Z"></path></svg>
                  <span>
                    <strong className="font-semibold text-gray-900">Delivery to Your Doorstep</strong> 
                    <ul>
                      <li><strong>Packaging:</strong> We securely package your flexo plates to prevent any damage during transit.</li>
                      <li><strong>Direct Delivery:</strong> Your plates are delivered straight to your specified location.</li>
                    </ul>
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
