import Link from 'next/link'

export default function CtaPricing() {
  return (
    <section className="relative mt-28 md:mt-36 px-10 mb-16">

      {/* Gray background */}
      <div className="absolute inset-0 top-auto pointer-events-none -z-10 h-1/2" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mt-12 md:mt-16">

          <div className="relative flex flex-col lg:flex-row justify-between items-center bg-white shadow-lg p-6">
            <div className="absolute top-0 left-0 ml-6 -mt-4">
              <div className="inline-flex text-xs font-semibold md:py-1 px-3 text-emerald-700 bg-emerald-200 rounded-full">For Young Startups</div>
            </div>
            <div className="h4 font-playfair-display text-center lg:text-left md:text-xl text-base mb-4 lg:mb-0">Launched a business making less than $100K in revenue?</div>
            <div className="p-3 rounded bg-slate-50">
              <Link href="/services#contactform" className="md:px-5 md:py-2 px-3 py-1 text-white bg-blue-600 hover:bg-blue-700 group"> Contact Us <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}