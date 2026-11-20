interface Project {
  name: string
  description: string
  type: string
  technologies: string[]
  status: string
  github: string | null
  demo: string | null
  image: string | null
  preview: 'terminal' | 'mobile' | 'image'
}

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-[#8B5CF6]/30 hover:bg-white/[0.05]">

      {/* Project preview */}
      <div className="relative aspect-video overflow-hidden bg-black/20">

        {/* PERSONAL ASSISTANT TERMINAL */}
        {project.preview === 'terminal' && (
          <div className="flex h-full items-center justify-center bg-[#080B14] px-4">
            <div className="w-[90%] overflow-hidden rounded-xl border border-white/10 bg-[#0D111C] shadow-2xl shadow-[#8B5CF6]/10">

              {/* Terminal header */}
              <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

                <span className="ml-3 text-[10px] text-gray-600">
                  personal assistant — development
                </span>
              </div>

              {/* Terminal content */}
              <div className="space-y-2.5 p-5 font-mono text-[10px] leading-relaxed sm:text-xs">

                <p className="text-gray-500">
                  <span className="text-[#8B5CF6]">&gt;</span>{' '}
                  assistant status
                </p>

                <p className="text-gray-500">
                  Preparing workspace...
                </p>

                <p className="text-gray-300">
                  <span className="text-[#8B5CF6]">✓</span>{' '}
                  Assistant initialized
                </p>

                <p className="text-gray-400">
                  Loading core modules...
                </p>

                <p className="pl-4 text-gray-600">
                  └─ Setup in progress
                </p>

                <p className="text-gray-500">
                  Checking system status...
                </p>

                <p className="text-gray-300">
                  <span className="text-[#8B5CF6]">✓</span>{' '}
                  All systems operational
                </p>

                <p className="text-gray-500">
                  Finalizing startup...
                </p>

                <p className="text-gray-300">
                  <span className="text-[#8B5CF6]">✓</span>{' '}
                  Ready
                </p>

                <p className="text-gray-400">
                  <span className="text-[#8B5CF6]">&gt;</span>{' '}
                  Ready to assist<span className="animate-pulse">_</span>
                </p>

              </div>

            </div>
          </div>
        )}

        {/* STUDY AI MOBILE */}
        {project.preview === 'mobile' && project.image && (
          <div className="flex h-full items-center justify-center bg-[#080B14]">

            <div className="relative h-[92%] max-h-[340px] overflow-hidden rounded-[1.4rem] border-[5px] border-[#1B2030] shadow-2xl shadow-[#8B5CF6]/10">
              <img
                src={project.image}
                alt={`${project.name} project preview`}
                className="h-full w-auto object-contain"
              />
            </div>

          </div>
        )}

        {/* NORMAL IMAGE */}
        {project.preview === 'image' && project.image && (
          <img
            src={project.image}
            alt={`${project.name} project preview`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        )}

      </div>

      {/* Project information */}
      <div className="p-6">

        <div className="flex items-start justify-between gap-4">

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[#8B5CF6]">
              {project.type}
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              {project.name}
            </h3>
          </div>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500">
            {project.status}
          </span>

        </div>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-gray-400"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project links */}
        <div className="mt-6 flex gap-3">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-[#8B5CF6]/40 hover:text-white"
            >
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#8B5CF6] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#7C3AED]"
            >
              Live Demo
            </a>
          )}

        </div>

      </div>
    </article>
  )
}

export default ProjectCard