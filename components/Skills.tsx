"use client";

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["C++", "Python", "JavaScript", "SQL", "Java"],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        "ReactJS",
        "Express.js",
        "Next.js",
        "Node.js",
        "Pandas",
        "NumPy",
        "Django",
        "Seaborn",
        "Matplotlib",
      ],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["Amazon Web Services", "Git", "GitHub"],
    },
    {
      category: "Business Intelligence",
      skills: ["Data Modeling",  "Fact and Dimension Tables","ETL/ELT",],
    },
    {
      category: "Soft Skills",
      skills: ["Management", "Leadership", "Oratory", "Adaptability"],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32">
      {/* Section Title */}
      <div className="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4 mb-16">
        <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
          My <span className="text-violet-400">Skills</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg p-6 bg-slate-800/50 hover:bg-slate-700/50 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-violet-400">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-2 rounded-md text-sm border border-gray-600 hover:border-violet-400 transition duration-300 text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
