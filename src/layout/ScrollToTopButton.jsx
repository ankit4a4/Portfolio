import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const newParticles = Array.from({ length: 20 }).map((_, index) => ({
      id: index,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      delay: Math.random() * 0.2,
      color: getRandomColor(),
    }));
    setParticles(newParticles);

    setTimeout(() => setParticles([]), 1000);
  };

  const getRandomColor = () => {
    const colors = ["#60a5fa", "#38bdf8", "#f472b6", "#facc15", "#4ade80"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <>
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes bounce-up {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes particle {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--x), var(--y)) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>

      <div className="fixed bottom-6 right-6 z-[9999]">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          <button
            onClick={scrollToTop}
            className="relative cursor-pointer w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-full flex items-center justify-center overflow-hidden group"
          >
            <span
              className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 opacity-20"
              style={{ animation: "ping-slow 3s infinite" }}
            ></span>

            <span
              className="absolute inset-[2px] rounded-full border-2 border-dashed border-blue-400"
              style={{ animation: "spin-slow 8s linear infinite" }}
            ></span>

            <ArrowUp
              className="relative z-10 text-blue-700"
              style={{ animation: "bounce-up 1.2s infinite" }}
              size={26}
            />

            {particles.map((p) => (
              <span
                key={p.id}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: p.color,
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  animation: `particle 0.8s ease-out ${p.delay}s forwards`,
                  "--x": `${p.x}px`,
                  "--y": `${p.y}px`,
                }}
              />
            ))}
          </button>
        </div>
      </div>
    </>
  );
};

export default ScrollToTopButton;
