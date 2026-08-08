
function About() {
  return (
    <section
      id="about"
      className="px-5 py-24 sm:px-6 md:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#8B5CF6]">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Turning ideas into software.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-400 sm:text-lg">
            I started programming because it felt like the perfect way to
            combine creativity with technology. What I enjoy most is taking
            an idea and turning it into something real.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">

          {/* Description */}
          <div>
            <p className="leading-8 text-gray-400">
              Whether it is an application, a website, or an interactive
              experience, I enjoy the process of transforming creative ideas
              into functional software.
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              I am especially interested in developing software focused on
              entertainment, where creativity and technology can come together
              to create engaging experiences. I am currently expanding my
              skills with React and Python while continuing to explore new
              ways of building better software.
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              I also enjoy improving the projects I work on long after they
              are functional. I am always looking for ways to make my ideas
              cleaner, more efficient, and more enjoyable to use.
            </p>

            {/* Herta */}
            <div className="mt-8 border-l border-[#8B5CF6]/50 pl-5">
              <p className="text-sm font-medium text-white">
                Currently building Herta
              </p>

              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                A personal system I am developing to assist my programming
                workflow and make parts of the development process more
                efficient.
              </p>
            </div>
          </div>

          {/* Information cards */}
          <div className="grid gap-4 sm:grid-cols-2">

            {/* Based in */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-[#8B5CF6]/30 hover:bg-white/[0.05]">
              <p className="text-sm text-gray-500">
                Based in
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                Dominican Republic
              </p>
            </div>

            {/* Focus */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-[#8B5CF6]/30 hover:bg-white/[0.05]">
              <p className="text-sm text-gray-500">
                Focus
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                Software Development
              </p>
            </div>

            {/* Currently Learning */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-[#8B5CF6]/30 hover:bg-white/[0.05]">
              <p className="text-sm text-gray-500">
                Currently Learning
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                React & Python
              </p>
            </div>

            {/* Building */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-[#8B5CF6]/30 hover:bg-white/[0.05]">
              <p className="text-sm text-gray-500">
                Building
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                Herta
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About

