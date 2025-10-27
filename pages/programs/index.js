import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'

const programs = [
  { id: 'program-a', title: 'Program A', excerpt: 'Short description for Program A.', image: 'program-a.png' },
  { id: 'program-b', title: 'Program B', excerpt: 'Short description for Program B.', image: 'program-b.png' },
  { id: 'program-c', title: 'Program C', excerpt: 'Short description for Program C.', image: 'program-c.png' }
]

export default function Programs(){
  return (
    <div>
      <Head>
        <title>Programs — Building Bharat</title>
      </Head>
      <Header />

      <main className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        <h1 className="text-3xl font-extrabold mb-6">Programs</h1>
        <p className="text-gray-600 mb-8">Explore programs to join and contribute to local initiatives.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map(p => (
            <article key={p.id} className="p-6 border rounded-lg">
              <div className="h-40 mb-4 overflow-hidden rounded-md bg-gray-100">
                <img src={`/images/${p.image}`} alt={`${p.title} image`} className="w-full h-full object-cover" />
              </div>
              <h2 className="font-semibold text-lg mb-2">{p.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{p.excerpt}</p>
              <Link href={`/programs/${p.id}`} className="text-primary font-medium">View details →</Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
