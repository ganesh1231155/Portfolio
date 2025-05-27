import React from 'react';
// Assuming ionicons are globally available or handled via a React icon library
// Example: import { IoMailOutline, IoPhonePortraitOutline, IoCalendarOutline, IoLocationOutline, IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoChevronDown } from 'react-icons/io5';

function Sidebar({ isSidebarOpen, toggleSidebar }) {
  return (
    <aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/assets/images/my-avatar.png" alt="Richard Hanrick" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard Hanrick">Shreeganesh Kolte</h1>
          <p className="title">Web developer</p>
        </div>

        <button className="info_more-btn" onClick={toggleSidebar}>
          <span>Show Contacts</span>
          {/* <ion-icon name="chevron-down"></ion-icon> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M160 174L256 270L352 174L384 206L256 334L128 206L160 174z"/></svg> {/* Placeholder icon */}
        </button>
      </div>

      <div className={`sidebar-info_more ${isSidebarOpen ? 'active' : ''}`}> {/* Add active class based on state */}
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              {/* <ion-icon name="mail-outline"></ion-icon> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M424 80H88a56 56 0 0 0-56 56v240a56 56 0 0 0 56 56h336a56 56 0 0 0 56-56V136a56 56 0 0 0-56-56Zm-14.71 18.78L262.24 290.72a32 32 0 0 1-12.24 5.28a32 32 0 0 1-12.24-5.28L102.71 98.78A24 24 0 0 1 120 96h272a24 24 0 0 1 17.29 2.78ZM432 368a24 24 0 0 1-24 24H104a24 24 0 0 1-24-24V140a8 8 0 0 0 3.16-3.14l102.21 95.84l-89.26 83.56a24 24 0 0 0-6.9 17.06v5.68a24 24 0 0 0 24 24h304a24 24 0 0 0 24-24v-5.68a24 24 0 0 0-6.9-17.06L308.63 232.7l102.21-95.84A8 8 0 0 0 432 140Z"/></svg>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:richard@example.com" className="contact-link">kolteshreeganesh1155@gmail.com</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              {/* <ion-icon name="phone-portrait-outline"></ion-icon> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M347.92 64a8 8 0 0 0-8 8v368a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8ZM48 64a8 8 0 0 0-8 8v368a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8ZM232 64a8 8 0 0 0-8 8v368a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8Z"/></svg>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+12133522795" className="contact-link">+91 8767004103</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              {/* <ion-icon name="calendar-outline"></ion-icon> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M432 64h-32V48a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v16H160V48a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v16H80a48 48 0 0 0-48 48v320a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V112a48 48 0 0 0-48-48Zm-16 96H96v288h320Z"/></svg>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1982-06-23">Sep 13, 2002</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              {/* <ion-icon name="location-outline"></ion-icon> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M256 48c-79.51 0-144 64.47-144 144c0 112 112 288 144 288s144-176 144-288c0-79.53-64.49-144-144-144Zm0 224a80 80 0 1 1 80-80a80 80 0 0 1-80 80Z"/></svg>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Pune, Maharashtra, India. 411017</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://www.linkedin.com/in/shreeganesh-kolte-80ba16259/" className="social-link">
              {/* <ion-icon name="logo-Linked in"></ion-icon> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="currentColor"/>
                <text x="50%" y="50%" font-size="12" text-anchor="middle" fill="white" dy=".3em">in</text>
              </svg>


            </a>
          </li>
          <li className="social-item">
            <a href="https://github.com/ganesh1231155" className="social-link">
              {/* <ion-icon name="logo-Github"></ion-icon> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.32 3.44 9.84 8.21 11.42.6.11.82-.26.82-.58v-2.22c-3.34.73-4.03-1.55-4.03-1.55-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.82 2.82 1.3 3.51.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23A11.52 11.52 0 0 1 12 5.33c1.02.01 2.04.14 3 .4 2.29-1.54 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.62-5.49 5.92.43.37.82 1.09.82 2.2v3.27c0 .32.22.7.83.58C20.56 21.84 24 17.32 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" className="social-link">
              {/* <ion-icon name="logo-Naukri"></ion-icon> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="currentColor"/>
                <text x="50%" y="50%" font-size="12" text-anchor="middle" fill="white" dy=".3em">N</text>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;