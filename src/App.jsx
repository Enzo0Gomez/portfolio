import React, { useEffect, useState } from 'react';
import Sidebar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Gallery from './components/Gallery';

const sections = {
  home: Home,
  about: About,
  experience: Experience,
  education: Education,
  skills: Skills,
  gallery: Gallery,
  certificates: Certificates,
  contact: Contact,

};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  const ActiveComponent = sections[activeSection];

  useEffect(() => {
    document.documentElement.classList.toggle('theme-light', theme === 'light');
    document.documentElement.classList.toggle('theme-dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="flex flex-col App md:flex-row">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <div className="flex-1">
        <ActiveComponent setActiveSection={setActiveSection} theme={theme} />
      </div>
    </div>
  );
}

export default App;
