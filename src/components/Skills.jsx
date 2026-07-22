import React from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";
import {
  Webhook,
  Smartphone,
  ShieldCheck,
  Network,
  Wrench,
  SearchCode,
} from "lucide-react";

// Map skill name -> icon component
const skillIcons = {
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  React: SiReact,
  Tailwind: SiTailwindcss,
  "Node.js": SiNodedotjs,
  PHP: SiPhp,
  MySQL: SiMysql,
  "REST API": Webhook,
  Git: SiGit,
  GitHub: SiGithub,
  "Responsive Design": Smartphone,
  "Active Directory": ShieldCheck,
  Networking: Network,
  "Hardware Maintenance": Wrench,
  Troubleshooting: SearchCode,
};

const skillGroups = [
  {
    tag: "FD",
    title: "Frontend Development",
    accent: "from-sky-400/20",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
  },
  {
    tag: "BD",
    title: "Backend Development",
    accent: "from-emerald-400/20",
    skills: ["Node.js", "PHP", "MySQL"],
  },
  {
    tag: "TP",
    title: "Tools & Practices",
    accent: "from-amber-400/20",
    skills: ["REST API", "Git", "GitHub", "Responsive Design"],
  },
  {
    tag: "TC",
    title: "Technical",
    accent: "from-fuchsia-400/20",
    skills: [
      "Active Directory",
      "Networking",
      "Hardware Maintenance",
      "Troubleshooting",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-[#0F0F0F] text-[#F5F5F0] px-6 py-12 sm:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-baseline justify-between pb-6 mb-12 border-b border-white/10">
          <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl font-bold leading-none tracking-tight">
            Skills
          </h1>
          <span className="hidden font-mono text-xs tracking-widest uppercase sm:block text-white/40">
            Stack &amp; tools
          </span>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 gap-px overflow-hidden border bg-white/10 border-white/10 md:grid-cols-2 rounded-2xl">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={`relative flex flex-col gap-6 p-8 overflow-hidden transition-colors bg-[#0F0F0F] hover:bg-white/[0.03] sm:p-10`}
            >
              {/* Soft accent glow */}
              <div
                className={`absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl bg-gradient-to-br ${group.accent} to-transparent pointer-events-none`}
              />

              <div className="relative flex items-center gap-3">
                <span className="flex items-center justify-center font-mono text-xs font-semibold border rounded-full size-9 bg-white/5 border-white/10 text-white/60">
                  {group.tag}
                </span>
                <h2 className="font-['Space_Grotesk'] text-lg font-semibold text-white/90">
                  {group.title}
                </h2>
              </div>

              <div className="relative flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const Icon = skillIcons[skill];
                  return (
                    <span
                      key={skill}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm font-mono rounded-md bg-white/5 border border-white/10 text-white/70 transition-all hover:border-white/30 hover:text-white hover:bg-white/[0.08]"
                    >
                      {Icon && <Icon className="size-4 shrink-0" />}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;