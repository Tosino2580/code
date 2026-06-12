import { motion } from 'framer-motion';

const Knowledge = () => {
  const experiences = [
    {
      role: "Front-end Web Developer / Facilitator",
      company: "Nupat Technologies",
      period: "Oct 2024 - Present",
      highlights: [
        "HTML/CSS and JavaScript Facilitator: Mentoring and guiding students in frontend fundamentals.",
        "Designed and developed responsive, high-performance web interfaces using React, Next.js, TypeScript, and TailwindCSS.",
        "Communicated with stakeholders to translate business requirements into clean, technical solutions, maintaining transparent delivery timelines.",
        "Collaborated with cross-functional team members to share responsibilities and collectively deliver high-quality web outcomes.",
        "Converted Figma designs into pixel-perfect, responsive web views for production landing pages and dashboards, prioritizing usability.",
      ],
      skills: [
        "React",
        "TailwindCSS",
        "JavaScript",
        "Responsive Design",
        "Figma to Code",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-24 bg-[#0d0e12] border-t border-white/[0.04]">
      {/* Background Decorator */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <motion.p
            className="text-xs uppercase tracking-[0.2em] font-semibold text-indigo-400 mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My Journey
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Professional Experience
          </motion.h2>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-white/[0.08] ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-[#08090a] border border-indigo-400 flex items-center justify-center transition-all group-hover:scale-110 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="p-6 md:p-8 bg-[#0f1115]/50 border border-white/[0.06] rounded-2xl shadow-xl hover:border-white/[0.1] hover:bg-[#0f1115]/75 transition-all duration-300">
                
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-indigo-400 font-semibold tracking-wide mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-gray-400 self-start md:self-center">
                    {exp.period}
                  </span>
                </div>

                {/* Bullet Highlights */}
                <ul className="space-y-4 mb-8">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400/60 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills/Technologies Utilized */}
                <div className="pt-6 border-t border-white/[0.06]">
                  <p className="text-xs uppercase tracking-[0.15em] font-semibold text-gray-500 mb-3">
                    Technologies & Skills
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, sIndex) => (
                      <span
                        key={sIndex}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-medium text-gray-300 hover:bg-indigo-500/10 hover:text-indigo-300 hover:border-indigo-500/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Knowledge;
