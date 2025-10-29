import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Programs() {
  return (
    <div>
      <Head>
        <title>Internships - Building Bharat</title>
        <meta name="description" content="Explore internship opportunities at Building Bharat" />
      </Head>
      <Header />
      <main className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Internships
          </h1>
          <p className="text-xl text-gray-600">
            Coming Soon
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
