import { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const projects = [
  {
    title: "Ambulette Transport App",
    description: "A modern transportation service app built with React and Tailwind CSS, focusing on accessibility and real-time booking.",
    tech: ["React", "Tailwind", "API", "Slick Slider"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Sigma Scientific Website",
    description: "Corporate website for a testing lab with dynamic pages, SEO optimization, and advanced layout handling.",
    tech: ["Next.js", "Tailwind", "AOS", "Responsive Design"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Law Firm Landing Page",
    description: "Advanced multi-section landing page for a law firm with modern scroll animations and responsive layout.",
    tech: ["React", "Tailwind", "AOS", "Mobile First"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
];

export default function Project() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-32 px-4 md:px-8 lg:px-16  text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500 rounded-full filter blur-[100px] opacity-10"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 bg-cyan-900/30 text-cyan-400 rounded-full text-sm font-medium mb-6 border border-cyan-400/20"
          >
            PORTFOLIO
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Creative</span> Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-gray-400 text-lg"
          >
            Here are some of my selected projects that showcase my skills and experience in web development.
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative h-[400px] overflow-hidden rounded-2xl"
            >
              {/* Project image */}
              <div className="absolute inset-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              </div>

              {/* Project content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-cyan-900/30 text-cyan-300 text-xs rounded-full border border-cyan-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                </div>

                {/* Links */}
                <div className="flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all"
                      aria-label="GitHub repository"
                    >
                      <FaGithub className="text-gray-300 hover:text-cyan-400 transition" />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all"
                      aria-label="Live demo"
                    >
                      <FaExternalLinkAlt className="text-gray-300 hover:text-cyan-400 transition" />
                    </a>
                  </div>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                  >
                    View Project <FiArrowRight />
                  </a>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/30 rounded-2xl pointer-events-none transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          {/* <button className="px-8 py-3 bg-transparent text-cyan-400 font-medium rounded-full border border-cyan-400/30 hover:bg-cyan-400/10 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex items-center gap-2 mx-auto">
            View All Projects <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </button> */}
        </motion.div>
      </div>
    </section>
  );
}