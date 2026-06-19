import { motion } from "framer-motion";
import fax from "../assets/fax-image.png";
import Flip from "../assets/film.png";
import Lumina from "../assets/lumina.png";

const Projects = () => {
  const projects = [
    {
      title: "Fax Unique Wears",
      description: "A responsive e-commerce landing page for a luxury fashion brand featuring product showcases and seamless social media integration.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Font Awesome"],
      image: fax,
      link: "https://fax-lite-5cfa.vercel.app/",
      github: "https://github.com/Tosino2580/Fax-Lite",
      features: [
        "Fully responsive, mobile-first design.",
        "Interactive product showcases with clean layouts.",
        "Embedded location mapping & social feeds.",
      ],
    },
    {
      title: "FLIP (Film In The Park)",
      description: "A responsive and vibrant event website designed to promote outdoor movie experiences, showcasing schedules and details.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Font Awesome"],
      image: Flip,
      link: "https://www.filminthepark.com/",
      github: "https://github.com/Tosino2580/flip-website.git",
      features: [
        "Dynamic scheduler & film listings.",
        "High-contrast, user-friendly UI elements.",
        "Fluid responsive scaling for mobile viewports.",
      ],
    },
    {
      title: "Lumina AI Assistant",
      description: "An AI-powered conversational assistant similar to ChatGPT, allowing users to interact with models via natural language.",
      technologies: ["React", "Tailwind CSS", "Groq API", "JavaScript"],
      image: Lumina,
      link: "https://nupat-ai-clone.vercel.app/",
      github: "https://github.com/Tosino2580/Nupat-Ai-Clone",
      features: [
        "Natural language processing via API key integration.",
        "Sleek message history & state retention.",
        "Context-aware response handling.",
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 18 } },
  };

  return (
    <section id="projects" className="relative py-24 bg-[#0d0e12] border-t border-white/[0.04]">
      {/* Background Decorators */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            className="text-xs uppercase tracking-[0.2em] font-semibold text-indigo-400 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            My Showcase
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A curated selection of web products I have built, demonstrating frontend engineering skills, API integrations, and user experience patterns.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#0f1115]/50 border border-white/[0.06] hover:border-white/[0.12] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col group h-full"
            >
              {/* Project Image Frame */}
              <div className="relative aspect-video w-full overflow-hidden bg-black/40 border-b border-white/[0.06]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#08090a]/20 group-hover:bg-[#08090a]/0 transition-colors duration-500" />
              </div>

              {/* Project Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-gray-400 mt-2.5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights List */}
                  <ul className="space-y-1.5 mt-5">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-500 leading-normal">
                        <span className="text-indigo-400 font-bold">·</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-[10px] font-semibold text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions Row */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2.5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-gray-200 transition-colors shadow-lg shadow-white/[0.02]"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-gray-300 text-xs font-semibold hover:bg-white/[0.08] hover:text-white transition-all"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
