import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      title: "Student to Social Impact Leader",
      quote: "Building Bharat transformed the way I learn and think. With hands on projects, expert mentorship, and constant support, I discovered my leadership potential. I never imagined I'd lead initiatives in my own town while learning from top mentors across India. The journey wasn't easy, but the Building Bharat team made it achievable every step, every doubt, every win was celebrated. If you're serious about growing and giving back to India, this is where you start.",
      name: "Priya Sharma",
      role: "Student Leader, Nagpur",
      image: "/images/priya-sharma.png",
      initials: "PS"
    },
    {
      id: 2,
      title: "Small Village to National Level Fellowship",
      quote: "Before Building Bharat, I had big dreams but no direction. The courses opened up opportunities I never thought possible – from rural innovation challenges to real-world community projects. The mentors treated us like family and pushed us to aim higher. Today, I'm mentoring students from my own village and applying for fellowships that once felt out of reach. This platform is a launchpad for every Indian youth who wants to create change",
      name: "Ravi Kumar",
      role: "Youth Fellow, Bihar",
      image: "/images/ravi-kumar.png",
      initials: "RK"
    },
    {
      id: 3,
      title: "From Doubt to Impactful Career Path",
      quote: "I used to believe students from tier 3 colleges couldn't compete. But Building Bharat changed my mindset. Through their programs, I built a strong portfolio, worked on local issues, and even led a state-level hackathon! This journey isn't just about jobs it's about purpose. I'm more confident, skilled, and connected to a mission bigger than myself.",
      name: "Sneha Joshi",
      role: "UX Intern & Community Volunteer, Pune",
      image: "/images/sneha-joshi.png",
      initials: "SJ"
    }
  ]

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const handleLineClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-emerald-900 mb-10 text-center">Stories That Inspire</h2>
        
        <div className="relative overflow-hidden w-full mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-lg rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 h-[500px]"
            >
              <div className="flex-1 text-left max-w-[683px]">
                <h3 className="font-semibold text-xl text-gray-900 mb-4">
                  {testimonials[currentIndex].title}
                </h3>
                <p className="font-poppins font-medium text-[18px] leading-[210%] tracking-[0%] text-[#2D2D2D]">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-lg text-orange-500">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-[345.9px] h-[393px] rounded-[35px] overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-xl">
                  {testimonials[currentIndex].image ? (
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      width={345.9}
                      height={393}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="text-white text-7xl font-bold">
                      {testimonials[currentIndex].initials}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Horizontal line indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleLineClick(index)}
              className="group focus:outline-none"
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <div className={`h-1 transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'w-12 bg-orange-500' 
                  : 'w-8 bg-gray-300 group-hover:bg-orange-300'
              }`}></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
