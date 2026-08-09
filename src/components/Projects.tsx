import ProjectCard from './ProjectCard'

import studyAiImage from '../assets/projects/study-ai.jpg'
import maisonSeleneImage from '../assets/projects/maison-selene.png'
import nebulaCoreImage from '../assets/projects/nebula-core.png'
import elAhorroImage from '../assets/projects/el-ahorro.png'

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

const projects: Project[] = [
  {
    name: 'Herta',
    description:
      'A personal programming assistant designed to improve my development workflow and make the process more efficient.',
    type: 'Development Assistant',
    technologies: ['Python'],
    status: 'In Development',
    github: '#',
    demo: null,
    image: null,
    preview: 'terminal',
  },
  {
    name: 'Study AI',
    description:
      'A cross-platform mobile application designed to simulate exams on virtually any subject.',
    type: 'Mobile Application',
    technologies: ['Flutter', 'Dart'],
    status: 'Paused',
    github: '#',
    demo: '#',
    image: studyAiImage,
    preview: 'mobile',
  },
  {
    name: 'Maison Sélene',
    description:
      'A promotional website concept focused on presenting a refined and elegant visual identity.',
    type: 'Web Design',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    status: 'Completed',
    github: '#',
    demo: '#',
    image: maisonSeleneImage,
    preview: 'image',
  },
  {
    name: 'Nebula Core',
    description:
      'A promotional website concept created for a computer store, combining technology-focused visuals with a modern interface.',
    type: 'Web Design',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    status: 'Completed',
    github: '#',
    demo: '#',
    image: nebulaCoreImage,
    preview: 'image',
  },
  {
    name: 'El Ahorro',
    description:
      'A promotional website concept for a magazine, designed to present its content through a clean and engaging interface.',
    type: 'Web Design',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    status: 'Completed',
    github: '#',
    demo: '#',
    image: elAhorroImage,
    preview: 'image',
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="px-5 py-24 sm:px-6 md:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#8B5CF6]">
            Projects
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Things I&apos;ve built.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-400 sm:text-lg">
            A collection of personal projects and web experiences I&apos;ve
            created while learning, experimenting, and improving my skills.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
