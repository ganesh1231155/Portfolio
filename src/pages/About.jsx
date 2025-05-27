import React, { useState } from 'react';
// Assuming ionicons or react-icons are available
// import { IoCloseOutline } from 'react-icons/io5'; // for the modal close button

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const testimonials = [
    {
      id: 1,
      name: 'Gauravkumar',
      avatar: '/assets/images/avatar-1.png',
      date: 'April 20, 2025',
      text: "Shreeganesh was an exceptional Web Development Intern at Next Gen Software Hub. His contributions to the frontend with React.js significantly enhanced user experience, and his work on optimizing backend logic with Spring Boot was critical for performance. He diligently managed MongoDB and Firebase databases, ensuring high data integrity. His commitment to quality and effective collaboration made him a valuable team member.",
    },
    {
      id: 2,
      name: 'Mahesh More',
      avatar: '/assets/images/avatar-1.png',
      date: 'April 15, 2025',
      text: "Collaborating with Shreeganesh on the e-learning platform was a smooth process. His React.js skills were key in developing responsive frontend components, and he was always ready to jump in and help resolve any integration challenges between the front and backend. A truly supportive team player.",
    },
    {
      id: 3,
      name: 'Rushukesh Rode',
      avatar: '/assets/images/avatar-4.png',
      date: 'April 18, 2025',
      text: "SK is a fantastic problem-solver and a great asset to any development team. On the DSA Visualizer project, his insights into Node.js and Firebase were invaluable, and he consistently helped us navigate complex technical hurdles. He’s very collaborative and committed to seeing projects through to success.",
    },
    {
      id: 4,
      name: 'Rakib Jalgaonkar',
      avatar: '/assets/images/avatar-1.png',
      date: 'April 25, 2025',
      text: "It was a pleasure working with ganesh. He has a solid understanding of full-stack development and is always eager to contribute. His commitment to quality and his positive attitude made our collaborative efforts very effective, whether it was on frontend features or database management.",
    },
    {
      id: 5,
      name: 'Om Shahane', // Fictional Team Member
      avatar: '/assets/images/avatar-4.png', // Placeholder avatar
      date: 'May 15, 2023', // Shortly after Jewelry Shop project completion
      text: "Working alongside Shreeganesh Kolte on the PM Jewellers mobile application was a highly productive experience. His expertise with Android Studio, Firebase, and Java backend integration was crucial in developing features like the product catalog, secure cart, and Google Maps integration. He's a highly collaborative developer who consistently delivers functional and high-quality results.",
    },
    {
      id: 6,
      name: 'Sumitra Samal',
      avatar: '/assets/images/avatar-2.png',
      date: 'December 1, 2023',
      text: "ganesh built a fantastic Android application that leverages Firebase for real-time updates and seamless user authentication. His ability to handle real-time data and ensure smooth interactions is evident. Even for complex features like those found in a dynamic chat application, his expertise with Android Studio and Firebase shines through, creating a truly responsive user experience.",
    },
  ];

  const openModal = (testimonial) => {
    setModalContent(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({});
  };

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          As a proactive Full Stack Developer, I'm Kolte Shreeganesh Manik, 
          driven by the challenge of crafting elegant and functional web applications. 
          My technical toolkit is robust, featuring front-end expertise in React.js and 
          a strong back-end command of Spring Boot and Node.js. I'm adept at working with 
          various databases including MongoDB and MySQL.
        </p>
        <p>
          I possess a solid understanding of Data Structures and Algorithms that underpins my 
          problem-solving approach. Whether it's developing dynamic web platforms or integrating 
          complex APIs, I am dedicated to delivering high-quality, scalable solutions from my work 
          on multiple projects and constantly expanding my knowledge in the ever-evolving tech landscape.
          </p>
      </section>

      {/* Service Section */}
      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>
        <ul className="service-list">
          {/* <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/icon-design.svg" alt="design icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web design</h4>
              <p className="service-item-text">
                The most modern and high-quality design made at a professional level.
              </p>
            </div>
          </li> */}
          <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/icon-dev.svg" alt="Web development icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>
              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/icon-app.svg" alt="mobile app icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile apps</h4>
              <p className="service-item-text">
                Professional development of applications for Android.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
                {/* You might want to use an icon representing AI, coding, or communication for Prompt Engineering */}
                <img src="/assets/images/icon-ai.svg" alt="AI icon" width="70" />
            </div>
            <div className="service-content-box">
                <h4 className="h4 service-item-title">Prompt Engineering</h4>
                <p className="service-item-text">
                I specialize in crafting precise and effective prompts to guide AI models, ensuring optimal, relevant, and high-quality outputs for various applications and needs.
                </p>
            </div>
         </li>
          {/* <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/icon-photo.svg" alt="camera icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Photography</h4>
              <p className="service-item-text">
                I make high-quality photos of any category at a professional level.
              </p>
            </div>
          </li> */}
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((item) => (
            <li className="testimonials-item" key={item.id}>
              <div className="content-card" onClick={() => openModal(item)}>
                <figure className="testimonials-avatar-box">
                  <img src={item.avatar} alt={item.name} width="60" />
                </figure>
                <h4 className="h4 testimonials-item-title">{item.name}</h4>
                <div className="testimonials-text">
                  <p>{item.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials Modal */}
      {isModalOpen && (
        <div className="modal-container active" data-modal-container>
          <div className="overlay" onClick={closeModal} data-overlay></div>
          <section className="testimonials-modal">
            <button className="modal-close-btn" onClick={closeModal}>
              {/* <ion-icon name="close-outline"></ion-icon> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M289.94 256L435.22 110.74a16 16 0 0 0-22.62-22.62L256 233.38L110.74 88.1L88.1 110.74L233.38 256L88.1 401.26a16 16 0 0 0 22.62 22.62L256 289.94L401.26 435.22a16 16 0 0 0 22.62-22.62Z"/></svg>
            </button>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img src={modalContent.avatar} alt={modalContent.name} width="80" />
              </figure>
              <img src="/assets/images/icon-quote.svg" alt="quote icon" />
            </div>
            <div className="modal-content">
              <h4 className="h3 modal-title">{modalContent.name}</h4>
              <time dateTime={new Date(modalContent.date).toISOString().split('T')[0]}>{modalContent.date}</time>
              <div>
                <p>{modalContent.text}</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Clients Section */}
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            {/* <a href="#"> */}
              <img src="/assets/images/logo-1-color.svg" alt="client logo" />
              {/* </a> */}
          </li>
          {/* <li className="clients-item">
            <a href="#"><img src="/assets/images/logo-2-color.png" alt="client logo" /></a>
          </li>
          <li className="clients-item">
            <a href="#"><img src="/assets/images/logo-3-color.png" alt="client logo" /></a>
          </li>
          <li className="clients-item">
            <a href="#"><img src="/assets/images/logo-4-color.png" alt="client logo" /></a>
          </li>
          <li className="clients-item">
            <a href="#"><img src="/assets/images/logo-5-color.png" alt="client logo" /></a>
          </li>
          <li className="clients-item">
            <a href="#"><img src="/assets/images/logo-6-color.png" alt="client logo" /></a>
          </li> */}
        </ul>
      </section>
    </article>
  );
}

export default About;