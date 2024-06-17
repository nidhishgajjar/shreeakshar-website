import Image1 from 'public/images/hero-2.jpg'
import Image from 'next/image'

const links = [
    { name: 'Upload your resume', href: 'https://tally.so/embed/nPAqBx?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1' }
  ]
  const stats = [
    { name: 'Offices worldwide', value: '2' },
    { name: 'Full-time colleagues', value: '10+' },
  ]
  
  export default function HeroCarrers() {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        {/* <Image
          src={Image1}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        /> */}

        <div className="mx-auto max-w-7xl px-6 lg:px-8 z-50">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white shadow-lg">Work with us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 shadow">
              We're always looking for talented individuals to join our team. If you're passionate about what you do and want to make a difference, we'd love to hear from you.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  