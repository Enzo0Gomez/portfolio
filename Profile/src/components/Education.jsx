import React from 'react';

const education = [
    {
        college_school: 'University of Rizal System',
        shs_school: 'STI College',
        college_campus: 'Binangonan Campus',
        shs_campus: 'Tanay Campus',
        degree: 'Bachelor of Science in Information Technology',
        shs_strands: 'MAWD (Mobile App Development with Web Development)',
        year: '2022 – 2026',
        shs_year: '2020 – 2022',
        capstone: 'MANHIS: MATERNAL AND NEONATAL HEALTHCARE INFORMATION SYSTEM',
        techs: [
            { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
            { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
            { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        ],
    },
];

export default function Education() {
    return (
        <div id="education" className="bg-[#0F0F0F] text-[#F5F5F0] min-h-screen px-10 py-10 ">

            <div className="flex items-end justify-between pb-10 mb-10 border-b border-white/10">
                <div>

                    <h1 className="font-['Space_Grotesk'] text-6xl font-bold leading-none">
                        Education
                    </h1>
                </div>

            </div>
            <div className=''>
                <div className="flex flex-col gap-6 ">
                    {education.map((item, index) => (
                        <div
                            key={index}
                            className="border border-white/10 hover:border-yellow-400/40 rounded-2xl p-6 transition-all duration-300 bg-white/[0.02]"
                        >
                            <div className="flex flex-wrap items-start justify-between gap-6">
                                <div className="flex-1 min-w-[260px]">
                                    <span className="inline-block text-xs font-semibold font-['Space_Grotesk'] tracking-widest uppercase text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full mb-4">
                                        {item.year}
                                    </span>
                                    <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white leading-snug mb-1">
                                        {item.college_school}
                                    </h2>
                                    <p className="text-gray-500 text-sm font-['Space_Grotesk'] mb-1">
                                        {item.college_campus}
                                    </p>
                                    <p className="text-yellow-400/80 text-sm font-['Space_Grotesk'] font-medium">
                                        {item.degree}
                                    </p>
                                </div>

                            </div>

                            <div className="my-6 border-t border-white/10" />

                            <div className="mb-6">
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 font-['Space_Grotesk'] mb-2">
                                    Capstone Project
                                </p>
                                <p className="text-gray-300 text-sm leading-relaxed font-['Space_Grotesk']">
                                    {item.capstone}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 font-['Space_Grotesk'] mb-3">
                                    Programming Languages Used
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {item.techs.map((tech, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2 px-3 py-2 transition-all duration-150 border rounded-lg bg-white/5 border-white/10 hover:border-yellow-400/30"
                                        >

                                            <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                                            <span className="text-xs text-gray-300 font-['Space_Grotesk']">
                                                {tech.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-6 mt-[3em]">
                    {education.map((item, index) => (
                        <div
                            key={index}
                            className="border border-white/10 hover:border-yellow-400/40 rounded-2xl p-6 transition-all duration-300 bg-white/[0.02]"
                        >
                            <div className="flex flex-wrap items-start justify-between gap-6">
                                <div className="flex-1 min-w-[260px]">
                                    <span className="inline-block text-xs font-semibold font-['Space_Grotesk'] tracking-widest uppercase text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full mb-4">
                                        {item.shs_year}
                                    </span>
                                    <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white leading-snug mb-1">
                                        {item.shs_school}
                                    </h2>
                                    <p className="text-gray-500 text-sm font-['Space_Grotesk'] mb-1">
                                        {item.shs_campus}
                                    </p>
                                    <p className="text-yellow-400/80 text-sm font-['Space_Grotesk'] font-medium">
                                        {item.shs_strands}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}