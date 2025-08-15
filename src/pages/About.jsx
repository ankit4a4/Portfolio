import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaReact, FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { motion, useScroll, useTransform } from 'framer-motion';
import img from "../assets/images/continue.webp";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -600]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out-back',
      mirror: true
    });
  }, []);

  const skills = [
    { icon: <FaReact className="text-4xl text-cyan-400" />, name: "React.js", level: 95 },
    { icon: <SiNextdotjs className="text-4xl text-white" />, name: "Next.js", level: 85 },
    { icon: <FaJsSquare className="text-4xl text-yellow-400" />, name: "JavaScript", level: 90 },
    { icon: <SiTailwindcss className="text-4xl text-cyan-500" />, name: "Tailwind CSS", level: 95 },
    { icon: <FaHtml5 className="text-4xl text-orange-500" />, name: "HTML5", level: 98 },
    { icon: <FaCss3Alt className="text-4xl text-blue-500" />, name: "CSS3", level: 95 },
  ];

  const experiences = [
    {
      company: 'Webreate (Internship)',
      duration: '6 months',
      details: 'Worked intensively with React and Tailwind CSS on real-time projects. Focused on responsive UI and component reusability.',
      tags: ['React', 'Tailwind CSS', 'Responsive Design'],
      year: 'March 2024 - August 2024.'
    },
    {
      company: 'Moveexa',
      duration: '6 months',
      details: 'Handled React applications with Redux integration and complex API interactions, ensuring performance optimization.',
      tags: ['Redux', 'API Integration', 'Performance'],
      year: '01/09/2024 to 28/02/2025'
    },
    {
      company: 'RankMantra (Current)',
      duration: 'Ongoing',
      details: 'Contributing to frontend projects in React, Tailwind CSS, WordPress customizations, and Shopify frontend work.',
      tags: ['WordPress', 'Shopify', 'React' , 'Next.js'],
      year: '26th March 2025-Present'
    },
  ];

  return (
    <section ref={ref} className="relative text-gray-300 min-h-screen px-4 md:px-12 lg:px-24 py-10 font-sans overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-purple-900 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-2/3 right-20 w-60 h-60 bg-cyan-900 rounded-full filter blur-3xl opacity-20"></div>
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-900 rounded-full filter blur-3xl opacity-10"></div>
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        <div className="absolute bottom-20 left-1/4 w-60 h-60 bg-indigo-900 rounded-full filter blur-3xl opacity-20"></div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto space-y-32 z-10">
        {/* Hero Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-col lg:flex-row items-center justify-between gap-12 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50 shadow-2xl"
        >
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-sm font-medium mb-4 border border-cyan-400/20">
              Frontend Developer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              I specialize in building responsive, performant, and accessible web applications with React and modern frontend technologies. My focus is on creating seamless user experiences through clean, maintainable code.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'].map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-gray-800/80 text-sm rounded-full border border-gray-700 text-cyan-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <img
                src={img}
                alt="Developer working"
                className="relative w-full h-auto shadow-md shadow-white rounded-xl object-cover transform transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Professional Journey */}
        <section
          data-aos="fade-up"
          data-aos-delay="200"
          className="md:space-y-12"
        >
          <div className="flex items-center gap-4 md:mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              My Journey
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-cyan-500 to-blue-600"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                From Learning to <span className="text-cyan-400">Building</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                My journey began with a comprehensive 1-year frontend development course where I mastered HTML, CSS, and JavaScript fundamentals, along with React and Tailwind CSS.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Professional <span className="text-blue-400">Growth</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                From internships to full-time roles, each experience has shaped my approach to development, emphasizing clean code, performance optimization, and user-centric design.
              </p>
            </div>
          </div>

          <div className="relative mt-12">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gray-700 via-cyan-500 to-gray-700"></div>

            {[
              {
                title: "Education",
                description: "Completed 1-year intensive frontend development course",
                year: '2023-24 1 year.'
              },
              {
                title: "First Internship",
                description: "Joined Webreate for 6-month internship",
                year: 'March 2024 - August 2024'
              },
              {
                title: "Professional Role",
                description: "Worked at Moveexa for 6 months",
                year: '01/09/2024 to 28/02/2025'
              },
              {
                title: "Current Position : Frontend Developer",
                description: "Working at RankMantra",
                year: '26th March 2025-Present'

              }
            ].map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={100 * index}
                className="relative pl-16 pb-12 group"
              >
                <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-gray-800 border-2 border-cyan-500 flex items-center justify-center text-white font-bold z-10">
                  {index + 1}
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg group-hover:border-cyan-500/50 transition-all duration-300">
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 mb-2">{item.description}</p>
                  <span className="inline-block px-3 py-1 bg-gray-700/50 text-sm rounded-full text-cyan-300">
                    {item.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section
          data-aos="fade-up"
          className="md:space-y-12"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400">
              I've worked with a variety of technologies in the web development world. Here are my core competencies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3  gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-400 mt-2">{skill.level}%</span>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section
          data-aos="fade-up"
          className="space-y-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Work Experience
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-blue-500 to-indigo-600"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">{exp.company}</h3>
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium border border-blue-400/20">
                        {exp.duration}
                      </span>
                      <span className="text-gray-500">{exp.year}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6">{exp.details}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-700/50 text-sm rounded-full border border-gray-600 text-blue-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section
          data-aos="fade-up"
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Development</span> Philosophy
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-cyan-900/30 rounded-lg text-cyan-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Performance First</h3>
                    <p className="text-gray-400">I prioritize efficient, optimized code that delivers fast loading times and smooth interactions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-blue-900/30 rounded-lg text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Continuous Learning</h3>
                    <p className="text-gray-400">The tech landscape evolves rapidly, and I'm committed to staying current with emerging technologies and best practices.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-indigo-900/30 rounded-lg text-indigo-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Clean & Maintainable</h3>
                    <p className="text-gray-400">I write code that's not just functional but also clean, well-structured, and easy to maintain.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[430px] md:min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-xl border border-gray-700/50 p-4">
                <div className="relative w-full h-full">
                  <div className="absolute top-4 left-4 right-4 bottom-4 border border-gray-700/50 rounded-md p-4">
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="font-mono text-sm space-y-2">
                      <div className="text-gray-400"><span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span> = <span className="text-yellow-300">{'{'}</span></div>
                      <div className="ml-4 text-gray-400"><span className="text-cyan-400">name</span>: <span className="text-green-400">'Ankit Singh'</span>,</div>
                      <div className="ml-4 text-gray-400"><span className="text-cyan-400">role</span>: <span className="text-green-400">'Frontend Developer'</span>,</div>
                      <div className="ml-4 text-gray-400"><span className="text-cyan-400">skills</span>: [</div>
                      <div className="ml-8 text-gray-400"><span className="text-green-400">'React'</span>,</div>
                      <div className="ml-8 text-gray-400"><span className="text-green-400">'Next.js'</span>,</div>
                      <div className="ml-8 text-gray-400"><span className="text-green-400">'Tailwind CSS'</span></div>
                      <div className="ml-4 text-gray-400">],</div>
                      <div className="ml-4 text-gray-400"><span className="text-cyan-400">philosophy</span>: <span className="text-green-400">'Build with purpose'</span></div>
                      <div className="text-gray-400"><span className="text-yellow-300">{'}'}</span>;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
       
      </div>
    </section>
  );
};

export default About;