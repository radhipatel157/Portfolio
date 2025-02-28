export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4 mb-16">
        <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
          Work <span className="text-violet-400">Experience</span>
        </h3>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Python Intern - LearnTricks EduTech */}
        <div className="relative border-l-2 border-violet-500 pl-8 pb-12">
          <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-violet-500"></div>

          <div className="bg-slate-800/50 p-6 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between mb-4">
              <h4 className="font-bold text-xl text-violet-400">
                <i className="fa-solid fa-laptop-code mr-2"></i>Python Intern
              </h4>
              <div className="flex items-center gap-2 text-slate-400">
                <i className="fa-regular fa-calendar"></i>
                <span>June 2024 - July 2024</span>
              </div>
            </div>

            <h5 className="text-lg mb-4 font-medium">LearnTricks EduTech | Remote</h5>

            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>Worked on Django, Python, MySQL, HTML, Tailwind CSS, and JavaScript.</li>
              <li>Implemented CRUD operations for enhanced content management.</li>
            </ul>
          </div>
        </div>

        {/* Community Service Intern - Zoriya Foundation */}
        <div className="relative border-l-2 border-violet-500 pl-8 pb-12">
          <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-violet-500"></div>

          <div className="bg-slate-800/50 p-6 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between mb-4">
              <h4 className="font-bold text-xl text-violet-400">
                <i className="fa-solid fa-hand-holding-heart mr-2"></i>Community Service Intern
              </h4>
              <div className="flex items-center gap-2 text-slate-400">
                <i className="fa-regular fa-calendar"></i>
                <span>10-day internship</span>
              </div>
            </div>

            <h5 className="text-lg mb-4 font-medium">Zoriya Foundation</h5>

            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>Contributed to community service initiatives.</li>
              <li>Worked at Tajpur Government School and village.</li>
            </ul>
          </div>
        </div>

        {/* Core Committee Member - Computer Society of India */}
        <div className="relative border-l-2 border-violet-500 pl-8">
          <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-violet-500"></div>

          <div className="bg-slate-800/50 p-6 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between mb-4">
              <h4 className="font-bold text-xl text-violet-400">
                <i className="fa-solid fa-users mr-2"></i>Core Committee Member
              </h4>
              <div className="flex items-center gap-2 text-slate-400">
                <i className="fa-solid fa-award"></i>
                <span>Leadership Experience</span>
              </div>
            </div>

            <h5 className="text-lg mb-4 font-medium">Computer Society of India</h5>

            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>Led the National Level HackNUThon 2024.</li>
              {/* Core Committee Member - Computer Society of India */}
<li>Organized CSI&apos;s flagship event, CUBIX.</li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
