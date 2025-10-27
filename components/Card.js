import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Card({ program }) {
  const { title, image, desc } = program

  return (
    <motion.article
      className="rounded-xl bg-white shadow-md overflow-hidden border border-gray-100"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{desc}</p>
        <motion.a
          whileHover={{ x: 4 }}
          href="#"
          className="inline-flex items-center text-orange-500 font-medium text-sm hover:underline"
        >
          Learn more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.a>
      </div>
    </motion.article>
  )
}
