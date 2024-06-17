import Link from 'next/link'
import Image from 'next/image'
import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo01 from '@/components/modal-video-01'
import HeroImage from '@/public/images/hero-2.jpg'

export default function HeroHome() {

  return (
    <section className="relative px-10 min-h-screen">

      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]" aria-hidden="true">
        <div className="w-full h-full" data-aos="fade">
          <Image className="opacity-20 w-full h-full object-cover" src={HeroImage} width={1440} height={497} priority alt="Hero" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">

          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 mt-40 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">

            {/* Content */}
            <div className="text-center md:text-left md:min-w-[30rem]" data-aos="fade-right">
              <h1 className="h1 font-bricolage text-slate-100 mb-4">Printing Simplified </h1>
              <p className="text-xl text-slate-400 mb-8">Experience unparalleled quality with our state-of-the-art flexographic plates, designed to bring your prints to life with sharpness and clarity. At Shree Akshar, we're dedicated to making printing simplified.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div>
                  <Link href="/about/#contactform" className="btn text-white bg-blue-600 hover:bg-blue-700 w-full group">
                    Contact Us<span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </Link>
                </div>
                {/* <div>
                  <Link href="/services" className="btn text-white bg-slate-700 hover:bg-slate-800 w-full">Explore Services</Link>
                </div> */}
              </div>
            </div>

            {/* Hero image */}
            {/* <ModalVideo01
              thumb={VideoThumb}
              thumbWidth={540}
              thumbHeight={405}
              thumbAlt="Modal video thumbnail"
              video="/videos/video.mp4"
              videoWidth={1920}
              videoHeight={1080} />             */}

          </div>

        </div>
      </div>
    </section>
  )
}