import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = ({ id, className, options }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const defaultOptions = useMemo(() => ({
    background: { color: "transparent" },
    particles: {
      color: { value: "#598eff" },
      links: { color: "#1c34ff" }
    }
  }), []);

  const mergedOptions = useMemo(() => ({
    ...defaultOptions,
    ...options
  }), [defaultOptions, options]);

  if (!init) return null;

  return (
    <Particles
      id={id}
      className={className}
      options={mergedOptions}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
    />
  );
};

export default ParticlesComponent;