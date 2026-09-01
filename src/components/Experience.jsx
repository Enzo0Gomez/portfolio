import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
    faCalendarDays,
    faCode,
    faDatabase,
    faLaptopCode,
    faMobileScreenButton,
    faNetworkWired,
    faServer,
    faShieldHalved,
    faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons';
import { faAndroid, faDocker, faGithub, faLinux, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import blackfiberDark from '../assets/pictures/BlackFiber_Logo_darktheme.png';
import blackfiberLight from '../assets/pictures/BlackFiber_Logo_lighttheme.png';
import DNA from '../assets/pictures/DNA.png';

const experiences = [
    {
        company: 'DNA',
        logo: DNA,
        role: 'Full Stack Developer',
        period: 'July 27 - Present',
        summary: 'Developed and maintained features for LEVEL, a relationship and dating platform, across web and mobile experiences.',
        groups: [
            {
                label: 'Frontend & Mobile',
                icon: faMobileScreenButton,
                tags: [
                    { name: 'React Native', icon: faReact },
                    { name: 'React.js', icon: faReact },
                    { name: 'TypeScript', icon: faCode },
                    { name: 'Figma to Code', icon: faLaptopCode },
                    { name: 'Responsive UI', icon: faMobileScreenButton },
                    { name: 'Android Studio', icon: faAndroid },
                ],
            },
            {
                label: 'Backend & Tools',
                icon: faServer,
                tags: [
                    { name: 'Supabase', icon: faDatabase },
                    { name: 'Git/GitHub', icon: faGithub },
                    { name: 'REST APIs', icon: faCode },
                    { name: 'Debugging', icon: faScrewdriverWrench },
                    { name: 'Version Control', icon: faGithub },
                ],
            },
        ],
        highlights: [
            'Built and enhanced React Native mobile screens from Figma designs and project requirements.',
            'Integrated frontend features with Supabase, REST APIs, and database-backed workflows.',
            'Tested mobile features using Android Studio, emulators, and physical Android devices.',
            'Handled feature branches, merges, debugging, responsive fixes, and release preparation with the team.',
        ],
    },
    {
        company: 'BlackFiber Communications Corporation',
        logo: {
            dark: blackfiberDark,
            light: blackfiberLight,
        },
        role: 'Internship',
        period: 'Feb 9 - April 24, 2026',
        summary: 'Completed a 400-hour internship focused on IT support, networking, systems, and technical troubleshooting.',
        groups: [
            {
                label: 'Networking',
                icon: faNetworkWired,
                tags: [
                    { name: 'VLAN Configuration', icon: faNetworkWired },
                    { name: 'IP Management', icon: faServer },
                    { name: 'Cisco Networking', icon: faNetworkWired },
                    { name: 'Hardware Diagnostics', icon: faScrewdriverWrench },
                    { name: 'OS Installation', icon: faLaptopCode },
                ],
            },
            {
                label: 'System Department',
                icon: faShieldHalved,
                tags: [
                    { name: 'Odoo ERP', icon: faDatabase },
                    { name: 'Data Management', icon: faDatabase },
                    { name: 'Python', icon: faPython },
                    { name: 'Docker', icon: faDocker },
                    { name: 'Linux Ubuntu', icon: faLinux },
                ],
            },
        ],
        highlights: [
            'Configured VLANs, managed IP addresses, supported Cisco networking tasks, and performed hardware diagnostics.',
            'Worked with Odoo ERP, Docker, Linux Ubuntu, data management, and basic Python and TypeScript concepts.',
            'Strengthened documentation, cybersecurity awareness, system administration, communication, and teamwork skills.',
        ],
    },
];

function TagList({ group }) {
    return (
        <div className="p-5 transition-colors border rounded-lg border-white/10 bg-white/[0.025] hover:border-yellow-400/40">
            <p className="flex items-center gap-2 mb-4 text-[12px] font-medium tracking-widest text-white uppercase">
                <FontAwesomeIcon icon={group.icon} className="text-yellow-400" />
                {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                    <span key={tag.name} className="inline-flex items-center gap-2 px-3 py-1.5 text-xs border rounded-md bg-white/5 border-white/10 text-white/70">
                        <FontAwesomeIcon icon={tag.icon} className="w-3 text-yellow-400/80" />
                        {tag.name}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function Experience({ theme = 'dark' }) {
    return (
        <section id="experience" className="bg-[#0F0F0F] text-[#F5F5F0] min-h-screen px-6 sm:px-10 py-16">
            <div className="flex items-end justify-between pb-10 mb-12 border-b border-white/10">
                <div>
                    <p className="flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-yellow-400">
                        <FontAwesomeIcon icon={faBriefcase} />
                        Professional journey
                    </p>
                    <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl font-bold leading-none">
                        Experience
                    </h1>
                </div>
            </div>

            <div className="relative mx-auto max-w-6xl">
                <div className="absolute hidden top-4 bottom-4 left-6 w-px bg-white/10 md:block" />

                <div className="space-y-8">
                    {experiences.map((item) => (
                        <article key={item.company} className="relative grid grid-cols-1 gap-5 md:grid-cols-[3rem_1fr]">
                            <div className="z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-yellow-400/40 bg-[#0F0F0F] text-yellow-400">
                                <FontAwesomeIcon icon={faBriefcase} />
                            </div>

                            <div className="overflow-hidden transition-colors border rounded-xl border-white/10 bg-white/[0.02] hover:border-yellow-400/40">
                                <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-[220px_1fr] sm:p-8">
                                    <div className="flex flex-col items-start gap-5">
                                        <div className="flex items-center justify-center w-full min-h-32 rounded-lg border border-white/10 bg-[#151515] p-5">
                                            <img
                                                src={typeof item.logo === 'string' ? item.logo : item.logo[theme]}
                                                alt={`${item.company} logo`}
                                                className="max-h-24 w-auto object-contain opacity-95"
                                            />
                                        </div>
                                        <div>
                                            <p className="mb-2 text-xs font-semibold tracking-widest uppercase text-yellow-400">
                                                {item.company}
                                            </p>
                                            <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white">
                                                {item.role}
                                            </h2>
                                            <p className="flex items-center gap-2 mt-3 text-sm text-white/55">
                                                <FontAwesomeIcon icon={faCalendarDays} className="text-yellow-400/80" />
                                                {item.period}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-5">
                                        <p className="text-sm leading-7 text-white/75">
                                            {item.summary}
                                        </p>

                                        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                                            {item.groups.map((group) => (
                                                <TagList key={group.label} group={group} />
                                            ))}
                                        </div>

                                        <ul className="grid gap-3 pt-2">
                                            {item.highlights.map((highlight) => (
                                                <li key={highlight} className="flex gap-3 text-sm leading-7 text-white/70">
                                                    <span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-yellow-400/40 text-[10px] text-yellow-400">
                                                        <FontAwesomeIcon icon={faCode} />
                                                    </span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
