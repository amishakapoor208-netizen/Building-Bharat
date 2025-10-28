import Image from 'next/image'

export default function JobOpportunities() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative h-96 lg:h-[400px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/program-b.png"
              alt="Job and Internship Opportunities"
              fill
              className="object-cover"
            />
          </div>

          {/* Right side - Text content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-8 h-8 text-emerald-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h2 className="text-3xl font-bold text-emerald-900">Guaranteed Job/Internship Opportunities</h2>
            </div>
            
            <p className="text-gray-700 text-base mb-8 leading-relaxed">
              Access exclusive job openings and internship opportunities with our partner organizations, think tanks, and political parties immediately after course completion.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">Exclusive partnership with 50+ organizations</p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">Direct placement assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
