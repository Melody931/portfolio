function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-5 pb-16 pt-28 sm:px-6 md:pb-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">

        {/* Hero content */}
        <div>
          <p className="mb-3 text-lg text-[#C4B5FD]">
            Hi, I'm
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Javier López Chevalier
          </h1>

          <h2 className="mt-4 text-xl font-semibold text-[#8B5CF6] sm:text-2xl">
            Software Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
            I enjoy turning creative ideas into software, building useful
            applications, and continuously finding ways to improve what I
            create.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#C4B5FD] px-6 py-3 text-center font-medium text-white shadow-lg shadow-purple-500/20 transition duration-200 hover:brightness-110"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-center font-medium text-gray-200 backdrop-blur-sm transition duration-200 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex flex-wrap gap-5 text-sm text-gray-400">
            <a
              href="https://github.com/Melody931"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/javier-chevalier-5188a4402/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-white"
            >
              LinkedIn
            </a>

            <a
             href="https://mail.google.com/mail/?view=cm&fs=1&to=javierchevalier241@gmail.com"
             target="_blank"
             rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-white"
            >
              Email
            </a>
          </div>
        </div>

        {/* Code editor */}
        <div className="relative w-full">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-[#8B5CF6]/20 blur-3xl" />

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/80 shadow-2xl backdrop-blur-xl">

            {/* Window bar */}
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-4 sm:px-5">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />

              <span className="ml-2 text-xs text-gray-500 sm:ml-3">
                developer.ts
              </span>
            </div>

            {/* Code */}
            <pre className="overflow-x-auto p-4 font-mono text-xs leading-6 sm:p-6 sm:text-sm sm:leading-7">
              <code>
                <span className="text-[#C4B5FD]">class</span>{' '}
                <span className="text-white">Developer</span>{' '}
                <span className="text-gray-400">{'{'}</span>
                {'\n\n'}

                {'  '}
                <span className="text-[#C4B5FD]">constructor</span>
                <span className="text-gray-400">()</span>{' '}
                <span className="text-gray-400">{'{'}</span>
                {'\n'}

                {'    '}
                <span className="text-[#C4B5FD]">this</span>
                <span className="text-gray-400">.</span>
                <span className="text-white">name</span>
                <span className="text-gray-400"> = </span>
                <span className="text-green-300">"Javier"</span>
                <span className="text-gray-400">;</span>
                {'\n'}

                {'    '}
                <span className="text-[#C4B5FD]">this</span>
                <span className="text-gray-400">.</span>
                <span className="text-white">role</span>
                <span className="text-gray-400"> = </span>
                <span className="text-green-300">"Software Developer"</span>
                <span className="text-gray-400">;</span>
                {'\n'}

                {'    '}
                <span className="text-[#C4B5FD]">this</span>
                <span className="text-gray-400">.</span>
                <span className="text-white">country</span>
                <span className="text-gray-400"> = </span>
                <span className="text-green-300">"Dominican Republic"</span>
                <span className="text-gray-400">;</span>
                {'\n'}

                {'    '}
                <span className="text-[#C4B5FD]">this</span>
                <span className="text-gray-400">.</span>
                <span className="text-white">passion</span>
                <span className="text-gray-400"> = </span>
                <span className="text-green-300">"Building software"</span>
                <span className="text-gray-400">;</span>
                {'\n'}

                {'  '}
                <span className="text-gray-400">{'}'}</span>
                {'\n\n'}

                {'  '}
                <span className="text-[#C4B5FD]">building</span>
                <span className="text-gray-400">()</span>{' '}
                <span className="text-gray-400">{'{'}</span>
                {'\n'}

                {'    '}
                <span className="text-[#C4B5FD]">return</span>{' '}
                <span className="text-green-300">"Herta"</span>
                <span className="text-gray-400">;</span>
                {'\n'}

                {'  '}
                <span className="text-gray-400">{'}'}</span>
                {'\n'}

                <span className="text-gray-400">{'}'}</span>
              </code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero

