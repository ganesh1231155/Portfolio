import React, { useState } from 'react';
// import { IoChevronDown, IoEyeOutline } from 'react-icons/io5';

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterSelectOpen, setIsFilterSelectOpen] = useState(false);

  const projects = [
    { id: 1, img: '/assets/images/project-1.png', title: 'Next Gen LMS(E-learning)', category: 'web development' },
    { id: 2, img: '/assets/images/project-2.png', title: 'DSA Visualizer.', category: 'web development' },
    { id: 3, img: '/assets/images/project-3.png', title: 'Jewellery Shop Application', category: 'Android App development' },
    { id: 4, img: '/assets/images/project-4.png', title: 'GYM Trainer', category: 'web development' },
    { id: 5, img: '/assets/images/project-5.png', title: 'Taskaty.', category: 'Android App development' },
    { id: 6, img: '/assets/images/project-6.png', title: 'Easy Chat', category: 'Android App development' },
    { id: 7, img: '/assets/images/project-7.png', title: 'Music Player', category: 'Android App development' },
    { id: 8, img: '/assets/images/project-8.png', title: 'FarmEase (E-Com.)', category: 'web development' },
    // { id: 9, img: '/assets/images/project-9.png', title: 'Arrival', category: 'web development' },
  ];

  const categories = ['All', 'Android App development', 'Applications', 'Web development'];

  const filteredProjects = projects.filter(project => {
    return selectedCategory === 'All' || project.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* Filter buttons for desktop */}
        <ul className="filter-list">
          {categories.map(category => (
            <li className="filter-item" key={category}>
              <button
                className={category === selectedCategory ? 'active' : ''}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {/* Filter select box for mobile */}
        <div className="filter-select-box">
          <button className={`filter-select ${isFilterSelectOpen ? 'active' : ''}`} onClick={() => setIsFilterSelectOpen(!isFilterSelectOpen)}>
            <div className="select-value">{selectedCategory}</div>
            <div className="select-icon">
              {/* <ion-icon name="chevron-down"></ion-icon> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M160 174L256 270L352 174L384 206L256 334L128 206L160 174z"/></svg>
            </div>
          </button>
          <ul className={`select-list ${isFilterSelectOpen ? 'active' : ''}`}>
            {categories.map(category => (
              <li className="select-item" key={category}>
                <button onClick={() => { setSelectedCategory(category); setIsFilterSelectOpen(false); }}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Project list */}
        <ul className="project-list">
          {filteredProjects.map(project => (
            <li className="project-item active" data-category={project.category} key={project.id}>
              {/* <a href="#"> */}
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    {/* <ion-icon name="eye-outline"></ion-icon> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M256 160c-79.51 0-144 64.47-144 144c0 112 112 288 144 288s144-176 144-288c0-79.53-64.49-144-144-144Zm0 224a80 80 0 1 1 80-80a80 80 0 0 1-80 80Z"/></svg>
                  </div>
                  <img style={{width:"250px",height:"250px",objectFit:"cover"}} src={project.img} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              {/* </a> */}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Portfolio;