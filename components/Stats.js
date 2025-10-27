import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { number: 2500, label: "Students Trained", suffix: "+" },
    { number: 1200, label: "Successful Placements", suffix: "+" },
    { number: 50, label: "Partner Organizations", suffix: "+" },
    { number: 15, label: "Specialized Courses", suffix: "+" }
  ]

  const achievements = [
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Excellence in Education",
      description: "Recognized as India's leading platform for political and policy education with industry-validated curriculum."
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: "Strong Industry Network",
      description: "Partnerships with leading think tanks, political parties, and government organizations across India."
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Alumni Success",
      description: "Our alumni are making real impact in Parliament, state governments, and top consulting firms nationwide."
    }
  ]

  return (
    <section ref={ref} className="bg-gradient-to-b from-[#1DD3C7] via-[#17A89A] to-[#0F8074] py-20 border border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Building Bharat Till Date</h2>
        <p className="text-white/90 text-lg mb-16">Our journey in shaping India's political and policy landscape</p>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-white mb-2">
                <CountUp end={stat.number} duration={2.5} isInView={isInView} suffix={stat.suffix} />
              </div>
              <p className="text-white/90 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-[#0D6B61]/60 backdrop-blur-sm rounded-3xl p-8 text-left border border-white/80 w-full max-w-[366px] h-[191.48px] mx-auto flex flex-col justify-center shadow-lg"
            >
              <div className="mb-3">
                {achievement.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
              <p className="text-white/80 text-xs leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUp({ end, duration, isInView, suffix = "" }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime
    let animationFrame

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, isInView])

  return <>{count}{suffix}</>
}
