import React, { useState } from 'react';
import Sidebar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Skills from './components/Skills';

const sections = {
  home: Home,
  experience: Experience,
  education: Education,
  skills: Skills,
  certificates: Certificates,
  contact: Contact,

};

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const ActiveComponent = sections[activeSection];

  return (
    <div className="flex flex-col App md:flex-row">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="flex-1">
        <ActiveComponent />
      </div>
    </div>
  );
}

export default App;