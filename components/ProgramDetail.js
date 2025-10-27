import Image from 'next/image'

export default function ProgramDetail({program}){
  return (
    <article className="space-y-6">
      <header className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2">
          <h1 className="text-[48px] md:text-[48px] leading-[1] tracking-[0px] font-extrabold">{program.title}</h1>
          <p className="text-gray-600 mt-3">{program.description}</p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <div className="w-full md:w-52 h-36 bg-gray-100 rounded-md overflow-hidden">
            {program.image ? (
              <Image src={`/images/${program.image}`} alt={`${program.title} image`} width={208} height={144} className="object-cover w-full h-full" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-sm text-gray-500">Program image</div>
            )}
          </div>
          <a className="px-4 py-2 bg-primary text-white rounded-md w-full text-center" href="#">Join Program</a>
        </div>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-3">What you'll get</h2>
        <ul className="list-disc list-inside text-gray-700">
          {program.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">About the program</h2>
        <p className="text-gray-600">More detailed program information goes here. This area can be expanded with sections for schedule, mentors, location, FAQs, and application details.</p>
      </section>
    </article>
  )
}
