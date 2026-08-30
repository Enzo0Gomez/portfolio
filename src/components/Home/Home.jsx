import React from 'react';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faCode,
  faDownload,
  faFileLines,
  faLaptopCode,
  faLocationDot,
  faNetworkWired,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons';
import profileImage from '../../assets/pictures/Dan_toga.jpg';
import resume from '../../assets/resume/Dan_Raizen_Gomez.docx?url';

const highlights = [
  { label: 'React', icon: faReact },
  { label: 'Web Development', icon: faLaptopCode },
  { label: 'IT Support', icon: faCode },
  { label: 'Networking', icon: faNetworkWired },
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dan-raizen-gomez-403b84362/',
    icon: faLinkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/enzo0gomez',
    icon: faGithub,
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/yourprofile',
    icon: faFacebook,
  },
];

export default function Home({ setActiveSection }) {
  const handleViewResume = () => {
    const isMobile = window.innerWidth < 768;

    Swal.fire({
      title: '<span style="font-family: Space Grotesk, sans-serif; font-weight: 700; color: #FFFFFF;">My Resume</span>',
      html: `
        <div style="padding: ${isMobile ? '1.5rem' : '2rem'}; text-align: center; color: #F5F5F0;">
          <p style="margin: 0 0 1.25rem; color: #A3A3A3;">Open or download my resume document.</p>
          <a
            href="${resume}"
            target="_blank"
            rel="noopener noreferrer"
            style="display: inline-block; border-radius: 8px; background: #FACC15; color: #0F0F0F; font-weight: 700; padding: 0.8rem 1.2rem; text-decoration: none;"
          >
            Open Resume
          </a>
        </div>
      `,
      width: isMobile ? '95%' : 520,
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
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#0F0F0F] px-6 py-12 text-[#F5F5F0] sm:px-10 lg:px-16">
      <style>{`
        @keyframes home-rise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes home-float {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes home-scan {
          0% { transform: translateX(-110%); opacity: 0; }
          18%, 72% { opacity: 0.8; }
          100% { transform: translateX(110%); opacity: 0; }
        }
        @keyframes home-pulse {
          0%, 100% { opacity: 0.42; transform: scale(1); }
          50% { opacity: 0.78; transform: scale(1.03); }
        }
        .home-rise {
          animation: home-rise 0.7s ease-out both;
        }
        .home-float {
          animation: home-float 5.5s ease-in-out infinite;
        }
        .home-scan::after {
          animation: home-scan 4.8s ease-in-out infinite;
        }
        .home-pulse {
          animation: home-pulse 4s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(250,204,21,0.10),transparent_30%),radial-gradient(circle_at_12%_80%,rgba(255,255,255,0.06),transparent_26%)]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl text-center lg:text-left">
          <div className="home-rise inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-yellow-400">
            <FontAwesomeIcon icon={faStar} />
            Full Stack Developer
          </div>

          <h1 className="home-rise mt-6 font-['Space_Grotesk'] text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-7xl" style={{ animationDelay: '100ms' }}>
            Dan Raizen
            <span className="block text-yellow-400">Gomez</span>
          </h1>

          <p className="home-rise mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/65 sm:text-base lg:mx-0" style={{ animationDelay: '200ms' }}>
            Recent BSIT graduate with hands-on experience in IT support, networking, web development, and mobile development. I build clean interfaces, solve practical technical problems, and keep learning through real projects.
          </p>

          <div className="home-rise mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start" style={{ animationDelay: '300ms' }}>
            {highlights.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/70 transition-colors hover:border-yellow-400/40 hover:text-white">
                <FontAwesomeIcon icon={item.icon} className="text-yellow-400" />
                {item.label}
              </span>
            ))}
          </div>

          <div className="home-rise mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start" style={{ animationDelay: '400ms' }}>
            <button
              onClick={handleViewResume}
              aria-label="View Resume"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-yellow-400 px-6 py-3 text-sm font-bold text-[#0F0F0F] transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-300 active:scale-95 sm:w-auto"
            >
              <FontAwesomeIcon icon={faFileLines} />
              View My Resume
              <FontAwesomeIcon icon={faDownload} className="text-xs" />
            </button>

            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                setActiveSection('contact');
              }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-yellow-400/40 hover:text-yellow-400 sm:w-auto"
            >
              Contact Me
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </a>
          </div>

          <div className="home-rise mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start" style={{ animationDelay: '500ms' }}>
            <span className="text-xs uppercase tracking-widest text-white/35">Find me on</span>
            <div className="hidden h-px w-8 bg-white/15 sm:block" />
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-yellow-400"
              >
                <FontAwesomeIcon icon={social.icon} />
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="home-rise relative mx-auto w-full max-w-md lg:max-w-lg" style={{ animationDelay: '250ms' }}>
          <div className="home-pulse absolute -inset-5 rounded-[2rem] border border-yellow-400/20" />
          <div className="home-float relative">
            <div className="home-scan relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#151515] p-3 shadow-2xl shadow-black/40 after:absolute after:inset-y-0 after:w-28 after:bg-gradient-to-r after:from-transparent after:via-yellow-400/25 after:to-transparent">
              <div className="overflow-hidden rounded-[1rem] bg-black">
                <img
                  src={profileImage}
                  alt="Dan Raizen Gomez"
                  className="h-[28rem] w-full object-cover object-top sm:h-[32rem]"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-[#111]/95 p-4 shadow-xl backdrop-blur">
              <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-yellow-400">
                <FontAwesomeIcon icon={faLocationDot} />
                Rizal, Philippines
              </p>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div>
                  <p className="font-['Space_Grotesk'] text-xl font-bold text-white">BSIT</p>
                  <p className="text-[11px] text-white/45">Graduate</p>
                </div>
                <div>
                  <p className="font-['Space_Grotesk'] text-xl font-bold text-white">Full</p>
                  <p className="text-[11px] text-white/45">Stack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
