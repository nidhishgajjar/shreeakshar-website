import Image from 'next/image'
import FeaturesImage03 from '@/public/images/infrastructure.jpg'
import Clients from './clients'


export default function Target() {
  return (
    <section className='md:px-0 px-10 pb-14'>
      <div className="max-w-6xl mx-auto px-4">
        <div className="py-12 md:py-20 border-t border-slate-200">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-bricolage text-slate-800 mb-3">Our Infrastructure</h2>
            <p className="text-xl text-slate-500">Discover the advanced technology and equipment that powers our production capabilities, ensuring high-quality and efficient output.</p>
          </div>

          <Clients />

          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none mt-20 flex flex-col md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">

            {/* Content */}
            <div className="md:w-7/12 lg:w-1/2 order-1 md:order-none" data-aos="fade-right">
              <ul className="space-y-6">
                <li>
                  <div className="flex items-center mb-4">
   
                    <div className="h3 font-bricolage text-slate-800">CTP</div>
                  </div>
                  <div className="text-slate-500 text-md">Featuring Kodak Flexcel NX Wide, Kodak Flexcel NX Mid, and Kodak Thermoflex 50x80 for precise plate making.</div>
                </li>
                <li>
                  <div className="flex items-center mb-4">

                    <div className="h3 font-bricolage text-slate-800">Exposures</div>
                  </div>
                  <div className="text-slate-500 text-md">Utilizing the Vianord Evo for advanced exposure capabilities, ensuring high-quality results.</div>
                </li>
                <li>
                  <div className="flex items-center mb-4">

                    <div className="h3 font-bricolage text-slate-800">Processing Unit</div>
                  </div>
                  <div className="text-slate-500 text-md">Equipped with G & J fully automated production lines, including washers and dryers for optimal processing.</div>
                </li>
                <li>
                  <div className="flex items-center mb-4">
            
                    <div className="h3 font-bricolage text-slate-800">Epson Digital Printer</div>
                  </div>
                  <div className="text-slate-500 text-md">Features an Epson Digital Printer with EFI Rip Solutions for unmatched printing quality and efficiency.</div>
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="md:w-5/12 lg:w-1/2 pl-20" data-aos="fade-left">
              <Image className="mx-auto md:max-w-none" src={FeaturesImage03} width={540} height={540} alt="Target" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}