import { motion } from 'framer-motion'
import Image from 'next/image'

export default function NetworkInfluencers() {
  // Array of partner/influencer logos - you can add actual image paths later
  const logos = [
    { id: 1, name: "Partner 1", image: "/images/image.png" },
    { id: 2, name: "Partner 2", image: "/images/Frame 70.png" },
    { id: 3, name: "Partner 3", image: "/images/Frame 76.png" },
    { id: 4, name: "Partner 4", image: "/images/Frame 72.png" },
    { id: 5, name: "Partner 5", image: "/images/Frame 78.png" },
    { id: 6, name: "Partner 6", image: "/images/Frame 79.png" },
    { id: 7, name: "Partner 7", image: "/images/Frame 80.png" },
    { id: 8, name: "Partner 8", image: "/images/Frame 71.png" },
    { id: 9, name: "Partner 9", image: "/images/Frame 75.png" },
  ]

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos]

  // Reusable scrolling logo line component
  const ScrollingLogos = ({ direction = 'left' }) => (
    <div className="relative overflow-hidden h-[70px] py-2">
      {/* Gradient fades on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

      {/* Scrolling container */}
      <div className="flex items-center gap-8 h-full">
        <motion.div
          className="flex items-center gap-8 flex-shrink-0 h-full"
          animate={{
            x: direction === 'left' ? [0, -1500] : [-1500, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${direction}-${logo.id}-${index}`}
              className="h-[52px] w-[120px] flex-shrink-0 flex items-center justify-center rounded-lg overflow-hidden border border-gray-300"
            >
              <div className="relative h-full w-full">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  fill
                  className="object-contain"
                  quality={100}
                  priority={index < 9}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )

  return (
    <section className="bg-white py-10 md:py-16 lg:py-20 relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-emerald-900 mb-8 md:mb-12 lg:mb-16 text-center">
          Our Network & Strategic Influencers
        </h2>

        <div className="relative">
          {/* Top scrolling line - scrolls left */}
          <div className="mb-8 md:mb-12">
            <ScrollingLogos direction="left" />
          </div>

          {/* Building Bharat Logo in Center - Width: 221.15px, Height: 209.05px, Radius: 43px, Border: 1px */}
          <div className="flex justify-center my-6 md:my-8">
            <div className="w-[180px] h-[170px] sm:w-[200px] sm:h-[189px] md:w-[221.15px] md:h-[209.05px] rounded-[30px] md:rounded-[43px] border border-orange-500 bg-white overflow-hidden flex items-center justify-center p-4 md:p-6 shadow-[4px_4px_8px_rgba(249,124,4,0.25)]">
              <div className="relative w-full h-full">
                <Image
                  src="/images/og-image.png"
                  alt="Building Bharat"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Bottom scrolling line - scrolls right */}
          <div className="mt-8 md:mt-12">
            <ScrollingLogos direction="right" />
          </div>
        </div>
      </div>
    </section>
  )
}
