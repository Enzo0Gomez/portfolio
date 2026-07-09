import React from "react";

const skillGroups = [
    {
        tag: "FD",
        title: "Frontend Development",
        skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    },
    {
        tag: "BD",
        title: "Backend Development",
        skills: ["Node.js", "PHP", "MySQL"],
    },
    {
        tag: "TP",
        title: "Tools & Practices",
        skills: ["React.js", "REST API", "Git", "GitHub", "Responsive Design"],
    },
    {
        tag: "TC",
        title: "Technical",
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
        <div
            id="skills"
            className="bg-[#0F0F0F] text-[#F5F5F0] min-h-screen px-6 mt-10 sm:px-10 py-16"
        >
            <div className="max-w-8xl mx-auto mt-[5em]">
                <div className="flex items-baseline justify-between pb-6 mb-16 border-b border-white/10">
                    <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl font-bold leading-none tracking-tight">
                        Skills
                    </h1>
                    <span className="hidden font-mono text-xs tracking-widest uppercase sm:block text-white/40">
                        Stack &amp; tools
                    </span>
                </div>

                <div className="grid grid-cols-1 gap-px overflow-hidden border md:grid-cols-2 bg-white/10 border-white/10 rounded-2xl">
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className="flex flex-col gap-6 p-8 transition-colors bg-[#0F0F0F] hover:bg-white/[0.03] sm:p-10"
                        >
                            <div className="flex items-center gap-3">
                                <span className="flex items-center justify-center font-mono text-xs font-semibold border rounded-full size-9 bg-white/5 border-white/10 text-white/60">
                                    {group.tag}
                                </span>
                                <h2 className="font-['Space_Grotesk'] text-lg font-semibold text-white/90">
                                    {group.title}
                                </h2>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm font-mono rounded-md bg-white/5 border border-white/10 text-white/70 transition-colors hover:border-white/30 hover:text-white"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
