import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaReact, FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const icons = [
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  SiTailwindcss,
];

// Color palette for icons (vibrant but transparent)
const colors = [
  'rgba(97, 218, 251, 0.3)', // React blue
  'rgba(38, 132, 255, 0.25)', // Tailwind blue
  'rgba(240, 101, 72, 0.3)',  // HTML orange
  'rgba(247, 223, 30, 0.3)',  // JS yellow
  'rgba(34, 68, 34, 0.25)',   // Node green
  'rgba(240, 80, 80, 0.3)',   // Git red
  'rgba(60, 120, 255, 0.3)',  // CSS blue
];

const FloatingIcon = ({ Icon, style, animationDelay, color }) => (
  <Icon
    className="absolute pointer-events-none"
    style={{
      ...style,
      color,
      animation: `floatMove 12s ease-in-out infinite`,
      animationDelay,
      fontSize: style.fontSize,
      opacity: 0.25,
      userSelect: 'none',
    }}
  />
);

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out' });
  }, []);

  // 60 icons for better coverage (since height is large)
  const floatingIcons = Array.from({ length: 60 }).map((_, i) => {
    const Icon = icons[i % icons.length];
    const top = Math.random() * 320; // 0 to 320vh (full section height)
    const left = Math.random() * 100; // 0 to 100vw
    const delay = `${Math.random() * 12}s`;
    const size = 20 + Math.random() * 30; // 20px to 50px
    const color = colors[i % colors.length];

    return (
      <FloatingIcon
        key={i}
        Icon={Icon}
        animationDelay={delay}
        color={color}
        style={{
          top: `${top}vh`,
          left: `${left}vw`,
          fontSize: size,
        }}
      />
    );
  });

  return (
    <section className="relative bg-black text-gray-300 min-h-[320vh] px-6 md:px-24 py-20 font-sans overflow-hidden">

      {/* Floating Icons Background */}
      <div className="pointer-events-none absolute inset-0 overflow-visible">
        {floatingIcons}
      </div>

      <div className="relative max-w-5xl mx-auto space-y-32 z-10">

        {/* Main Heading */}
        <header data-aos="fade-up" className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            About Me
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            I am a passionate frontend developer with extensive experience in React and Tailwind CSS. My focus is on writing clean, maintainable code that provides great user experiences.
          </p>
        </header>

        {/* Professional Journey */}
        <section data-aos="fade-up" className="space-y-10">
          <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-3 mb-6">
            Professional Journey
          </h2>
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>
              I began my career with a comprehensive 1-year frontend development course where I mastered HTML, CSS, and JavaScript fundamentals, along with React and Tailwind CSS.
            </p>
            <p>
              After completing the course, I joined Webreate for a 6-month internship, working on several live React projects, focusing on component architecture, styling with Tailwind CSS, and responsive design.
            </p>
            <p>
              Following this, I worked at Moveexa for 6 months, where I honed my skills in React, Redux for state management, API integration, and dynamic UI updates.
            </p>
            <p>
              Currently, I work at RankMantra, contributing to projects involving React, Tailwind CSS, WordPress customizations, and Shopify frontend development.
            </p>
          </div>
        </section>

        {/* Core Skills */}
        <section data-aos="fade-up" className="space-y-14">
          <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-3 mb-8">
            Core Skills
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 list-disc list-inside text-gray-400 text-lg">
            <li>React.js (Hooks, Component Design, State Management)</li>
            <li>Tailwind CSS (Utility-First Styling, Responsive Design)</li>
            <li>JavaScript ES6+ (Modern Syntax and Features)</li>
            <li>Redux (State Management and Middleware)</li>
            <li>API Integration (RESTful and GraphQL)</li>
            <li>WordPress (Theme Customization and Development)</li>
          </ul>
        </section>

        {/* Work Experience */}
        <section data-aos="fade-up" className="space-y-20">
          <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-3 mb-10">
            Work Experience
          </h2>
          {[
            {
              company: 'Webreate (Internship)',
              duration: '6 months',
              details:
                'Worked intensively with React and Tailwind CSS on real-time projects. Focused on responsive UI and component reusability.',
            },
            {
              company: 'Moveexa',
              duration: '6 months',
              details:
                'Handled React applications with Redux integration and complex API interactions, ensuring performance optimization.',
            },
            {
              company: 'RankMantra (Current)',
              duration: 'Ongoing',
              details:
                'Contributing to frontend projects in React, Tailwind CSS, WordPress customizations, and Shopify frontend work, emphasizing maintainable code and scalability.',
            },
          ].map(({ company, duration, details }, idx) => (
            <article
              key={idx}
              className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-700 hover:border-indigo-600 transition-colors duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold text-white">{company}</h3>
                <time className="text-gray-500">{duration}</time>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">{details}</p>
            </article>
          ))}
        </section>

        {/* Vision & Goals */}
        <section data-aos="fade-up" className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-3 mb-6">
            Vision & Goals
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I am committed to constantly improving my frontend development skills, focusing on clean and maintainable code. I aim to build impactful, accessible web applications that provide excellent user experiences.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Long-term, I aspire to deepen my knowledge in full-stack development and contribute meaningfully to collaborative software projects.
          </p>
        </section>

      </div>

      {/* CSS Animation for floating colored icons */}
      <style jsx>{`
        @keyframes floatMove {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.25;
          }
          50% {
            transform: translate(20px, -20px);
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
