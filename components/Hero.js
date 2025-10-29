import { motion } from 'framer-motion'
import { Lightbulb, FileText, GraduationCap, Mic, BarChart, Brain } from "lucide-react"

export default function Hero() {
  // Define the orbit items with their positions
  const orbitItems = [
    {
      Icon: Mic,
      text: 'MLA/MP internships',
      transform: 'rotate(0deg) translateY(-190px)', // Bottom
    },
    {
      Icon: GraduationCap,
      text: 'Fellowships',
      transform: 'rotate(60deg) translateY(-190px)', // Bottom-left
    },
    {
      Icon: FileText,
      text: 'Public Policy',
      transform: 'rotate(120deg) translateY(-190px)', // Top-left
    },
    {
      Icon: Brain,
      text: 'Political consulting',
      transform: 'rotate(180deg) translateY(-190px)', // Top
    },
    {
      Icon: Lightbulb,
      text: 'Think Tanks',
      transform: 'rotate(240deg) translateY(-190px)', // Top-right
    },
    {
      Icon: BarChart,
      text: 'Research',
      transform: 'rotate(300deg) translateY(-190px)', // Bottom-right
    },
  ]

  return (
    <section className="bg-gray-50 py-12 md:py-16 px-4 md:px-6 lg:px-12 pt-24 md:pt-32 lg:pt-[140px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004D40] leading-tight">
              Crack Political and policies<br />
              roles with Confidence!
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500">
              Learn. Lead. Transform Bharat
            </h2>
            
            <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl">
              We offer a world class curriculum and expert mentorship to help you break into politics and policy roles. No background needed just your passion to lead and transform Bharat.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-[10px]">
              <button className="bg-orange-500 text-white w-full sm:w-[243px] h-[50px] rounded-[15px] border-2 border-orange-500 px-4 md:px-[12px] py-3 font-semibold hover:bg-orange-600 transition transform hover:scale-105 flex items-center justify-center text-sm md:text-base">
                Start Learning For Free
              </button>
              <button className="border-2 border-orange-500 text-orange-500 w-full sm:w-[171px] h-[50px] rounded-[11px] px-4 md:px-[10px] py-3 font-semibold hover:bg-orange-500 hover:text-white transition flex items-center justify-center text-sm md:text-base">
                Join premium
              </button>
            </div>
          </motion.div>

          {/* Right side - Circular rotating icons */}
          <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
            {/* Animation container */}
            <div className="relative flex h-full w-full items-center justify-center">
              
              {/* Center text */}
              <div className="absolute z-10 flex flex-col items-center">
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-center">
                  <span className="text-[#004D40]">Building</span><br/>
                  <span className="text-orange-500">BHARAT</span>
                </h2>
              </div>

              {/* Orbit Container - This rotates */}
              <div className="absolute h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] md:h-[380px] md:w-[380px] rounded-full animate-spin-slow">
                
                {/* Map over orbit items */}
                {orbitItems.map((item, index) => (
                  <div
                    key={index}
                    className="absolute left-1/2 top-1/2 flex h-20 w-20 md:h-24 md:w-24 -translate-x-1/2 -translate-y-1/2"
                    style={{ transform: item.transform }}
                  >
                    {/* Item Content - Counter-rotates to keep icons upright */}
                    <div className="flex h-full w-full flex-col items-center justify-center animate-counter-spin-slow">
                      <item.Icon className="text-orange-500 w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                      <p className="mt-1 text-center text-[10px] md:text-xs font-medium text-[#004D40] whitespace-nowrap">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
