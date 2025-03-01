"use client";

import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    
  }, []);

  return (
    <section id="home" className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14 relative mt-16">
      {/* Decorative background elements */}
      {/* <div className="absolute inset-0 overflow-hidden opacity-10 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div> */}
      
      <div className="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10 z-10">
        <h2 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
          Hi! I am <span className="text-violet-400">Radhi</span> Patel,
          <br />
          {mounted && (
            <TypeAnimation
              sequence={[
                'Software Developer.',
                1000,
                'Full Stack Developer.',
                1000,
                'AI Enthusiast.',
                1000,
               

              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-violet-400"
            />
          )}
        </h2>
        <p className="text-base sm:text-lg md:text-xl">
          My <span className="text-violet-400">favorite tech</span> includes Python, C++, JavaScript  
          (ReactJS & Django), TailwindCSS, Node.js + Express.js, and MySQL or MongoDB!  
          I also love working with Machine Learning, NLP, and Cloud Computing.
          
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <a 
            href="https://github.com/radhipatel157" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <i className="fa-brands fa-github text-violet-400"></i>
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/radhi-patel1507/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <i className="fa-brands fa-linkedin text-violet-400"></i>
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://drive.google.com/file/d/1j0v128nbWBuvbLH1_LToy2QbqvOcrTb-/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
          >
          
            <i className="fa-solid fa-file text-violet-400"></i>
            <span>Resume</span>
          </a>
         
        </div>
      </div>
      
      {/* <div className="flex items-center justify-center z-10">
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
          <div className="absolute inset-0 rounded-full bg-violet-500 blur-3xl opacity-20 animate-pulse"></div>
          <div className="relative h-full w-full flex items-center justify-center">
            <span className="text-8xl"></span>
          </div>
        </div>
      </div> */}
    </section>
);
}


