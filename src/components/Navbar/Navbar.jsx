import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBriefcase,
  faCertificate,
  faEnvelope,
  faGraduationCap,
  faHouse,
  faImages,
  faLayerGroup,
  faMoon,
  faSun,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { href: "#home", label: "Home", icon: faHouse },
  { href: "#about", label: "About", icon: faUser },
  { href: "#experience", label: "Experience", icon: faBriefcase },
  { href: "#education", label: "Education", icon: faGraduationCap },
  { href: "#skills", label: "Skills", icon: faLayerGroup },
  { href: "#gallery", label: "Gallery", icon: faImages },
  { href: "#certificates", label: "Certificates", icon: faCertificate },
  { href: "#contact", label: "Contact", icon: faEnvelope },
];

const Sidebar = ({ activeSection, setActiveSection, theme, toggleTheme }) => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    setActiveSection(href.replace("#", ""));
  };

  const isActive = (href) => activeSection === href.replace("#", "");

  return (
    <>
      <style>{`
        @keyframes drg-fade-in-up {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .drg-mobile-link {
          animation: drg-fade-in-up 0.28s ease-out both;
        }
      `}</style>

      <div className="flex items-center justify-between px-6 py-4 bg-yellow-400 shadow-sm md:hidden">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="text-xl font-extrabold tracking-tight text-black transition-transform duration-200 hover:scale-105"
        >
          DRG
        </a>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-black/10 text-black transition-all duration-200 hover:bg-black hover:text-yellow-400 active:scale-90"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-black transition-transform duration-200 active:scale-90"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} className="text-2xl" />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-yellow-400 transition-all duration-300 ease-in-out md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-2">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`drg-mobile-link px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 hover:translate-x-1 ${
                isActive(link.href)
                  ? "bg-black/10 text-black"
                  : "text-black/80 hover:text-black hover:bg-black/10"
              }`}
              style={open ? { animationDelay: `${i * 40}ms` } : undefined}
            >
              <span className="inline-flex items-center gap-3">
                <FontAwesomeIcon icon={link.icon} className="w-4" />
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      <nav className="sticky top-0 hidden h-screen bg-yellow-400 shadow-sm md:flex md:flex-col md:w-56">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="px-6 py-6 text-xl font-extrabold tracking-tight text-black transition-transform duration-200 hover:scale-105"
        >
          DRG
        </a>

        <div className="flex flex-col gap-1 px-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative border-l-4 px-4 py-3 text-sm font-medium rounded-md transition-all duration-300 ease-in-out hover:translate-x-1 ${
                isActive(link.href)
                  ? "border-black bg-black/10 text-black"
                  : "border-transparent text-black/80 hover:text-black hover:bg-black/10"
              }`}
            >
              <span className="inline-flex items-center gap-3">
                <FontAwesomeIcon icon={link.icon} className="w-4" />
                {link.label}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-auto px-3 pb-5">
          <button
            onClick={toggleTheme}
            className="flex w-full items-center justify-between rounded-md border border-black/15 bg-black/10 px-4 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-black hover:text-yellow-400"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span className="inline-flex items-center gap-3">
              <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} className="w-4" />
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
            <span className="h-5 w-9 rounded-full border border-black/20 bg-white/35 p-0.5">
              <span
                className={`block h-4 w-4 rounded-full bg-black transition-transform duration-200 ${
                  theme === "light" ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
