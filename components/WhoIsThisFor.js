import { motion } from 'framer-motion'
import Image from 'next/image'

export default function WhoIsThisFor() {
  const audiences = [
    { 
      title: "College Students", 
      description: "Students from any discipline looking to build a career in politics and policy",
      icon: "/images/Vector.png"
    },
    { 
      title: "Career Switchers", 
      description: "Professionals from other fields wanting to transition into political consulting",
      icon: "/images/icon-swap.png"
    },
    { 
      title: "Young Professionals", 
      description: "Early-career professionals seeking to specialize in government and policy work",
      icon: "/images/icon-profile.png"
    },
    { 
      title: "Policy Enthusiasts", 
      description: "Anyone passionate about public service and creating positive social impact",
      icon: "/images/Group 6.png"
    }
  ];

  return (
    <section className="py-10 md:py-16 lg:py-20 text-center bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-3 md:mb-4">Who Is This Initiative For?</h2>
      <p className="text-gray-600 mb-8 md:mb-12 text-base md:text-lg px-4">Perfect for Aspiring Political and policy professionals from all Backgrounds</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto px-4 md:px-6">
        {audiences.map((audience, index) => (
          <motion.div
            key={audience.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-[20px] md:rounded-[27px] border border-gray-200 w-full max-w-[295px] min-h-[240px] md:h-[261px] flex flex-col items-center justify-center p-4 md:p-6 mx-auto"
          >
            {/* Icon/Image - 77px × 66.99px */}
            <div className="w-[65px] h-[56px] md:w-[77px] md:h-[66.99px] mb-4 md:mb-6 relative">
              <Image 
                src={audience.icon} 
                alt={audience.title}
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </div>
            
            {/* Heading - Poppins SemiBold 20px */}
            <h3 className="font-poppins font-semibold text-[18px] md:text-[20px] leading-[100%] tracking-[0%] text-orange-500 mb-3 md:mb-4 text-center max-w-[184px]">
              {audience.title}
            </h3>
            
            {/* Description - Poppins Regular 14px */}
            <p className="font-poppins font-normal text-[13px] md:text-[14px] leading-[120%] md:leading-[100%] tracking-[0%] text-gray-600 text-center max-w-[230px] min-h-[60px] md:h-[69px]">
              {audience.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
