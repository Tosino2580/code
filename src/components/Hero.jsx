import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight, Download, MapPin } from "lucide-react";
import Femi from "../assets/IMG_1239.webp";

const Hero = () => {
  const heroContent = {
    greeting: "Hello, I'm",
    name: "Olawale Oluwafemi",
    fullName: "Olawale, Oluwafemi Oluwatosin",
    role: "Frontend Engineer",
    location: "Lagos, Nigeria",
    description: "I build responsive, accessible, and high-performance interfaces. Translating design concepts into pixel-perfect, interactive web applications with a focus on clean code and user experience.",
    cta: "Download Resume",
    resumeUrl: "https://drive.google.com/file/d/1RJDRPEc94UIbIva-iOMgNfQbV01vfKBk/view?usp=sharing",
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/Tosino2580",
        icon: Github,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/olawale-oluwafemi-646528187",
        icon: Linkedin,
      },
    ],
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#08090a] overflow-hidden pt-28 pb-16"
      aria-label="Hero Introduction"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 z-0" />
      <div className="absolute inset-0 bg-radial-gradient z-0" />
      
      {/* Editorial Decorative Grid Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/[0.03] hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column: Content */}
        <motion.article
          className="space-y-8 lg:pr-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Status Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-gray-300 font-medium tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Available for Opportunities
          </motion.div>

          <div className="space-y-4">
            <motion.p
              className="text-sm uppercase tracking-[0.2em] font-semibold text-indigo-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {heroContent.greeting}
            </motion.p>
            
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {heroContent.name}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl font-medium text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {heroContent.role} <span className="text-gray-500 font-normal">based in</span> <span className="inline-flex items-center gap-1 text-gray-300"><MapPin size={16} className="text-indigo-400" /> {heroContent.location}</span>
            </motion.p>
          </div>

          <motion.p
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {heroContent.description}
          </motion.p>

          {/* Action Row */}
          <motion.div 
            className="flex flex-wrap gap-5 items-center pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {/* CTA Button */}
            <a
              href={heroContent.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.1)] group"
              aria-label="Download Resume"
            >
              {heroContent.cta}
              <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {heroContent.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.08] text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all"
                  aria-label={link.name}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.article>

        {/* Right Column: Portrait Image with Editorial Framework */}
        <motion.figure
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] group">
            {/* Background Decorative Frame Lines */}
            <div className="absolute -inset-4 rounded-3xl border border-white/[0.02] bg-grid-pattern pointer-events-none" />
            <div className="absolute -inset-1 rounded-2xl border border-white/[0.06] pointer-events-none" />
            <div className="absolute inset-0 rounded-2xl bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0d0f13] shadow-2xl">
              <img
                src={Femi}
                alt={heroContent.fullName}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] grayscale hover:grayscale-0"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090a]/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Technology Tags in Grid Frame */}
            <div className="absolute -bottom-4 right-4 flex gap-2">
              {["React", "TailwindCSS", "JavaScript"].map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-[#0f1115] border border-white/[0.08] text-xs font-semibold text-gray-300 shadow-xl"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.figure>
      </div>

      {/* Modern, elegant down-scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-10 cursor-pointer pointer-events-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold">Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-4 h-7 rounded-full border border-white/20 flex justify-center p-1"
        >
          <div className="w-1 h-1 bg-indigo-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
