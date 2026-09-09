import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCertificate, faEye, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import comp from "../assets/certificate/ComputerHardware.pdf";
import net from "../assets/certificate/NetworkingBasics.pdf";
import python from "../assets/certificate/PythonEssentials1.pdf";
import device from "../assets/certificate/NetworkingDevicesandBasic.pdf";
import genAiSummit from "../assets/certificate/seminar/certificate-gen-ai-to-z-GAI2Z26-138A.pdf";
import Swal from "sweetalert2";

const certificates = [
    { name: "Gen AI to Z: A Career Summit in an AI-Driven World", file: genAiSummit },
    { name: "Python Essentials 1", file: python },
    { name: "Networking Basics", file: net },
    { name: "Computer Hardware Basic", file: comp },
    { name: "Networking Devices", file: device },

];

export default function Certificates() {
    const openViewer = (cert) => {
        Swal.fire({
            title: `<span style="font-family: Space Grotesk, sans-serif; font-weight: 700; color: #FFD700;">${cert.name}</span>`,
            html: `
        <iframe 
          src="${cert.file}" 
          width="100%" 
          height="500px" 
          style="border:none; border-radius:8px;" 
          title="${cert.name}" 
          loading="lazy"
        ></iframe>
      `,
            width: 800,
            showConfirmButton: false,
            showCloseButton: true,
            background: "#1a1a1a",
            color: "#F5F5F0",
        });
    };

    return (
        <section id="certificates" className="min-h-screen bg-[#0F0F0F] px-6 py-16 text-[#F5F5F0] sm:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex flex-col gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
                            <FontAwesomeIcon icon={faCertificate} /> Proof of learning
                        </p>
                        <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-none sm:text-5xl md:text-6xl">
                            Certificates
                        </h2>
                    </div>
                    <p className="max-w-sm text-sm leading-6 text-white/50">
                        A collection of certifications and seminars that supported my growth in technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {certificates.map((cert, index) => (
                    <div
                        key={index}
                        className="group overflow-hidden rounded-2xl border border-white/10 bg-[#151515] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/50"
                    >
                        <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0a]">
                            <iframe src={cert.file} title={cert.name} className="h-full w-full border-none bg-[#111]" loading="lazy" />
                            <span className="absolute left-3 top-3 rounded-full border border-yellow-400/30 bg-black/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-yellow-400">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                        </div>

                        <div className="flex min-h-36 flex-col p-5">
                            <p className="mb-5 flex items-start gap-2 text-sm font-semibold leading-5 text-white/85">
                                <FontAwesomeIcon icon={faFilePdf} className="mt-0.5 shrink-0 text-yellow-400" />
                                <span>{cert.name}</span>
                            </p>

                            <div className="mt-auto flex gap-2">
                                <button
                                    onClick={() => openViewer(cert)}
                                    aria-label={`View ${cert.name}`}
                                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] py-2.5 text-xs font-semibold text-white/70 transition hover:border-yellow-400/50 hover:bg-yellow-400 hover:text-black"
                                >
                                    <FontAwesomeIcon icon={faEye} />
                                    View
                                </button>
                                <a href={cert.file} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-lg border border-white/15 px-3 text-white/50 transition hover:border-yellow-400/50 hover:text-yellow-400" aria-label={`Open ${cert.name} in a new tab`}>
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}
