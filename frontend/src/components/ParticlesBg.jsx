import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadStarsPreset } from 'tsparticles-preset-stars'

export default function ParticlesBg({ children }) {
  const particlesInit = useCallback(async engine => {
    await loadStarsPreset(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <div className="position-relative pb-5">
      <Particles
        className="position-absolute top-0 left-0 w-100 h-100"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        // options={{
        //   background: {
        //     color: {
        //       value: 'rgb(1,0,1)',
        //     },
        //   },
        //   fullScreen: {
        //     enable: false,
        //   },
        //   fpsLimit: 120,
        //   interactivity: {
        //     events: {
        //       onClick: {
        //         enable: true,
        //         mode: "push",
        //       },
        //       onHover: {
        //         enable: true,
        //         mode: "repulse",
        //       },
        //       resize: true,
        //     },
        //     modes: {
        //       push: {
        //         quantity: 4,
        //       },
        //       repulse: {
        //         distance: 200,
        //         duration: 0.4,
        //       },
        //     },
        //   },
        //   particles: {
        //     color: {
        //       value: "#ffffff",
        //     },
        //     links: {
        //       color: "#ffffff",
        //       distance: 150,
        //       enable: true,
        //       opacity: 0.5,
        //       width: 1,
        //     },
        //     move: {
        //       direction: "none",
        //       enable: true,
        //       outModes: {
        //         default: "bounce",
        //       },
        //       random: false,
        //       speed: 6,
        //       straight: false,
        //     },
        //     number: {
        //       density: {
        //         enable: true,
        //         area: 800,
        //       },
        //       value: 80,
        //     },
        //     opacity: {
        //       value: 0.5,
        //     },
        //     shape: {
        //       type: "circle",
        //     },
        //     size: {
        //       value: { min: 1, max: 5 },
        //     },
        //   },
        //   detectRetina: true,
        // }}
        options={{
          preset: "stars",
          background: {
            color: {
              // value: 'rgb(33,37,41)',
              value: 'rgb(1,0,1)',
            },
          },
          fullScreen: {
            enable: false,
          }
        }}
      />
      {children}
    </div>
  );
}
