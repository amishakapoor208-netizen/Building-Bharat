import Image from 'next/image'

export default function Header() {
  return (
    <nav className="sticky top-0 py-4 bg-white z-50 shadow-[0_4px_12px_rgba(249,115,22,0.15)]">
      <div className="flex items-center justify-between px-8">
        <div className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Building Bharat Logo" width={40} height={40} />
          <h1 className="font-bold text-lg">
            <span className="text-orange-500">BUILDING</span><br/>
            <span className="text-orange-500">BHARAT</span>
          </h1>
        </div>

        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium text-sm">
          <li><a href="#" className="px-4 py-2 rounded-full bg-orange-500 text-white font-semibold inline-block">Home</a></li>
          <li><a href="#" className="px-4 py-2 rounded-full transition-colors duration-300 relative overflow-hidden group inline-block">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Courses</span>
            <span className="absolute inset-y-0 left-0 w-0 bg-orange-500 group-hover:w-full transition-all duration-500 ease-in-out rounded-full"></span>
          </a></li>
          <li><a href="#" className="px-4 py-2 rounded-full transition-colors duration-300 relative overflow-hidden group inline-block">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">For Collage</span>
            <span className="absolute inset-y-0 left-0 w-0 bg-orange-500 group-hover:w-full transition-all duration-500 ease-in-out rounded-full"></span>
          </a></li>
          <li><a href="/programs" className="px-4 py-2 rounded-full transition-colors duration-300 relative overflow-hidden group inline-block">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Internships</span>
            <span className="absolute inset-y-0 left-0 w-0 bg-orange-500 group-hover:w-full transition-all duration-500 ease-in-out rounded-full"></span>
          </a></li>
          <li><a href="#" className="px-4 py-2 rounded-full transition-colors duration-300 relative overflow-hidden group inline-block">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Blogs</span>
            <span className="absolute inset-y-0 left-0 w-0 bg-orange-500 group-hover:w-full transition-all duration-500 ease-in-out rounded-full"></span>
          </a></li>
        </ul>

        <button className="bg-white text-orange-500 border-2 border-orange-500 px-6 py-2 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
          Start Learning
        </button>
      </div>
    </nav>
  )
}
