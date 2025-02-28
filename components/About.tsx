// export default function About() {
//   return (
//     <section id="about" className="mt-32 py-20 scroll-mt-16 text-white">
//       <div className="container mx-auto px-6 lg:px-20">
//         {/* <h2 className="text-4xl font-extrabold mb-8 text-center text-violet-400">About Me</h2> */}
//         <div className="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4 mb-16">
//         <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
//           About <span className="text-violet-400">Me</span>
//         </h3>
//       </div>
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           <div className="lg:w-1/2 space-y-6">
//             <p className="text-lg leading-relaxed">
//               I am a <span className="font-semibold text-violet-400">Computer Science student</span> at Nirma University, minoring in Adaptive AI. Passionate about <span className="font-semibold text-violet-400">AI, ML, and software development</span>, I specialize in building intelligent applications that enhance user experience and business efficiency.
//             </p>
//             <p className="text-lg leading-relaxed">
//               With expertise in <span className="font-semibold text-violet-400">full-stack development, data modeling, and cloud computing</span>, I bring a unique blend of technical proficiency and problem-solving skills to create scalable and impactful solutions.
//             </p>
//             <p className="text-lg leading-relaxed">
//               I am constantly exploring new technologies and innovative approaches to <span className="font-semibold  text-violet-400">bridge the gap between AI and real-world applications</span>. My goal is to contribute to projects that make a difference in people's lives.
//             </p>
//           </div>

//           {/* Illustration Instead of Photo */}
//           <div className="lg:w-1/2 flex justify-center relative">
//             <div className="relative flex flex-col items-center p-8 bg-gray-800 rounded-3xl shadow-lg border text-violet-500">
//               <div className="text-9xl animate-bounce">👩‍💻</div> 
//               <p className="mt-4 text-xl font-semibold text-violet-400 text-center">Hello, I am Radhi Patel!</p>
              
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function About() {
  return (
    <section id="about" className=" py-20 scroll-mt-16 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        {/* <h2 className="text-4xl font-extrabold mb-8 text-center text-violet-400">About Me</h2> */}
        <div className="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4 mb-16">
          <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
            About <span className="text-violet-400">Me</span>
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <p className="text-lg leading-relaxed">
              I am a <span className="font-semibold text-violet-400">Computer Science student</span> at Nirma University, minoring in Adaptive AI. Passionate about <span className="font-semibold text-violet-400">AI, ML, and software development</span>, I specialize in building intelligent applications that enhance user experience and business efficiency.
            </p>
            <p className="text-lg leading-relaxed">
              With expertise in <span className="font-semibold text-violet-400">full-stack development, data modeling, and cloud computing</span>, I bring a unique blend of technical proficiency and problem-solving skills to create scalable and impactful solutions.
            </p>
            <p className="text-lg leading-relaxed">
              I am constantly exploring new technologies and innovative approaches to <span className="font-semibold  text-violet-400">bridge the gap between AI and real-world applications</span>. My goal is to contribute to projects that make a difference in people&#39;s lives.
            </p>
          </div>

          {/* Illustration Instead of Photo */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative flex flex-col items-center p-8 bg-gray-800 rounded-3xl shadow-lg border text-violet-500">
              <div className="text-9xl animate-bounce">👩‍💻</div> 
              <p className="mt-4 text-xl font-semibold text-violet-400 text-center">Hello, I am Radhi Patel!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
