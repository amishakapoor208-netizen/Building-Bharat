import Image from 'next/image'

export default function Header() {
  return (
    <nav className="fixed top-[20px] md:top-[40px] left-1/2 -translate-x-1/2 bg-white z-50 border border-gray-200 rounded-[20px] md:rounded-[25px] w-[95%] md:w-[90%] max-w-[1259px] h-[60px] md:h-[69px] px-4 md:px-[29px] flex items-center justify-between gap-2 md:gap-4 lg:gap-[135px]" style={{ boxShadow: '0px 2px 5px 0px rgba(249, 124, 4, 0.25)' }}>
      <div className="flex items-center flex-shrink-0">
        <Image src="/images/og-image.png" alt="Building Bharat Logo" width={56} height={55} className="object-contain w-[45px] h-[45px] md:w-[56px] md:h-[55px]" />
      </div>

      <ul className="hidden md:flex items-center space-x-1 lg:space-x-2 text-gray-700 font-medium text-sm flex-1 justify-center">
        <li>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-3 lg:px-6 py-2 lg:py-2.5 rounded-full bg-orange-500 text-white font-medium inline-block hover:bg-orange-600 transition cursor-pointer text-xs lg:text-sm"
          >
            Home
          </a>
        </li>
        <li>
          <a href="#" className="relative px-3 lg:px-6 py-2 lg:py-2.5 rounded-full text-gray-700 font-medium inline-block overflow-hidden group">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 text-xs lg:text-sm">Courses</span>
            <span className="absolute inset-0 bg-orange-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
          </a>
        </li>
        <li>
          <a href="#" className="relative px-3 lg:px-6 py-2 lg:py-2.5 rounded-full text-gray-700 font-medium inline-block overflow-hidden group">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 text-xs lg:text-sm">For Collage</span>
            <span className="absolute inset-0 bg-orange-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
          </a>
        </li>
        <li>
          <a href="#" className="relative px-3 lg:px-6 py-2 lg:py-2.5 rounded-full text-gray-700 font-medium inline-block overflow-hidden group">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 text-xs lg:text-sm">Internships</span>
            <span className="absolute inset-0 bg-orange-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
          </a>
        </li>
        <li>
          <a href="#" className="relative px-3 lg:px-6 py-2 lg:py-2.5 rounded-full text-gray-700 font-medium inline-block overflow-hidden group">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 text-xs lg:text-sm">Blogs</span>
            <span className="absolute inset-0 bg-orange-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
          </a>
        </li>
      </ul>

      <button className="bg-white text-orange-500 border-2 border-orange-500 px-3 md:px-4 lg:px-6 py-1.5 md:py-2 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 flex-shrink-0 text-xs md:text-sm lg:text-base">
        Start Learning
      </button>
    </nav>
  )
}
