
interface ContactMethod {
  name: string
  description: string
  href: string
}

const contactMethods: ContactMethod[] = [
  {
    name: 'Email',
    description: 'Best for direct communication.',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=javierchevalier241@gmail.com',
  },
  {
    name: 'LinkedIn',
    description: 'Connect professionally.',
    href: 'https://www.linkedin.com/in/javier-chevalier-5188a4402/',
  },
  {
    name: 'GitHub',
    description: 'Explore my work.',
    href: 'https://github.com/Melody931',
  },
]

function Contact() {
  return (
    <section
      id="contact"
      className="px-5 py-24 sm:px-6 md:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#8B5CF6]">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-400 sm:text-lg">
            I enjoy turning creative ideas into software and continuously
            finding ways to improve what I build. If you have a project,
            an opportunity, or simply an interesting idea, I&apos;d be happy
            to hear from you.
          </p>

        </div>

        {/* Contact methods */}
        <div className="grid gap-4 sm:grid-cols-3">

          {contactMethods.map((method) => (
            <a
              key={method.name}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#8B5CF6]/30 hover:bg-white/[0.05]"
            >

              <div className="flex items-center justify-between">

                <h3 className="font-medium text-white">
                  {method.name}
                </h3>

                <span className="text-gray-600 transition duration-200 group-hover:translate-x-1 group-hover:text-[#C4B5FD]">
                  →
                </span>

              </div>

              <p className="mt-3 text-sm text-gray-500">
                {method.description}
              </p>

            </a>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Contact
