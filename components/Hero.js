import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-[#004D40] leading-tight">
              Crack Political and policies<br />
              roles with Confidence!
            </h1>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-orange-500">
              Learn. Lead. Transform Bharat
            </h2>
            
            <p className="text-gray-700 text-base leading-relaxed max-w-xl">
              We offer a world class curriculum and expert mentorship to help you break into politics and policy roles. No background needed just your passion to lead and transform Bharat.
            </p>
            
            <div className="flex gap-4">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition transform hover:scale-105">
                Start Learning For Free
              </button>
              <button className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition">
                Join premium
              </button>
            </div>
          </motion.div>

          {/* Right side - Animated icons */}
          <div className="relative h-96 hidden lg:flex items-center justify-center">
            {/* Central text */}
            <div className="text-center z-10">
              <h2 className="text-5xl font-extrabold">
                <span className="text-[#004D40]">Building</span><br/>
                <span className="text-orange-500">BHARAT</span>
              </h2>
            </div>

            {/* Animated floating icons */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-20 text-orange-500"
            >
              <div className="flex flex-col items-center">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="text-xs font-semibold mt-1">Public Policy</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-12 left-0 text-orange-500"
            >
              <div className="flex flex-col items-center">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-xs font-semibold mt-1">Political consulting</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-16 right-0 text-orange-500"
            >
              <div className="flex flex-col items-center">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                </svg>
                <span className="text-xs font-semibold mt-1">Fellowships</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute bottom-0 left-12 text-orange-500"
            >
              <div className="flex flex-col items-center">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                </svg>
                <span className="text-xs font-semibold mt-1">Research</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute top-32 right-32 text-orange-500"
            >
              <div className="flex flex-col items-center">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14q-1.25 0-2.125-.875T9 11V5q0-1.25.875-2.125T12 2q1.25 0 2.125.875T15 5v6q0 1.25-.875 2.125T12 14Zm-1 7v-3.075q-2.6-.35-4.3-2.325Q5 13.625 5 11h2q0 2.075 1.463 3.537Q9.925 16 12 16t3.538-1.463Q17 13.075 17 11h2q0 2.625-1.7 4.6-1.7 1.975-4.3 2.325V21Z"/>
                </svg>
                <span className="text-xs font-semibold mt-1">Think Tanks</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute bottom-8 right-24 text-orange-500"
            >
              <div className="flex flex-col items-center">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="text-xs font-semibold mt-1">MLA/MP Internships</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
