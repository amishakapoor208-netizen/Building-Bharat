import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import ProgramDetail from '../../components/ProgramDetail'

const samplePrograms = {
    'program-a': {
    id: 'program-a',
    title: 'Program A',
    description: 'Program A is focused on vocational training and community workshops to empower local talent.',
    image: 'program-a.png',
    bullets: ['Practical training', 'Local mentors', 'Job placements']
  },
  'program-b': {
    id: 'program-b',
    title: 'Program B',
    description: 'Program B is a micro-grant initiative to help small local projects kick off.',
    image: 'program-b.png',
    bullets: ['Small grants', 'Project mentorship', 'Community support']
  },
  'program-c': {
    id: 'program-c',
    title: 'Program C',
    description: 'Program C runs digital literacy drives across rural communities.',
    image: 'program-c.png',
    bullets: ['Workshops', 'Device access', 'Volunteer network']
  }
}

export default function ProgramPage(){
  const router = useRouter()
  const { id } = router.query

  const program = id && samplePrograms[id]

  if(!program) return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold">Program not found</h2>
        <p className="text-gray-600 mt-4">Make sure the program id is correct or go back to the <a href="/programs" className="text-primary">Programs list</a>.</p>
      </main>
    </div>
  )

  return (
    <div>
      <Head>
        <title>{program.title} — Building Bharat</title>
      </Head>
      <Header />
      <main className="max-w-5xl mx-auto px-6 md:px-8 py-12">
        <ProgramDetail program={program} />
      </main>
    </div>
  )
}
