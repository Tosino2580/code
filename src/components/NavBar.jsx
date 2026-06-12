import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 py-4 md:py-6 pointer-events-none">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl rounded-full border transition-all duration-300 px-6 py-2.5 ${
          scrolled || isOpen
            ? "bg-brand-card/80 border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] backdrop-blur-md"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Brand Logo */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer flex items-center"
          onClick={() => {
            setActiveSection("home");
            setIsOpen(false);
          }}
        >
          <span className="text-lg font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
            Olawale.
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 cursor-pointer ${
                activeSection === item.id ? "text-white" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => {
                setActiveSection(item.id);
                setIsOpen(false);
              }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeNavBg"
                  className="absolute inset-0 bg-white/[0.08] rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-400 hover:text-white focus:outline-none p-1.5 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Dropdown Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 w-full bg-[#0d0f13] border border-white/[0.08] rounded-2xl p-4 shadow-xl flex flex-col gap-2 md:hidden"
            >
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-colors ${
                    activeSection === item.id
                      ? "bg-white/[0.08] text-white"
                      : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
