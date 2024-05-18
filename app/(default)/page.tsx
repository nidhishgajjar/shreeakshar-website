export const metadata = {
  title: 'Shree Akshar',
  description: 'Printing simplified - Affordable plates delivered in 24 hours',
}

import Hero from '@/components/hero-home'
import FeaturesBlocks from '@/components/features-blocks'
import Features from '@/components/features-home'
import Features02 from '@/components/features-home-02'
import Features03 from '@/components/features-home-03'
import Target from '@/components/target'
import PricingSection from '@/components/pricing'
import Cta from '@/components/cta'
import ContactForm from '@/components/contactform'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
      <Features />
      <Features02 />
      <Features03 />
      <Target />
      {/* <PricingSection /> */}
      <ContactForm />
      <Cta />
    </>
  )
}
