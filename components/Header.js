import Image from 'next/image'

export default function Header() {
  return (
    <nav className="fixed top-[40px] left-1/2 -translate-x-1/2 bg-white z-50 border border-gray-200 rounded-[25px] w-[90%] max-w-[1259px] h-[69px] px-[29px] flex items-center justify-between gap-4 lg:gap-[135px]" style={{ boxShadow: '0px 2px 5px 0px rgba(249, 124, 4, 0.25)' }}>
      <div className="flex items-center flex-shrink-0">
        <Image src="/images/og-image.png" alt="Building Bharat Logo" width={56} height={55} className="object-contain" />
      </div>

      <ul className="hidden md:flex items-center space-x-2 text-gray-700 font-medium text-sm flex-1 justify-center">
        <li>
          <a href="#" className="px-4 lg:px-6 py-2.5 rounded-full bg-orange-500 text-white font-medium inline-block hover:bg-orange-600 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="relative px-4 lg:px-6 py-2.5 rounded-full text-gray-700 font-medium inline-block overflow-hidden group">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Courses</span>
            <span className="absolute inset-0 bg-orange-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
          </a>
        </li>
        <li>
          <a href="#" className="relative px-4 lg:px-6 py-2.5 rounded-full text-gray-700 font-medium inline-block overflow-hidden group">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">For Collage</span>
            <span className="absolute inset-0 bg-orange-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
          </a>
        </li>
        <li>
          <a href="/programs" className="relative px-4 lg:px-6 py-2.5 rounded-full text-gray-700 font-medium inline-block overflow-hidden group">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Internships</span>
            <span className="absolute inset-0 bg-orange-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
          </a>
        </li>
        <li>
          <a href="#" className="relative px-4 lg:px-6 py-2.5 rounded-full text-gray-700 font-medium inline-block overflow-hidden group">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Blogs</span>
            <span className="absolute inset-0 bg-orange-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
          </a>
        </li>
      </ul>

      <button className="bg-white text-orange-500 border-2 border-orange-500 px-4 lg:px-6 py-2 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 flex-shrink-0 text-sm lg:text-base">
        Start Learning
      </button>
    </nav>
  )
}
