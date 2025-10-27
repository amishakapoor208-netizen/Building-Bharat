import { motion } from 'framer-motion'
import Image from 'next/image'

export default function NetworkInfluencers() {
  // Array of partner/influencer logos - you can add actual image paths later
  const topLogos = [
    { id: 1, name: "Partner 1", image: "/images/partners/partner-1.png" },
    { id: 2, name: "Partner 2", image: "/images/partners/partner-2.png" },
    { id: 3, name: "Partner 3", image: "/images/partners/partner-3.png" },
    { id: 4, name: "Partner 4", image: "/images/partners/partner-4.png" },
    { id: 5, name: "Partner 5", image: "/images/partners/partner-5.png" },
    { id: 6, name: "Partner 6", image: "/images/partners/partner-6.png" },
  ]

  const bottomLogos = [
    { id: 7, name: "Partner 7", image: "/images/partners/partner-7.png" },
    { id: 8, name: "Partner 8", image: "/images/partners/partner-8.png" },
    { id: 9, name: "Partner 9", image: "/images/partners/partner-9.png" },
    { id: 10, name: "Partner 10", image: "/images/partners/partner-10.png" },
    { id: 11, name: "Partner 11", image: "/images/partners/partner-11.png" },
    { id: 12, name: "Partner 12", image: "/images/partners/partner-12.png" },
  ]

  // Duplicate logos for seamless infinite scroll
  const duplicatedTopLogos = [...topLogos, ...topLogos, ...topLogos]
  const duplicatedBottomLogos = [...bottomLogos, ...bottomLogos, ...bottomLogos]

  return (
    <section className="bg-white py-20 relative">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-emerald-900 mb-16 text-center">
          Our Network & Strategic Influencers
        </h2>

        <div className="relative">
          {/* Top scrolling line - Height: 52px */}
          <div className="relative overflow-hidden mb-12 h-[52px]">
            {/* Gradient fades on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

            {/* Scrolling container */}
            <div className="flex items-center gap-12 h-full">
              <motion.div
                className="flex items-center gap-12 flex-shrink-0 h-full"
                animate={{
                  x: [0, -1500],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedTopLogos.map((logo, index) => (
                  <div
                    key={`top-${logo.id}-${index}`}
                    className="h-[52px] w-auto flex-shrink-0 flex items-center justify-center px-4"
                  >
                    <div className="relative h-full w-24">
                      <Image
                        src={logo.image}
                        alt={logo.name}
                        fill
                        className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Building Bharat Logo in Center - Width: 221.15px, Height: 209.05px, Radius: 43px, Border: 1px */}
          <div className="flex justify-center my-8">
            <div className="w-[221.15px] h-[209.05px] rounded-[43px] border border-orange-500 bg-white shadow-xl overflow-hidden flex items-center justify-center">
              <div className="relative w-full h-full p-6">
                <Image
                  src="/images/logo.png"
                  alt="Building Bharat"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>

          {/* Bottom scrolling line - Height: 52px */}
          <div className="relative overflow-hidden mt-12 h-[52px]">
            {/* Gradient fades on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

            {/* Scrolling container */}
            <div className="flex items-center gap-12 h-full">
              <motion.div
                className="flex items-center gap-12 flex-shrink-0 h-full"
                animate={{
                  x: [-1500, 0],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedBottomLogos.map((logo, index) => (
                  <div
                    key={`bottom-${logo.id}-${index}`}
                    className="h-[52px] w-auto flex-shrink-0 flex items-center justify-center px-4"
                  >
                    <div className="relative h-full w-24">
                      <Image
                        src={logo.image}
                        alt={logo.name}
                        fill
                        className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
