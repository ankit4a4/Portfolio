import { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Ambulette Transport App",
    description:
      "A modern transportation service app built with React and Tailwind CSS, focusing on accessibility and real-time booking.",
    tech: ["React", "Tailwind", "API", "Slick Slider"],
    github: "#",
    demo: "#",
  },
  {
    title: "Sigma Scientific Website",
    description:
      "Corporate website for a testing lab with dynamic pages, SEO optimization, and advanced layout handling.",
    tech: ["Next.js", "Tailwind", "AOS", "Responsive Design"],
    github: "#",
    demo: "#",
  },
  {
    title: "Law Firm Landing Page",
    description:
      "Advanced multi-section landing page for a law firm with modern scroll animations and responsive layout.",
    tech: ["React", "Tailwind", "AOS", "Mobile First"],
    github: "#",
    demo: "#",
  },
];

export default function Project() {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (sectionRef.current) {
        setSize({
          width: sectionRef.current.clientWidth,
          height: sectionRef.current.clientHeight,
        });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (!size.width || !size.height) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = size.width;
    canvas.height = size.height;

    let particles = [];

    // Particle factory with randomized start positions and directions
    const createParticle = () => ({
      x: Math.random() * size.width,
      y: Math.random() * size.height,
      radius: Math.random() * 3 + 1.5,
      speedX: 0.3 + Math.random() * 0.7, // horizontal speed (rightwards)
      speedY: 0.5 + Math.random() * 1.2, // vertical speed (downwards)
      sway: Math.random() * 0.05 + 0.02, // side to side sway speed
      swayPhase: Math.random() * Math.PI * 2, // initial phase for sway
    });

    for (let i = 0; i < 60; i++) {
      particles.push(createParticle());
    }

    let animationFrameId;

    const draw = () => {
      ctx.clearRect(0, 0, size.width, size.height);

      particles.forEach((p, idx) => {
        // Glow gradient
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius * 6
        );
        gradient.addColorStop(0, "rgba(255, 140, 0, 0.9)");
        gradient.addColorStop(0.5, "rgba(255, 69, 0, 0.6)");
        gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.shadowColor = "rgba(255, 69, 0, 0.8)";
        ctx.shadowBlur = 15;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Move particle with sway effect for natural curve
        p.x += p.speedX + Math.sin(p.swayPhase) * p.sway * 20;
        p.y += p.speedY;
        p.swayPhase += 0.05;

        // Respawn if out of bounds
        if (p.x > size.width + 20 || p.y > size.height + 20) {
          particles[idx] = createParticle();
          // start roughly from left or top-left area but randomly scattered
          particles[idx].x = Math.random() * size.width * 0.3;
          particles[idx].y = -10 - Math.random() * 30;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationFrameId);
  }, [size]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 px-4 bg-black text-white overflow-hidden rounded-lg"
      style={{ minHeight: "600px" }}
    >
      {/* Fireball canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2
          className="text-4xl font-bold text-center text-cyan-400 mb-16"
          data-aos="zoom-in"
        >
          🚀 My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 overflow-hidden p-6 flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div>
                <h3 className="text-xl font-semibold text-cyan-300 group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mt-2">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-600/20 text-cyan-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition text-lg"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition text-lg"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
