import React from "react";
import comp from "../assets/certificate/ComputerHardware.pdf";
import net from "../assets/certificate/NetworkingBasics.pdf";
import python from "../assets/certificate/PythonEssentials1.pdf";
import device from "../assets/certificate/NetworkingDevicesandBasic.pdf";
import Swal from "sweetalert2";

const certificates = [
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
        <div
            id="certificates"
            className="bg-[#0F0F0F] text-[#F5F5F0] min-h-screen  px-10"
        >
            <div className="flex items-start justify-between pb-10 border-b mb-14 border-white/10">
                <div className="mt-5">
                    <h2 className="font-['Space_Grotesk'] text-6xl font-bold leading-none">Certificates</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                {certificates.map((cert, index) => (
                    <div
                        key={index}
                        className="border border-white/15 bg-[#1a1a1a] rounded-xl overflow-hidden"
                    >
                        <iframe
                            src={cert.file}
                            title={cert.name}
                            className="w-full h-48 border-none bg-[#111]"
                        ></iframe>

                        <div className="p-5">
                            <p className="text-[11px] font-medium text-gray-400 uppercase tracking-widest mb-4">
                                {cert.name}
                            </p>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => openViewer(cert)}
                                    aria-label={`View ${cert.name}`}
                                    className="flex-1 py-2 text-xs text-gray-300 transition border rounded-lg border-white/20 hover:bg-white/5"
                                >
                                    View
                                </button>
                              
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
