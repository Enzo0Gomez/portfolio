import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCode,
    faGraduationCap,
    faHandshakeAngle,
    faLightbulb,
    faLocationDot,
    faNetworkWired,
    faScrewdriverWrench,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import profileImage from '../assets/pictures/Dan_toga.jpg';

const focusAreas = [
    {
        title: 'Development',
        icon: faCode,
        description: 'Building responsive web and mobile interfaces with React, React Native, JavaScript, PHP, and MySQL.',
    },
    {
        title: 'IT Support',
        icon: faScrewdriverWrench,
        description: 'Handling troubleshooting, hardware diagnostics, OS installation, documentation, and user support.',
    },
    {
        title: 'Networking',
        icon: faNetworkWired,
        description: 'Working with VLAN configuration, IP management, Cisco networking basics, and network maintenance.',
    },
];

const quickFacts = [
    { label: 'BSIT Graduate', icon: faGraduationCap },
    { label: 'Rizal, Philippines', icon: faLocationDot },
    { label: 'Junior Developer / IT Staff', icon: faHandshakeAngle },
];

export default function About() {
    return (
        <section id="about" className="min-h-screen bg-[#0F0F0F] px-6 py-16 text-[#F5F5F0] sm:px-10">
            <div className="mx-auto max-w-6xl">
                <div className="flex items-end justify-between pb-10 mb-12 border-b border-white/10">
                    <div>
                        <p className="flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-yellow-400">
                            <FontAwesomeIcon icon={faUser} />
                            About me
                        </p>
                        <h1 className="font-['Space_Grotesk'] text-4xl font-bold leading-none sm:text-5xl md:text-6xl">
                            Who I Am
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[320px_1fr]">
                    <div className="space-y-5">
                        <div className="overflow-hidden border rounded-xl border-white/10 bg-white/[0.02]">
                            <img
                                src={profileImage}
                                alt="Dan Raizen Gomez"
                                className="h-80 w-full object-cover object-top"
                            />
                            <div className="p-6">
                                <p className="mb-1 text-xs font-semibold tracking-widest uppercase text-yellow-400">
                                    Dan Raizen Gomez
                                </p>
                                <p className="text-sm leading-7 text-white/65">
                                    Full Stack Developer with a practical IT support, networking background and Web development skills.
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-3">
                            {quickFacts.map((fact) => (
                                <div key={fact.label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white/70">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400">
                                        <FontAwesomeIcon icon={fact.icon} />
                                    </span>
                                    {fact.label}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-yellow-400/40 sm:p-8">
                            <p className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-yellow-400">
                                <FontAwesomeIcon icon={faLightbulb} />
                                Profile
                            </p>
                            <h2 className="font-['Space_Grotesk'] mb-4 text-2xl font-bold text-white sm:text-3xl">
                                I enjoy solving technical problems and turning ideas into usable digital experiences.
                            </h2>
                            <div className="space-y-4 text-sm leading-8 text-white/70">
                                <p>
                                    I am a recent Bachelor of Science in Information Technology graduate with hands-on experience in web development, mobile development, IT support, and networking. My work has involved building interfaces, improving mobile screens, testing features, troubleshooting systems, and supporting technical operations.
                                </p>
                                <p>
                                    I am comfortable learning through real projects and team collaboration. I care about clean layouts, reliable functionality, and practical solutions that make technology easier for people to use.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            {focusAreas.map((area) => (
                                <div key={area.title} className="rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-yellow-400/40">
                                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/30 text-yellow-400">
                                        <FontAwesomeIcon icon={area.icon} />
                                    </div>
                                    <h3 className="font-['Space_Grotesk'] mb-3 text-lg font-semibold text-white">
                                        {area.title}
                                    </h3>
                                    <p className="text-sm leading-7 text-white/60">
                                        {area.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
