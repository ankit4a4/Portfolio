import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const Skills = () => {
  const mySkills = [
    { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-[#000000]" /> },
  ];

  const floatingIcons = [
    { icon: <FaHtml5 />, size: 40, top: "10%", left: "15%", delay: "0s" },
    { icon: <FaCss3Alt />, size: 35, top: "25%", left: "80%", delay: "2s" },
    { icon: <FaJs />, size: 45, top: "60%", left: "10%", delay: "4s" },
    { icon: <FaReact />, size: 50, top: "40%", left: "50%", delay: "1s" },
    { icon: <SiRedux />, size: 40, top: "75%", left: "70%", delay: "3s" },
    { icon: <SiTailwindcss />, size: 40, top: "20%", left: "40%", delay: "5s" },
    { icon: <SiNextdotjs />, size: 35, top: "80%", left: "30%", delay: "1.5s" },
  ];

  const handleMouseMove = (e, index) => {
    const card = document.getElementById(`card-${index}`);
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -16;
    const rotateY = ((x - centerX) / centerX) * 16;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (index) => {
    const card = document.getElementById(`card-${index}`);
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-center py-20 px-6 overflow-hidden"
    >
      {/* Floating icons background */}
      {floatingIcons.map((item, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            top: item.top,
            left: item.left,
            fontSize: item.size,
            color: "rgba(64, 224, 208, 0.15)",
            animation: `floatAnimation 6s ease-in-out infinite`,
            animationDelay: item.delay,
            userSelect: "none",
            pointerEvents: "none",
            zIndex: 0,
          }}
          className="select-none pointer-events-none"
        >
          {item.icon}
        </div>
      ))}

      <h2 className="text-4xl font-extrabold text-teal-400 mb-6 text-center z-10 relative">
        Tools & Technologies I Use
      </h2>
      <p className="max-w-xl text-center text-gray-400 mb-16 z-10 relative">
        I use these technologies to build modern, responsive, and high-performing web applications.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-6xl z-10 relative">
        {mySkills.map((skill, index) => (
          <div
            key={index}
            id={`card-${index}`}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-shadow duration-300 ease-in-out shadow-md hover:shadow-lg hover:bg-teal-600/20"
            style={{ transformStyle: "preserve-3d", perspective: "800px" }}
          >
            <div className="text-5xl mb-4">{skill.icon}</div>
            <h3 className="text-white text-lg font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes floatAnimation {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
