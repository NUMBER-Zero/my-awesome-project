export const particlesConfig = {
  autoPlay: true,
  background: {
    color: { value: "transparent" }, // Changed to transparent
    opacity: 0
  },
  fullScreen: {
    enable: false, // MUST BE FALSE to contain particles
    zIndex: -1
  },
  particles: {
    color: { value: "#598eff" }, // Using your blue-50 color
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false
    },
    number: { 
      value: 60,
      density: { enable: true }
    },
    opacity: { value: 0.7 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
    links: {
      color: "#1c34ff", // Your blue-300
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1
    }
  },
  detectRetina: true
};