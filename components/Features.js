import Image from 'next/image'

export default function Features() {
  const features = [
    {
      id: 1,
      icon: (
        <svg className="w-6 h-6 text-emerald-900" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
        </svg>
      ),
      title: "Live Interactive Sessions",
      description: "Learn directly from policy experts, former MPs, senior bureaucrats, and successful political consultants through live, interactive sessions that simulate real-world scenarios.",
      bulletPoints: [
        "Weekly live sessions with industry experts",
        "Q&A sessions with former parliamentarians",
        "Interactive policy workshops"
      ],
      image: "/images/program-a.png",
      imagePosition: "right"
    },
    {
      id: 2,
      icon: (
        <svg className="w-6 h-6 text-emerald-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Guaranteed Job/Internship Opportunities",
      description: "Access exclusive job openings and internship opportunities with our partner organizations, think tanks, and political parties immediately after course completion.",
      bulletPoints: [
        "Exclusive partnership with 50+ organizations",
        "Direct placement assistance",
        "Internship posting and industry Inserts"
      ],
      image: "/images/image 7.png",
      imagePosition: "left"
    },
    {
      id: 3,
      icon: (
        <svg className="w-6 h-6 text-emerald-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Boost Your Resume With Projects & Hackathons",
      description: "Work on actual policy challenges and political campaign scenarios faced by Indian organizations. Build a portfolio that demonstrates your practical skills and stands out to top recruiters.",
      bulletPoints: [
        "Hands-on real-world projects",
        "Monthly government hackathons",
        "LinkedIn support, Career advice"
      ],
      image: "/images/program-b.png",
      imagePosition: "right"
    },
    {
      id: 4,
      icon: (
        <svg className="w-6 h-6 text-emerald-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: "Mock Interviews & Practical Year Questions",
      description: "Build the skills and confidence to clear any political or policy job interview. Practice with industry experts and prepare for the actual challenges you'll face in your career journey.",
      bulletPoints: [
        "Mock practice year interview questions",
        "Weekly mock interview sessions",
        "Personalized feedback and improvement plans"
      ],
      image: "/images/image 9 (1).png",
      imagePosition: "left"
    }
  ]

  return (
    <>
      {features.map((feature, index) => (
        <section 
          key={feature.id} 
          className={index % 2 === 0 ? "bg-white py-10 md:py-16 lg:py-20" : "bg-gray-50 py-10 md:py-16 lg:py-20"}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className={`flex flex-col lg:flex-row gap-8 md:gap-12 items-center justify-center ${
              feature.imagePosition === "left" ? "lg:flex-row-reverse" : ""
            }`}>
              {/* Text content - Width: 581px, Height: 314px */}
              <div className="w-full lg:w-[581px] lg:min-h-[314px] flex flex-col justify-center">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  {feature.icon}
                  <h2 className="text-xl md:text-2xl font-bold text-emerald-900">{feature.title}</h2>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-4 md:mb-6">
                  {feature.description}
                </p>

                <div className="space-y-2 md:space-y-3">
                  {feature.bulletPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-700 text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image - Width: 557.24px, Height: 387px, Radius: 38px */}
              <div className="relative w-full max-w-[557.24px] h-[250px] sm:h-[320px] md:h-[387px] rounded-[20px] md:rounded-[38px] overflow-hidden shadow-lg flex-shrink-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
