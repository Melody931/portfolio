interface Skill {
  name: string
  category: 'Language' | 'Framework' | 'Web' | 'Tools'
  learning?: boolean
}

const skills: Skill[] = [
  {
    name: 'Python',
    category: 'Language',
        learning: true,

  },
  {
    name: 'React',
    category: 'Framework',
    learning: true,
  },
  {
    name: 'Flutter',
    category: 'Framework',
  },
  {
    name: 'C++',
    category: 'Language',
  },
  {
    name: 'HTML',
    category: 'Web',
  },
  {
    name: 'CSS',
    category: 'Web',
  },
  {
    name: 'Lua',
    category: 'Language',
  },
  {
    name: 'SQL',
    category: 'Language',
  },
  {
    name: 'Git',
    category: 'Tools',
    learning: true
  },
  {
    name: 'GitHub',
    category: 'Tools',
        learning: true,

  },
  {
    name: 'JavaScript',
    category: 'Language',
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="px-5 py-24 sm:px-6 md:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#8B5CF6]">
            Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technologies I work with.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-400 sm:text-lg">
            A selection of technologies I use to build, experiment,
            and continue developing my skills.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">

          {skills.map((skill) => (
            <article
              key={skill.name}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#8B5CF6]/30 hover:bg-white/[0.05]"
            >

              {/* Skill name */}
              <div className="flex items-center justify-between gap-3">

                <h3 className="font-medium text-white">
                  {skill.name}
                </h3>

                {skill.learning && (
                  <span className="rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/10 px-2 py-1 text-[10px] text-[#C4B5FD]">
                    Learning
                  </span>
                )}

              </div>

              {/* Category */}
              <p className="mt-2 text-xs text-gray-600">
                {skill.category}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills
