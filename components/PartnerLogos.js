import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PartnerLogos() {
  // Partner logos array - same as NetworkInfluencers
  const partners = [
    { id: 1, name: "Partner 1", image: "/images/image.png" },
    { id: 2, name: "Partner 2", image: "/images/Frame 70.png" },
    { id: 3, name: "Partner 3", image: "/images/Frame 76.png" },
    { id: 4, name: "Partner 4", image: "/images/Frame 72.png" },
    { id: 5, name: "Partner 5", image: "/images/Frame 78.png" },
    { id: 6, name: "Partner 6", image: "/images/Frame 79.png" },
    { id: 7, name: "Partner 7", image: "/images/Frame 80.png" },
    { id: 8, name: "Partner 8", image: "/images/Frame 71.png" },
    { id: 9, name: "Partner 9", image: "/images/Frame 75.png" },
  ];

  // Duplicate the array 3 times for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-6 md:py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        {/* Scrolling logos section */}
        <div className="overflow-hidden h-[60px] md:h-[70px] flex items-center py-2">
          <div className="relative w-full">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

            {/* Scrolling container */}
            <motion.div
              className="flex gap-6 md:gap-8 items-center h-full"
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
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`partner-${partner.id}-${index}`}
                  className="h-[45px] w-[100px] md:h-[52px] md:w-[120px] flex-shrink-0 flex items-center justify-center rounded-lg overflow-hidden border border-gray-300"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={partner.image}
                      alt={partner.name}
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
      </div>
    </section>
  )
}
