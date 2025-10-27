import { motion } from 'framer-motion'

export default function PartnerLogos() {
  // Partner logos array - you can add actual image paths later
  const partners = [
    { name: 'iCVOTER', image: '/images/partners/ivoter.png' },
    { name: 'Partner 2', image: '/images/partners/partner2.png' },
    { name: '3C', image: '/images/partners/3c.png' },
    { name: 'Partner 4', image: '/images/partners/partner4.png' },
    { name: 'Bharat Pulse', image: '/images/partners/bharat-pulse.png' },
    { name: 'Partner 6', image: '/images/partners/partner6.png' },
    { name: 'Partner 7', image: '/images/partners/partner7.png' },
    { name: 'LEADTECH', image: '/images/partners/leadtech.png' },
    { name: 'RAJNEETHI', image: '/images/partners/rajneethi.png' },
  ];

  // Duplicate the array 3 times for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Join Premium Community heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Join Premium Community
          </h2>
          <p className="text-gray-600 text-lg">
            Connect with industry leaders and top professionals
          </p>
        </div>

        {/* Scrolling logos section */}
        <div className="border-y border-gray-200 overflow-hidden h-[52px] flex items-center">
          <div className="relative w-full">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

            {/* Scrolling container */}
            <motion.div
              className="flex gap-1 items-center"
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
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 w-[125px] h-[51.97px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  {/* Placeholder box - replace with actual images later */}
                  <div className="w-full h-full border border-gray-300 rounded-[10px] flex items-center justify-center bg-gray-50 pt-3 pr-[17px] pl-[11px]">
                    <span className="text-xs font-semibold text-gray-400 text-center">
                      {partner.name}
                    </span>
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
