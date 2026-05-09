import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={useCallback(async () => {}, [])}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: { repulse: { distance: 180, duration: 0.4 } },
        },
        particles: {
          /* Navy-blue palette — change hex values here or map to a JS variable */
          color:  { value: "#3b82f6" },          /* --accent-400 */
          links:  { color: "#1a3258", distance: 150, enable: true, opacity: 0.4, width: 1 },
          collisions: { enable: false },
          move: {
            direction: "none", enable: true,
            outModes: { default: "bounce" },
            random: false, speed: 0.8, straight: false,
          },
          number: { density: { enable: true, area: 900 }, value: 70 },
          opacity: { value: 0.45 },
          shape:   { type: "circle" },
          size:    { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
