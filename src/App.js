import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './pages/About';
import Resume from '../src/pages/Resume';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('about');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile sidebar

  const handleNavLinkClick = (page) => {
    setActivePage(page);
    // Close sidebar on page change for mobile
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="main-content">
        <Navbar activePage={activePage} onNavLinkClick={handleNavLinkClick} />
        {/* <Resume/> */}
        {activePage == 'about' && <About/>}
        {activePage == 'resume' && <Resume/>}
        {activePage == 'portfolio' && <Portfolio />}
        {activePage == 'blog' && <Blog />}
        {activePage == 'contact' && <Contact />}
      </div>
    </main>
  );
}


export default App;
