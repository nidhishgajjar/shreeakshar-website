import Link from 'next/link';
import ImageBG from '@/public/images/labelsandtags.jpeg';

const links = [
    { name: 'Our Process', href: '/labesandtags#process' },
]
  

  export default function HeroLabelsAndTags() {
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
       <div className='flex flex-col justify-center items-center z-50 mt-12'>
       <div className="mx-auto max-w-7xl px-6 lg:px-8" style={{ maxHeight: '100vh', overflowY: 'auto' }}>
        <div className="mx-auto max-w-3xl text-justify lg:mx-0 mt-10">
          <h2 className="text-4xl font-bold tracking-tight text-neutral-300 sm:text-6xl">Labels & Tags</h2>
          <ul className='mt-6 space-y-10 text-lg leading-8 text-neutral-300'>
            <li>
              <strong>Expertise in Beverages Industry:</strong> We understand the unique needs of the beverages industry and specialize in producing high-quality labels and tags for juice bottles, water bottles, shrink sleeves, BOPP labels, and more.
            </li>
            <li>
              <strong>High-Quality Output:</strong> Our advanced technology and meticulous process ensure that you get the best possible print quality.
            </li>
            <li>
              <strong>Hassle-Free Process:</strong> From artwork to delivery, we handle everything so you can focus on your business.
            </li>
          </ul>
        </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <Link key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
       </div>
      </div>
    )
  }