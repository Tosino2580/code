import { motion } from "framer-motion";
import reactIcon from "../assets/react-original.svg";
import jsIcon from "../assets/javascript-original.svg";
import htmlIcon from "../assets/html-original.svg";
import cssIcon from "../assets/css-original.svg";
import tailIcon from "../assets/tailwindcss-original.svg";
import nodeIcon from "../assets/node-original.png";
import gitIcon from "../assets/git-original.svg";
import githubIcon from "../assets/github-original.svg";
import tsIcon from "../assets/typescript-original.svg";
import nextIcon from "../assets/nextjs-original.svg";
import nupatLogo from "../assets/nupat.jpg";

const Skills = () => {
  const categories = [
    {
      title: "Frontend Core",
      skills: [
        { name: "JavaScript", icon: jsIcon, desc: "Modern ES6+, asynchronous flows & DOM logic" },
        { name: "TypeScript", icon: tsIcon, desc: "Static typing, modular structures & scalable code" },
        { name: "HTML5", icon: htmlIcon, desc: "Semantic structure, modern SEO & accessibility standards" },
        { name: "CSS3", icon: cssIcon, desc: "Responsive layout systems, flexbox/grid & animations" },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: reactIcon, desc: "Component architecture, React Hooks & state management" },
        { name: "Next.js", icon: nextIcon, desc: "Server-side rendering, routing & production optimization" },
        { name: "TailwindCSS", icon: tailIcon, desc: "Rapid utility-first custom layouts & responsive design" },
      ]
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "Git", icon: gitIcon, desc: "Local version control & granular repository branch tracking" },
        { name: "GitHub", icon: githubIcon, desc: "Remote collaborative platforms & deployment integrations" },
        { name: "Node.js", icon: nodeIcon, desc: "NPM dependency workflow & local server scripts" },
      ]
    }
  ];

  const certifications = [
    {
      name: "Front-end Web Development Graduate",
      issuer: "Nupat Code Camp",
      year: "2025",
      id: "NUP-CCP-24009006",
      link: "https://nupat.africa/NUP-CCP-24009006",
      image: nupatLogo,
      skills: ["HTML5 / CSS3", "JavaScript", "React", "Responsive UI"],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <section id="skills" className="relative py-24 bg-[#08090a] border-t border-white/[0.04]">
      {/* Subtle details */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            className="text-xs uppercase tracking-[0.2em] font-semibold text-indigo-400 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            My Expertise
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Technical Skills & Credentials
          </motion.h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-20">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-[#0f1115]/40 border border-white/[0.06] rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-lg font-bold text-white mb-5 pb-3 border-b border-white/[0.06] tracking-tight">
                {cat.title}
              </h3>
              
              <div className="space-y-4">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.01, x: 2 }}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/[0.04] transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center p-1.5 flex-shrink-0 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-colors">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-gray-500 leading-normal mt-1">
                        {skill.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credentials Section */}
        <div className="border-t border-white/[0.06] pt-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-8 text-center tracking-tight">
              Verified Achievement
            </h3>
            
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#0f1115]/50 border border-white/[0.06] hover:border-indigo-500/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center shadow-xl transition-all duration-300"
              >
                {/* Certificate Badge */}
                <div className="w-20 h-20 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center p-3 flex-shrink-0 relative">
                  <img
                    src={cert.image}
                    alt={cert.issuer}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none" />
                </div>

                {/* Details */}
                <div className="flex-grow text-center md:text-left space-y-3">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-white leading-snug">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-indigo-400 font-semibold mt-1">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-1.5 pt-1">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-[10px] font-semibold tracking-wide text-gray-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-gray-500 font-mono pt-1">
                    ID: {cert.id}
                  </p>
                </div>

                {/* Verification Action */}
                <div className="w-full md:w-auto flex-shrink-0 pt-2 md:pt-0">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-300 text-xs font-semibold hover:bg-white hover:text-black hover:border-white hover:shadow-[0_4px_15px_rgba(255,255,255,0.1)] transition-all duration-300"
                  >
                    Verify Credential
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
