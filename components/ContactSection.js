import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    description: ''
  })

  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const texts = [
    "Together,\nWe Build \nBharat",
    "From Vision\nto Action.",
    "India's Future Starts \nWith You.",
    "Join. Learn. Lead."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
    }, 3000) // Change text every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section className="bg-gray-50 py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-300 w-full max-w-[1380px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[500px] md:min-h-[600px] lg:h-[758px]">
            {/* Left side - Animated Text and India Map */}
            <div className="flex flex-col justify-start items-start text-white p-6 md:p-8 lg:pt-20 lg:pl-24 order-2 lg:order-1">
              {/* Animated Text at Top */}
              <div className="mb-6 md:mb-8 w-full max-w-[458px]">
                <div className="text-left">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight whitespace-pre-line text-white">
                    {texts[currentTextIndex]}
                  </h2>
                </div>
              </div>
              
              {/* India Map Image Below */}
              <div className="relative flex items-center justify-start w-full max-w-[350px] md:max-w-[407px] h-auto aspect-square">
                <Image
                  src="/images/india.png"
                  alt="India Map"
                  width={407}
                  height={361}
                  className="object-contain w-full h-auto"
                  quality={100}
                  priority
                />
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="bg-white p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl m-3 md:m-4 lg:m-8 order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center">Contact us</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Write your name here"
                    className="w-full px-4 py-3 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700"
                    required
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="abc@gmail.com"
                      className="w-full px-4 py-3 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Phone no.
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91XX-XXX-XXXX"
                      className="w-full px-4 py-3 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Write your Subject"
                    className="w-full px-4 py-3 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700"
                    required
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Write your description here"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none text-gray-700"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-orange-500 text-white px-12 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors duration-300 shadow-lg text-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
