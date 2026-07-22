import React from 'react';
import blackfiber from '../assets/pictures/BlackFiber_Logo.png';

export default function Experience() {
    return (
        <div id="experience" className="bg-[#0F0F0F] text-[#F5F5F0] min-h-screen px-6 sm:px-10 py-16">

            <div className="flex items-start justify-between pb-10 border-b mb-14 border-white/10">
                <div>
                    <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl font-bold leading-none">
                        Experience
                    </h1>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:gap-8">
                <div className="flex flex-col items-center justify-center gap-3 border hover:border-yellow-400/40 border-white/10 rounded-xl p-7">
                    <img src={blackfiber} alt="BlackFiber logo" className="w-32 h-auto sm:w-40 md:w-48 opacity-90" />
                    <p className="text-[13px] font-medium text-white uppercase tracking-widest text-center">
                        Internship - Feb 9 - April 24, 2026
                    </p>
                </div>

                <div className="transition-colors border border-white/10 hover:border-yellow-400/40 rounded-xl p-7">
                    <p className="text-[13px] font-medium text-white uppercase tracking-widest mb-3">
                        Networking
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {['VLAN Configuration', 'IP Management', 'Cisco Networking', 'Hardware Diagnostics', 'OS Installation'].map(tag => (
                            <span key={tag} className="px-3 py-1 text-xs border rounded-md bg-white/5 border-white/10 text-white/70">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="transition-colors border border-white/10 hover:border-yellow-400/40 rounded-xl p-7">
                    <p className="text-[13px] font-medium text-white uppercase tracking-widest mb-3">
                        System Department
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {['Odoo ERP', 'Data Management', 'Python', 'TypeScript', 'System Admin'].map(tag => (
                            <span key={tag} className="px-3 py-1 text-xs border rounded-md bg-white/5 border-white/10 text-white/70">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-6 mt-6 border hover:border-yellow-400/40 border-white/10 rounded-xl sm:mt-8 sm:p-7">
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