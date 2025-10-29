import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import PartnerLogos from '../components/PartnerLogos'
import TestimonialSection from '../components/TestimonialSection'
import WhoIsThisFor from '../components/WhoIsThisFor'
import Features from '../components/Features'
import Stats from '../components/Stats'
import NetworkInfluencers from '../components/NetworkInfluencers'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Building Bharat - Transform Bharat Through Policy & Leadership</title>
        <meta name="description" content="Join Building Bharat to crack political and policy roles with confidence. Learn, lead, and transform Bharat through expert mentorship and world-class curriculum." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/og-image.png" />
      </Head>
      <Header />
      <main>
        <Hero />
        <PartnerLogos />
        <TestimonialSection />
        <WhoIsThisFor />
        <Features />
        <Stats />
        <NetworkInfluencers />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
