import Image from 'next/image'

export default function LiveSessions() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-8 h-8 text-emerald-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
              </svg>
              <h2 className="text-3xl font-bold text-emerald-900">Live Interactive Sessions</h2>
            </div>
            
            <p className="text-gray-700 text-base mb-8 leading-relaxed">
              Learn directly from policy experts, former MPs, senior bureaucrats, and successful political consultants through live, interactive sessions that simulate real-world scenarios.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">Weekly live sessions with industry experts</p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">Q&A sessions with former parliamentarians</p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">Interactive policy workshops</p>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative h-96 lg:h-[400px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/live-session.jpg"
              alt="Live Interactive Sessions"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
