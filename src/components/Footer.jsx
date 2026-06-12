import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  const socialLinks = [
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
    {
      name: "Email",
      url: "mailto:olawalefemi041@gmail.com",
      icon: Mail,
    },
  ];

  const navItems = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="relative bg-[#08090a] border-t border-white/[0.04] py-16">
      {/* Subtle details */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-5 space-y-4 text-left">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer inline-block"
            >
              <span className="text-xl font-bold tracking-tight text-white hover:opacity-85 transition-opacity">
                Olawale.
              </span>
            </Link>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              Frontend engineer focused on translating designs into clean, accessible, and high-performance interactive interfaces.
            </p>
          </div>

          {/* Column 2: Navigation links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.15em] font-bold text-gray-400">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-sm text-gray-500 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Communication */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.15em] font-bold text-gray-400">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.02] border border-white/[0.06] text-gray-500 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all"
                  aria-label={link.name}
                >
                  <link.icon size={16} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="border-t border-white/[0.04] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-gray-600 font-mono">
            &copy; {new Date().getFullYear()} OLAWALE OLUWAFEMI. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 font-mono">
            Built with React &middot; Tailwind v4 &middot; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
