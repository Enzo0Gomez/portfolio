import React from 'react';
import blackfiber from '../assets/pictures/BlackFiber_Logo.png';
import DNA from '../assets/pictures/DNA.png';

function TagList({ label, tags }) {
    return (
        <div className="p-7 transition-colors border border-white/10 hover:border-yellow-400/40 rounded-xl">
            <p className="text-[13px] font-medium text-white uppercase tracking-widest mb-3">
                {label}
            </p>
            <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs border rounded-md bg-white/5 border-white/10 text-white/70">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function Experience() {
    return (
        <div id="experience" className="bg-[#0F0F0F] text-[#F5F5F0] min-h-screen px-6 sm:px-10 py-16">

            <div className="flex items-start justify-between pb-10 mb-14 border-b border-white/10">
                <div>
                    <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl font-bold leading-none">
                        Experience
                    </h1>
                </div>
            </div>



            {/* DNA — Full Stack Developer */}
            <div className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-3 sm:gap-8">
                <div className="flex flex-col items-center justify-center gap-3 p-7 border hover:border-yellow-400/40 border-white/10 rounded-xl">
                    <img src={DNA} alt="DNA logo" className="w-32 h-auto sm:w-40 md:w-48 opacity-90" />
                    <p className="text-[13px] font-medium text-white uppercase tracking-widest text-center">
                        Full Stack Developer - July 27 - Present
                    </p>
                </div>

                <TagList
                    label="Frontend & Mobile"
                    tags={['React Native', 'TypeScript', 'Figma to Code', 'Responsive UI', 'Android Studio']}
                />

                <TagList
                    label="Backend & Tools"
                    tags={['Supabase', 'Git/GitHub', 'REST APIs', 'Debugging', 'Version Control']}
                />
            </div>

            <div className="p-6 m-6 border hover:border-yellow-400/40 border-white/10 rounded-xl sm:mt-8 sm:p-7">
                <p className="text-sm leading-[1.8] text-white">
                    Developed and maintained features for LEVEL, a relationship and dating platform.
                    Worked on both web and mobile application development, including UI improvements and feature implementation.
                    Developed and enhanced React Native mobile screens based on Figma designs and project requirements.
                    Worked with Git/GitHub for version control, feature branches, merging, and collaborative development.
                    Integrated and worked with backend services and databases, including Supabase.
                    Tested mobile features using Android Studio, emulators, and physical Android devices.
                    Fixed UI issues, implemented responsive mobile designs, and improved overall user experience.
                    Participated in testing, debugging, and preparing features for deployment.
                    Collaborated with the development team to deliver updates and improvements for project releases.
                </p>
            </div>

            {/* BlackFiber Internship */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:gap-8">
                <div className="flex flex-col items-center justify-center gap-3 p-7 border hover:border-yellow-400/40 border-white/10 rounded-xl">
                    <img src={blackfiber} alt="BlackFiber logo" className="w-32 h-auto sm:w-40 md:w-48 opacity-90" />
                    <p className="text-[13px] font-medium text-white uppercase tracking-widest text-center">
                        Internship - Feb 9 - April 24, 2026
                    </p>
                </div>

                <TagList
                    label="Networking"
                    tags={['VLAN Configuration', 'IP Management', 'Cisco Networking', 'Hardware Diagnostics', 'OS Installation']}
                />

                <TagList
                    label="System Department"
                    tags={['Odoo ERP', 'Data Management', 'Python', 'TypeScript', 'System Admin']}
                />
            </div>

            <div className="p-6 m-6 border hover:border-yellow-400/40 border-white/10 rounded-xl sm:mt-8 sm:p-7">
                <p className="text-sm leading-[1.8] text-white">
                    Completed a 400-hour internship at BlackFiber Communications Corporation, gaining
                    hands-on experience in networking, system support, and technical troubleshooting,
                    including VLAN configuration, IP address management, Cisco networking, hardware
                    diagnostics, operating system installation, and IT support.
                </p>
                <p className="text-sm leading-[1.8] text-white mt-4">
                    Worked with Odoo ERP, data management, Docker, Linux (Ubuntu), and basic
                    programming concepts in Python and TypeScript, while developing skills in
                    documentation, system administration, cybersecurity, problem-solving, communication,
                    and teamwork in a professional IT environment.
                </p>
            </div>
        </div>
    );
}