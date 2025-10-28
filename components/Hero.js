import { motion } from 'framer-motion'
import { Lightbulb, FileText, GraduationCap, Mic, BarChart, Brain } from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 pt-[140px]">
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
            
            <div className="flex flex-wrap gap-[10px]">
              <button className="bg-orange-500 text-white w-full sm:w-[243px] h-[50px] rounded-[15px] border-2 border-orange-500 p-[12px] font-semibold hover:bg-orange-600 transition transform hover:scale-105 flex items-center justify-center">
                Start Learning For Free
              </button>
              <button className="border-2 border-orange-500 text-orange-500 w-full sm:w-[171px] h-[50px] rounded-[11px] p-[10px] font-semibold hover:bg-orange-500 hover:text-white transition flex items-center justify-center">
                Join premium
              </button>
            </div>
          </motion.div>

          {/* Right side - Animated icons in circular layout */}
          <div className="relative w-full h-[500px] hidden lg:flex items-center justify-center">
            {/* Center text */}
            <div className="absolute text-center z-10">
              <h2 className="font-bold text-5xl leading-tight">
                <span className="text-[#004D40]">Building</span><br/>
                <span className="text-orange-500">BHARAT</span>
              </h2>
            </div>

            {/* Top center - Political consulting */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-1/2 -translate-x-1/2"
            >
              <div className="flex flex-col items-center gap-2">
                <Brain className="text-orange-500 w-10 h-10" />
                <p className="text-sm font-medium text-[#004D40] whitespace-nowrap">Political consulting</p>
              </div>
            </motion.div>

            {/* Top right - Think Tanks */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-10 right-0"
            >
              <div className="flex flex-col items-center gap-2">
                <Lightbulb className="text-orange-500 w-10 h-10" />
                <p className="text-sm font-medium text-[#004D40] whitespace-nowrap">Think Tanks</p>
              </div>
            </motion.div>

            {/* Bottom right - Research */}
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 right-0"
            >
              <div className="flex flex-col items-center gap-2">
                <BarChart className="text-orange-500 w-10 h-10" />
                <p className="text-sm font-medium text-[#004D40] whitespace-nowrap">Research</p>
              </div>
            </motion.div>

            {/* Bottom center - MLA/MP internships */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
            >
              <div className="flex flex-col items-center gap-2">
                <Mic className="text-orange-500 w-10 h-10" />
                <p className="text-sm font-medium text-[#004D40] whitespace-nowrap">MLA/MP internships</p>
              </div>
            </motion.div>

            {/* Bottom left - Fellowships */}
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute bottom-10 left-0"
            >
              <div className="flex flex-col items-center gap-2">
                <GraduationCap className="text-orange-500 w-10 h-10" />
                <p className="text-sm font-medium text-[#004D40] whitespace-nowrap">Fellowships</p>
              </div>
            </motion.div>

            {/* Top left - Public Policy */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute top-10 left-0"
            >
              <div className="flex flex-col items-center gap-2">
                <FileText className="text-orange-500 w-10 h-10" />
                <p className="text-sm font-medium text-[#004D40] whitespace-nowrap">Public Policy</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
