import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faArrowRight, faCertificate, faCheck, faFilePdf, faTimes } from "@fortawesome/free-solid-svg-icons";
import comp from "../assets/certificate/ComputerHardware.pdf";
import net from "../assets/certificate/NetworkingBasics.pdf";
import python from "../assets/certificate/PythonEssentials1.pdf";
import device from "../assets/certificate/NetworkingDevicesandBasic.pdf";
import genAiSummit from "../assets/certificate/seminar/certificate-gen-ai-to-z-GAI2Z26-138A.pdf";

const certificates = [
    { name: "Gen AI to Z: A Career Summit in an AI-Driven World", type: "Career summit", file: genAiSummit },
    { name: "Python Essentials 1", type: "Programming", file: python },
    { name: "Networking Basics", type: "Networking", file: net },
    { name: "Computer Hardware Basic", type: "Hardware", file: comp },
    { name: "Networking Devices", type: "Networking", file: device },
];

export default function Certificates() {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    useEffect(() => {
        const closeOnEscape = (event) => event.key === "Escape" && setSelectedCertificate(null);
        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    }, []);

    useEffect(() => {
        document.body.style.overflow = selectedCertificate ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [selectedCertificate]);

    return (
        <section id="certificates" className="abstract-pattern min-h-screen bg-[#0F0F0F] px-6 py-16 text-[#F5F5F0] sm:px-10">
            <div className="mx-auto max-w-7xl">
                <header className="mb-10 flex flex-col gap-5 border-b border-white/10 pb-8 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
                            <FontAwesomeIcon icon={faCertificate} /> Professional development
                        </p>
                        <h1 className="font-['Space_Grotesk'] text-4xl font-bold leading-none sm:text-5xl md:text-6xl">
                            Certificates
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <p className="max-w-sm text-sm leading-6 text-white/55">Credentials earned through hands-on learning in software, hardware, and networking.</p>
                        <span className="shrink-0 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-3 py-1.5 text-xs font-semibold text-yellow-400">{certificates.length} earned</span>
                    </div>
                </header>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Certificate collection">
                {certificates.map((cert, index) => (
                    <article key={cert.name} className="group relative flex min-h-64 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/45 hover:shadow-2xl hover:shadow-black/25">
                        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-yellow-400/[0.07] blur-2xl transition group-hover:bg-yellow-400/[0.14]" />
                        <div className="relative flex items-start justify-between gap-4">
                            <span className="grid h-12 w-12 place-items-center rounded-xl border border-yellow-400/20 bg-yellow-400/10 text-lg text-yellow-400"><FontAwesomeIcon icon={faFilePdf} /></span>
                            <span className="text-xs font-semibold tracking-widest text-white/30">{String(index + 1).padStart(2, "0")}</span>
                        </div>
                        <div className="relative mt-7"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-yellow-400/85">{cert.type}</p><h2 className="font-['Space_Grotesk'] text-xl font-bold leading-snug text-white">{cert.name}</h2></div>
                        <div className="relative mt-auto flex items-center justify-between gap-3 pt-7">
                            <span className="inline-flex items-center gap-2 text-xs text-white/45"><FontAwesomeIcon icon={faCheck} className="text-yellow-400" /> Verified document</span>
                            <button onClick={() => setSelectedCertificate(cert)} className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-3.5 py-2 text-xs font-bold text-black transition hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-[#151515]" aria-label={`View ${cert.name}`}>View <FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                    </article>
                ))}
                </div>
            </div>

            {selectedCertificate && <div className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-3 backdrop-blur-sm sm:p-6" role="dialog" aria-modal="true" aria-labelledby="certificate-viewer-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedCertificate(null); }}>
                <div className="flex h-[min(90vh,52rem)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#151515] shadow-2xl shadow-black/60">
                    <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6"><div className="min-w-0"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-yellow-400">Certificate viewer</p><h2 id="certificate-viewer-title" className="truncate font-['Space_Grotesk'] text-base font-bold text-white sm:text-lg">{selectedCertificate.name}</h2></div><div className="flex shrink-0 items-center gap-2"><a href={selectedCertificate.file} target="_blank" rel="noreferrer" className="inline-flex h-9 items-center gap-2 rounded-lg border border-white/15 px-3 text-xs font-semibold text-white/70 transition hover:border-yellow-400/50 hover:text-yellow-400"><span className="hidden sm:inline">New tab</span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a><button onClick={() => setSelectedCertificate(null)} className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 text-white/70 transition hover:border-yellow-400/50 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" aria-label="Close certificate viewer"><FontAwesomeIcon icon={faTimes} /></button></div></div>
                    <iframe src={selectedCertificate.file} title={selectedCertificate.name} className="min-h-0 flex-1 border-0 bg-white" />
                </div>
            </div>}
        </section>
    );
}
