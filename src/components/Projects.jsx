import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowUpRightFromSquare,
    faBriefcase,
    faCode,
    faDatabase,
    faLayerGroup,
    faMobileScreenButton,
    faNetworkWired,
    faServer,
} from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import levelProject from '../assets/pictures/Project_DNA/Project_website_on_LEVEL.png';
import levelAppProject from '../assets/pictures/Project_DNA/level-app.png';
import posProject from '../assets/pictures/Project_DNA/pos.png';
import internshipProject from '../assets/pictures/my_internship/shared image.jpg';


const projects = [
    {
        title: 'LEVEL Platform',
        category: 'Web Development',
        image: levelProject,
        summary: 'Feature development work for a relationship and dating platform, focused on clean user interfaces and connected product workflows.',
        link: 'https://level-match.com/',
        linkLabel: 'Visit project',
        tags: [
            { label: 'React.js', icon: faReact },
            { label: 'Frontend UI', icon: faMobileScreenButton },
            { label: 'APIs', icon: faServer },
        ],
    },
    {
        title: 'LEVEL App',
        category: 'Mobile Development',
        image: levelAppProject,
        summary: 'Mobile experience for LEVEL, a relationship and dating platform, built around an intuitive and connected user journey.',
        link: 'https://play.google.com/store/apps/details?id=com.level_app',
        linkLabel: 'View on Google Play',
        tags: [
            { label: 'Mobile App', icon: faMobileScreenButton },
            { label: 'Product UI', icon: faLayerGroup },
            { label: 'APIs', icon: faServer },
        ],
    },
    {
        title: 'Point of Sale System',
        category: 'Web Development',
        image: posProject,
        summary: 'A point-of-sale system interface designed to make everyday sales transactions and product management simple and organized.',
        tags: [
            { label: 'POS System', icon: faDatabase },
            { label: 'Frontend UI', icon: faMobileScreenButton },
            { label: 'Product Management', icon: faLayerGroup },
        ],
    },
    {
        title: 'OJT Internship Report',
        category: 'Internship',
        image: internshipProject,
        summary: 'A static internship report for my Black Fiber OJT experience, including department work, mentors, certificates, and training highlights.',
        link: `${import.meta.env.BASE_URL}internship/index.html`,
        tags: [
            { label: 'HTML', icon: faCode },
            { label: 'Networking', icon: faNetworkWired },
            { label: 'Systems', icon: faDatabase },
        ],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen bg-[#0F0F0F] px-6 py-16 text-[#F5F5F0] sm:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-end justify-between pb-10 mb-12 border-b border-white/10">
                    <div>
                        <p className="flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-yellow-400">
                            <FontAwesomeIcon icon={faBriefcase} />
                            Selected work
                        </p>
                        <h1 className="font-['Space_Grotesk'] text-4xl font-bold leading-none sm:text-5xl md:text-6xl">
                            Projects
                        </h1>
                    </div>
                    <span className="hidden items-center gap-2 text-xs uppercase tracking-widest text-white/40 sm:flex">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        Portfolio highlights
                    </span>
                </div>

                <div
                    className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 pr-2 [scrollbar-color:rgba(250,204,21,0.7)_rgba(255,255,255,0.08)] [scrollbar-width:thin]"
                    aria-label="Project gallery"
                >
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="group w-[min(86vw,26rem)] shrink-0 snap-start overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40"
                        >
                            <div className="aspect-[16/9] overflow-hidden bg-[#151515]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-6">
                                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-400">
                                    {project.category}
                                </p>
                                <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white">
                                    {project.title}
                                </h2>
                                <p className="mt-3 text-sm leading-7 text-white/65">
                                    {project.summary}
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag.label}
                                            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70"
                                        >
                                            <FontAwesomeIcon icon={tag.icon} className="w-3 text-yellow-400/80" />
                                            {tag.label}
                                        </span>
                                    ))}
                                </div>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target={project.link.startsWith('http') ? '_blank' : undefined}
                                        rel={project.link.startsWith('http') ? 'noreferrer' : undefined}
                                        className="mt-6 inline-flex items-center gap-2 rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-300"
                                    >
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3" />
                                        {project.linkLabel ?? 'Open report'}
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
