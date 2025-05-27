import React from 'react';
import { IoBookOutline } from 'react-icons/io5';

function Resume() {
  const skillsData = [
    { name: 'DSA', value: 85 },
    { name: 'Java (Spring Boot)', value: 90 },
    { name: 'React.js', value: 95 },
    { name: 'Node.js', value: 90 },
    { name: 'JavaScript', value: 90 },
    { name: 'TypeScript', value: 80 },
    { name: 'HTML, CSS', value: 95 },
    { name: 'MySQL, PostgreSQL', value: 90 },
    { name: 'MongoDB, Firebase', value: 85 },
    { name: 'GitHub, Docker', value: 80 },
    { name: 'API Integration', value: 85 },
    { name: 'C++', value: 70 },
    { name: 'Problem Solving', value: 80 },
    { name: 'XML and JSON handling', value: 80 },
  ]
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Education Timeline */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            {/* <ion-icon name="book-outline"></ion-icon> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M416 96H288V32H416ZM416 32h-32a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v64H96a48 48 0 0 0-48 48v288a48 48 0 0 0 48 48h320a48 48 0 0 0 48-48V144a48 48 0 0 0-48-48ZM144 192h224v16a16 16 0 0 1-16 16H160a16 16 0 0 1-16-16ZM368 256v16a16 16 0 0 1-16 16H160a16 16 0 0 1-16-16v-16ZM368 320v16a16 16 0 0 1-16 16H160a16 16 0 0 1-16-16v-16Z"/></svg>
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Master of Computer Applications - Appearing</h4>
            <h4 className="h4 timeline-item-title">Sinhgad Institute of Management, Pune</h4>
            <h4 className="h4 timeline-item-title">Savitribai Phule Pune University. </h4>
            <span>2023 — 2025</span>
            <p className="timeline-text">
              Focusing on advanced computing concepts, software development methodologies, and practical applications in diverse technologies.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Bachelor of Computer Applications - CGPA:8.84</h4>
            <h4 className="h4 timeline-item-title">New arts commerce and science collage, Ahmadnagar</h4>
            <h4 className="h4 timeline-item-title">Savitribai Phule Pune University.</h4>
            <span>2020 — 2023</span>
            <p className="timeline-text">
              Gained fundamental knowledge in computer science, programming languages, and database management, laying a strong base for software development.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">HSC (Higher Secondary Certificate) - 70.31%</h4>
            <h4 className="h4 timeline-item-title">New arts commerce and science collage, Ahmadnagar</h4>
            <h4 className="h4 timeline-item-title">Maharashtra State Board (SPPU).</h4>
            <span>2018 — 2020</span>
            <p className="timeline-text">
              Completed higher secondary education in Science (PCM. E.), building foundational knowledge across various subjects.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">SSC (Secondary School Certificate) - 83.80</h4>
            <h4 className="h4 timeline-item-title">Residential High School, Ahmadnagar</h4>
            <h4 className="h4 timeline-item-title">Maharashtra State Board (SPPU).</h4>
            <span>2017-2018</span>
            <p className="timeline-text">
              Completed secondary education, establishing a strong academic base.
            </p>
          </li>
        </ol>
      </section>

      {/* Experience Timeline */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            {/* <ion-icon name="book-outline"></ion-icon> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M416 96H288V32H416ZM416 32h-32a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v64H96a48 48 0 0 0-48 48v288a48 48 0 0 0 48 48h320a48 48 0 0 0 48-48V144a48 48 0 0 0-48-48ZM144 192h224v16a16 16 0 0 1-16 16H160a16 16 0 0 1-16-16ZM368 256v16a16 16 0 0 1-16 16H160a16 16 0 0 1-16-16v-16ZM368 320v16a16 16 0 0 1-16 16H160a16 16 0 0 1-16-16v-16Z"/></svg>
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Fullstack Web Developer.</h4>
            <h4 className="h4 timeline-item-title">Next Gen Software Hub Pvt. Ltd. Patana, India.</h4>
            <span>Feb. 2025 — Apr. 2025</span>
            <p className="timeline-text">
              <span className="expdot"></span>Developed and maintained responsive frontend features using React.js, contributing to an intuitive user experience for the e-learning platform.
            </p>
            <p className="timeline-text">
              <span className="expdot"></span>Implemented robust backend functionalities with Spring Boot, focusing on efficient data handling and API performance for various platform operations.
            </p>
            <p className="timeline-text">
              <span className="expdot"></span>Managed and optimized database operations utilizing MongoDB and Firebase, ensuring secure storage and retrieval of user and course-related data.
            </p>
            <p className="timeline-text">
              <span className="expdot"></span>Collaborated effectively within the development team on feature implementation, debugging, and quality assurance processes for the Learning Management System (LMS).
            </p>
          </li>
        </ol>
      </section>

      {/* Skills Section */}
      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {
            skillsData.map((data)=>{
              return(
                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">{data.name}</h5>
                    <data value="80">{data.value}%</data>
                  </div>
                  <div className="skill-progress-bg">
                    <div className="skill-progress-fill" style={{ width: data.value+`%` }}></div>
                  </div>
                </li>
              )
            })
          }
          
          
        </ul>
      </section>
    </article>
  );
}

export default Resume;