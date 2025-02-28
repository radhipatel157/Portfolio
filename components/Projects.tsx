"use client";

import { useState } from 'react';

type Project = {
  title: string;
  tech: string;
  description: string[];
  date: string;
  icon: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Explora",
      tech: "JavaScript • ReactJS • MongoDB • ExpressJS",
      description: [
        "Developed a Full Stack Travel Story App, enabling users to document and share travel experiences with secure authentication and personalized journals.",
        "Implemented CRUD operations, keyword search, date filters, and user favorites, ensuring an engaging and responsive user experience."
      ],
      date: "Dec 2024",
      icon: "fa-solid fa-globe"
    },
    {
      title: "Emotion Recognition System",
      tech: "Python • TensorFlow • Keras",
      description: [
        "Engineered a hybrid LSTM and GAN-based emotion recognition model using TensorFlow and Keras, achieving accurate classification of emotional states from a labeled dataset.",
        "Trained a GAN for synthetic data generation and applied LSTM for emotion detection, achieving 83% accuracy on the test set."
      ],
      date: "Oct 2024",
      icon: "fa-solid fa-face-smile"
    },
    {
      title: "News Navigator",
      tech: "ReactJS • JavaScript • TailwindCSS",
      description: [
        "Built a React-based news search platform that allows users to search over 150,000 articles from numerous large and small news sources and blogs using specific keywords.",
        "Optimized user experience by featuring major topics, ensuring quick and seamless access to relevant news articles in areas like Sports, Technology, Health and many more."
      ],
      date: "Sept 2024",
      icon: "fa-solid fa-newspaper"
    },
    {
      "title": "FinXtract",
      "tech": "Generative AI • Python",
      "description": [
          "Processes PDFs into structured financial data using OCR and AI-driven filtering.",
          "Enhances financial data extraction with Langflow API and Llama AI for precision."
      ],
      "date": "Jan 2025",
      "icon": "fa-brands fa-searchengin"
    },
    {
      title: "Continuous Evaluation System",
      tech: "OOP • C++",
      description: [
        "Developed a system to manage student marks with functionalities for adding, updating, and deleting records.",
        "Automated report generation for performance analysis, including marksheets and top-scorer lists for around 1,000 students."
      ],
      date: "Oct 2023",
      icon: "fa-solid fa-chart-line"
    }
    ,
  {
      title: "Maze Solver",
      tech: "Next.js • JavaScript",
      description: [
          "Developed a web-based visualization tool to solve mazes using pathfinding algorithms.",
          "Implemented algorithms like BFS and DFS to showcase optimal paths."
      ],
      date: "Oct 2024",
      icon: "fa-solid fa-puzzle-piece"
  },
  {
      title: "Sales Data Analysis",
      tech: "Python • Pandas • Matplotlib",
      description: [
          "Performed exploratory data analysis (EDA) on Diwali sales data to extract insights on customer behavior and sales trends.",
          "Analyzed gender, age, state-wise sales, and top-performing product categories to derive key business insights."
      ],
      date: "Sept 2024",
      icon: "fa-solid fa-chart-bar"
  },
  {
    title: "Sorting Visualizer",
    tech: "Python • Matplotlib",
    description: [
        "Developed an interactive visualization tool to demonstrate various sorting algorithms.",
        "Implemented Bubble Sort, Merge Sort, Quick Sort, and more with real-time graphical representation.",
        "Used Matplotlib for dynamic visual feedback on sorting operations."
    ],
    date: "June 2024",
    icon: "fa-solid fa-sort"
}

  
  ];
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4 mb-16">
        <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
          My <span className="text-violet-400">Projects</span>
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="p-4 sm:p-6 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center cursor-pointer group hover:border-violet-400 duration-200"
            onClick={() => setSelectedProject(project)}
          >
            <div className="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200">
              <i className={project.icon}></i>
            </div>
            
            <h3 className="font-medium text-xl sm:text-2xl md:text-3xl">
              {project.title}
            </h3>
            
            <p className="text-violet-400 text-sm">{project.tech}</p>
            
            <p className="line-clamp-3">{project.description[0]}</p>
            
            <div className="mt-auto pt-4 flex justify-between items-center">
              {/* <span className="text-slate-400 text-sm">Github</span> */}
              <span className="text-violet-400 hover:text-violet-300 transition-colors">
  <a href="https://github.com/radhipatel157" target="_blank" rel="noopener noreferrer">
    Github
  </a>
</span>

              <button className="text-violet-400 hover:text-violet-300 transition-colors">
                Read more →
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 max-w-3xl w-full rounded-lg p-6 relative max-h-[90vh] overflow-y-auto">
            <button 
              className="absolute top-4 right-4 text-2xl hover:text-violet-400 transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            
            <div className="text-center mb-6">
              <div className="bg-slate-800 inline-block p-4 rounded-full text-4xl text-violet-400 mb-4">
                <i className={selectedProject.icon}></i>
              </div>
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <p className="text-violet-400 mt-2">{selectedProject.tech}</p>
              <p className="text-slate-400 mt-1">{selectedProject.date}</p>
            </div>
            
            <div className="space-y-4">
              {selectedProject.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
    );
}
