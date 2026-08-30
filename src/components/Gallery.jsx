import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faImages, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import levelProject from '../assets/pictures/Project/WebProject_Level.png';
import ciscoImage from '../assets/pictures/my_internship/Cisco.png';
import odooImage from '../assets/pictures/my_internship/odoo.png';
import vlanImage from '../assets/pictures/my_internship/vlan.jpg';
import setupImage from '../assets/pictures/my_internship/setup.png';
import hardwareImage from '../assets/pictures/my_internship/Hardware_basic.png';
import officeImage from '../assets/pictures/my_internship/office.png';
import practiceVlan from '../assets/pictures/my_internship/practice_create_vlan.png';
import noc from '../assets/pictures/my_internship/noc.png';
import system from '../assets/pictures/my_internship/system_deparment.png';

const galleryItems = [
    {
        title: 'LEVEL Platform',
        category: 'DNA',
        caption: 'Web and mobile feature development for a relationship and dating platform.',
        image: levelProject,
    },
    {
        title: 'Cisco Networking',
        category: 'BlackFiber Internship',
        caption: 'Networking tasks, configuration practice, and technical support activities.',
        image: ciscoImage,
    },
    {
        title: 'VLAN Configuration',
        category: 'BlackFiber Internship',
        caption: 'Hands-on VLAN configuration and IP management work.',
        image: vlanImage,
    },
    {
        title: 'Odoo ERP',
        category: 'System Department',
        caption: 'ERP exposure, records handling, and data workflow support.',
        image: odooImage,
    },
    {
        title: 'System Setup',
        category: 'IT Support',
        caption: 'Device setup, troubleshooting, and operating system support.',
        image: setupImage,
    },
    {
        title: 'Hardware Basics',
        category: 'Technical Support',
        caption: 'Hardware diagnostics and maintenance fundamentals.',
        image: hardwareImage,
    },
    {
        title: 'Practice VLAN Configuration',
        category: 'Technical Support',
        caption: 'Hands-on VLAN configuration and IP management work.',
        image: practiceVlan,
    },
    {
        title: 'Office with mentors',
        category: 'Documentation',
        caption: 'Documentation and productivity enhancements used in daily support work.',
        image: officeImage,
    },
      {
        title: 'system Department',
        category: 'System Department',
        caption: 'System department exposure, monitoring, and support activities.',
        image: system,
    },
       {
        title: 'NOC',
        category: 'NOC Department',
        caption: 'Network Operations Center exposure, monitoring, and support activities.',
        image: noc,
    },
];

export default function Gallery() {
    return (
        <section id="gallery" className="min-h-screen bg-[#0F0F0F] px-6 py-16 text-[#F5F5F0] sm:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-end justify-between pb-10 mb-12 border-b border-white/10">
                    <div>
                        <p className="flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-yellow-400">
                            <FontAwesomeIcon icon={faBriefcase} />
                            Experience photos
                        </p>
                        <h1 className="font-['Space_Grotesk'] text-4xl font-bold leading-none sm:text-5xl md:text-6xl">
                            Gallery
                        </h1>
                    </div>
                    <span className="hidden items-center gap-2 text-xs uppercase tracking-widest text-white/40 sm:flex">
                        <FontAwesomeIcon icon={faImages} />
                        Work snapshots
                    </span>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {galleryItems.map((item, index) => (
                        <figure
                            key={item.title}
                            className={`group overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 ${index === 0 ? 'md:col-span-2' : ''
                                }`}
                        >
                            <div className={`${index === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'} overflow-hidden bg-[#151515]`}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            <figcaption className="p-5">
                                <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-yellow-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-yellow-400">
                                    <FontAwesomeIcon icon={faLayerGroup} />
                                    {item.category}
                                </p>
                                <h2 className="font-['Space_Grotesk'] mb-2 text-xl font-bold text-white">
                                    {item.title}
                                </h2>
                                <p className="text-sm leading-7 text-white/60">
                                    {item.caption}
                                </p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
