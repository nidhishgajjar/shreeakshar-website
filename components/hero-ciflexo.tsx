import Link from 'next/link';
import ImageBG from '@/public/images/ci-flexo.jpeg';

const links = [
    { name: 'Examples', href: '/ciflexo#examples' },
    { name: 'Our Process', href: '/ciflexo#process' },
]
  


  export default function HeroCIFlexo() {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 px-10 py-24 md:py-32 min-h-screen flex justify-center items-center">
         <div className="relative">
            <img
              src={ImageBG.src}
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
              style={{ position: 'fixed' }} // Make background fixed
            />
            <div
              className="absolute inset-0 bg-black opacity-80" // This will create a black overlay with 50% opacity
              style={{ position: 'fixed' }} // Ensure the overlay is also fixed
            />
        </div>

       <div className='flex flex-col justify-center z-50 items-center mt-28 space-y-48'>
       <div className="mx-auto max-w-7xl px-6 lg:px-8" style={{ maxHeight: '100vh', overflowY: 'auto' }}>
          <div className="mx-auto max-w-2xl lg:mx-0 mt-10">
            <h2 className="text-4xl font-bold tracking-tight text-neutral-300 sm:text-6xl">CI Flexo - Flexible Packaging</h2>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Milk pouches / oil pouches / diapers (inner and outside) / laminate pouch zipper (food industry, spices, dry fruits, agarbatti, seeds) (from artwork to pre-press to final plate delivery, we have got it all for you). 
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-neutral-300 sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <Link key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <section
      id="examples"
      className="relative px-4 lg:px-32 py-24 h-screen md:overflow-hidden hidden md:flex justify-center items-start"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-xl font-extrabold text-white lg:text-3xl py-24">
            Examples of Flexible Packaging
          </h2>
        </div>
        <div className="mt-10">
          <dl className="space-y-32 md:space-y-0  md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative text-left">
              <dt className="text-lg leading-6 font-medium text-neutral-100">
                Laminate Pouches
              </dt>
            </div>
            <div className="relative text-right">
              <dt className="text-lg leading-6 font-medium text-neutral-100">
                Diaper Packaging
              </dt>
              <dd className="mt-2 text-base text-gray-600"></dd>
            </div>
            <div className="relative text-left">
              <dt className="text-lg leading-6 font-medium text-neutral-100">
                Agarbatti Packaging
              </dt>
              <dd className="mt-2 text-base text-gray-600"></dd>
            </div>
            <div className="relative text-right">
              <dt className="text-lg leading-6 font-medium text-neutral-100">
                Seed and Spice Packaging
              </dt>
              <dd className="mt-2 text-base text-gray-600"></dd>
            </div>
            <div className="relative text-left">
              <dt className="text-lg leading-6 font-medium text-neutral-100">
                Cosmetic and Personal Care Packaging
              </dt>
              <dd className="mt-2 text-base text-gray-600"></dd>
            </div>
            <div className="relative text-right">
              <dt className="text-lg leading-6 font-medium text-neutral-100">
                Pharmaceutical Packaging
              </dt>
              <dd className="mt-2 text-base text-gray-100"></dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
       </div>
      </div>
    )
  }