// "use client";

// import { useCallback } from "react";
// import Particles from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// import { Engine } from "@tsparticles/engine";

// const ParticlesBackground = () => {
//   const particlesInit = useCallback(async (engine: Engine) => {
//     await loadSlim(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: { enable: true },
//         particles: {
//           number: { value: 50 },
//           move: { enable: true, speed: 2 },
//           size: { value: 3 },
//           opacity: { value: 0.7 },
//           links: { enable: true, color: "#ffffff", distance: 150 },
//         },
//       }}
//     />
//   );
// };

// export default ParticlesBackground;