import React, { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certificates", label: "Certificates" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Sidebar = ({ activeSection, setActiveSection }) => {
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
        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-black transition-transform duration-200 active:scale-90"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`transition-transform duration-300 ease-in-out ${open ? "rotate-90" : "rotate-0"}`}
          >
            <path
              d="M6 6l12 12M6 18L18 6"
              strokeLinecap="round"
              className={`transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`}
              style={{ transformOrigin: "center" }}
            />
            <path
              d="M3 6h18M3 12h18M3 18h18"
              strokeLinecap="round"
              className={`transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}
            />
          </svg>
        </button>
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
              {link.label}
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
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;