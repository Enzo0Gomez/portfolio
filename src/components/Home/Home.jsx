import React from 'react';
import Swal from 'sweetalert2';
import profileImage from '../../assets/pictures/Dan_toga.jpg';
import resume from '../../assets/resume/Dan_Raizen_Gomez.pdf';

export default function Home() {
  const handleViewResume = () => {
    const isMobile = window.innerWidth < 768;

    Swal.fire({
      title: '<span style="font-family: Space Grotesk, sans-serif; font-weight: 700; color: #FFFFFF;">My Resume</span>',
      html: `
        <iframe 
          src="${resume}" 
          width="100%" 
          height="${isMobile ? '60vh' : '500px'}" 
          style="border: none; border-radius: 8px; display: block;"
          title="Resume PDF"
          loading="lazy"
          allowfullscreen
        />
      `,
      width: isMobile ? '95%' : 860,
      padding: '0.5rem',
      background: '#0F0F0F',
      showConfirmButton: false,
      showCloseButton: true,
      customClass: {
        popup: 'rounded-xl',
        title: '!text-yellow-400 !font-bold',
        closeButton: '!text-gray-400 hover:!text-white',
      },
    });
  };

  return (
    <div id="home" className="min-h-screen bg-[#0F0F0F] flex flex-col md:flex-row">
      {/* LEFT: Content */}
      <div className="relative z-10 flex flex-col justify-center w-full px-6 py-16 md:w-1/2 sm:px-10 md:px-16 lg:px-20">
        <p className="text-yellow-400 font-['Space_Grotesk'] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-5">
          Full Stack Developer
        </p>

        <h1 className="font-['Space_Grotesk'] text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F5F5F0] leading-[0.95] mb-1">
          Dan Raizen
        </h1>
        <h1 className="font-['Space_Grotesk'] text-5xl sm:text-6xl lg:text-7xl font-bold text-yellow-400 leading-[0.95] mb-8">
          Gomez
        </h1>

        <p className="max-w-md mb-10 text-sm leading-relaxed text-gray-400 sm:text-base">
          Recent BSIT graduate with hands-on internship experience in IT support, networking, and web development. Skilled in React.js, Vue.js, PHP, MySQL, HTML, CSS, JavaScript, and Cisco networking. Passionate about solving technical problems and eager to contribute as an IT Support, IT Staff, or Junior Developer.
        </p>

        <button
          onClick={handleViewResume}
          aria-label="View Resume"
          className="self-start bg-yellow-400 hover:bg-yellow-300 active:scale-95 text-[#0F0F0F] font-['Space_Grotesk'] text-sm font-bold px-7 py-3.5 rounded-md transition-all duration-150"
        >
          View My Resume
        </button>

        <div className="flex flex-wrap items-center gap-4 mt-12">
          <span className="text-xs tracking-widest text-gray-600 uppercase">Find me on</span>
          <div className="hidden w-8 h-px bg-gray-700 sm:block" />
          
          {/* Added missing opening <a> tag */}
          <a
            href="https://www.linkedin.com/in/dan-raizen-gomez-403b84362/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-yellow-400 text-sm font-['Space_Grotesk'] transition-colors"
          >
            LinkedIn
          </a>
          
          {/* Added missing opening <a> tag */}
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-yellow-400 text-sm font-['Space_Grotesk'] transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>

      {/* RIGHT: Full-bleed image */}
      <div className="relative w-full h-[50vh] md:h-auto md:w-1/2 overflow-hidden">
        <img
          src={profileImage}
          alt="Dan Raizen Gomez"
          className="absolute inset-0 object-cover w-full h-full"
        />

        {/* Gradient overlay for blending into dark bg */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0F0F0F] via-transparent to-transparent opacity-90 md:opacity-70" />

        {/* Accent vertical line */}
        <div className="absolute top-0 bottom-0 left-0 hidden w-px md:block bg-yellow-400/30" />

        {/* Bottom-right label */}
        <div className="absolute z-10 bottom-6 right-6 md:bottom-10 md:right-10">
          <span className="font-mono text-xs tracking-widest uppercase text-white/60">
            Portfolio &middot; 2026
          </span>
        </div>
      </div>
    </div>
  );
}