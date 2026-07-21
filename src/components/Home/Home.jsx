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
    <div id="home" className="min-h-screen bg-[#0F0F0F] flex flex-col md:flex-row items-center md:items-start p-6 sm:p-10 md:px-16 relative overflow-hidden">

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        @keyframes spin-glow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .hex-float {
          animation: float 5s ease-in-out infinite;
        }
        .hex-glow-ring {
          animation: spin-glow 8s linear infinite;
        }
      `}</style>

      <div className="z-20 flex-1 max-w-2xl mt-8 text-center md:mt-32 md:text-left">
        <p className="text-yellow-400 font-['Space_Grotesk'] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4">
          Full Stack Developer
        </p>

        <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl font-bold text-[#F5F5F0] leading-none mb-1">
          Dan Raizen
        </h1>
        <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400 leading-none mb-6">
          Gomez
        </h1>

        <p className="max-w-md mx-auto mb-10 text-sm leading-relaxed text-gray-400 sm:text-base md:mx-0">
          Recent BSIT graduate with hands-on internship experience in IT support, networking, and web development. Skilled in React.js, Vue.js, PHP, MySQL, HTML, CSS, JavaScript, and Cisco networking. Passionate about solving technical problems and eager to contribute as an IT Support, IT Staff, or Junior Developer.
        </p>

        <button
          onClick={handleViewResume}
          aria-label="View Resume"
          className="bg-yellow-400 hover:bg-yellow-300 active:scale-95 text-[#0F0F0F] font-['Space_Grotesk'] text-sm font-bold px-6 py-3 rounded-md transition-all duration-150"
        >
          View My Resume
        </button>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-8 md:justify-start sm:gap-4">
          <span className="text-xs tracking-widest text-gray-600 uppercase">Find me on</span>
          <div className="hidden w-8 h-px bg-gray-700 sm:block" />
          <a href="https://www.linkedin.com/in/dan-raizen-gomez-403b84362/" target="_blank" rel="noopener noreferrer"
            className="text-gray-500 hover:text-yellow-400 text-sm font-['Space_Grotesk'] transition-colors">
            LinkedIn
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"
            className="text-gray-500 hover:text-yellow-400 text-sm font-['Space_Grotesk'] transition-colors">
            Facebook
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10 md:mt-10 md:ml-[10em]">
        <div className="hex-float relative w-64 h-60 sm:w-80 sm:h-72 md:w-[28em] md:h-[26em]">

          {/* Glowing rotating border layer */}
          <div
            className="absolute inset-0 hex-glow-ring"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              background: 'conic-gradient(from 0deg, transparent, #FFD700, transparent 30%)',
              filter: 'blur(6px)',
              opacity: 0.8,
            }}
          />

          {/* Static thin outline on top of glow for crisp edge */}
          <svg className="absolute inset-0" viewBox="0 0 200 200" fill="none">
            <polygon points="100,4 196,52 196,148 100,196 4,148 4,52"
              stroke="#FFD700" strokeWidth="1.5" opacity="0.6" />
            <polygon points="100,14 186,57 186,143 100,186 14,143 14,57"
              stroke="#FFD700" strokeWidth="0.5" opacity="0.25" />
          </svg>

          <img
            src={profileImage}
            alt="Dan Raizen Gomez"
            className="absolute top-[8%] left-[7%] w-[86%] h-[88%] object-cover"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}