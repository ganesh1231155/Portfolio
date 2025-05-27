import React from 'react';

function Blog() {
  const blogPosts = [
  {
    id: 1,
    img: '/assets/images/blog-1.png',
    category: 'Web Development',
    date: 'Jan 10, 2025',
    title: 'Mastering Full Stack: React.js & Spring Boot Synergy',
    text: 'Explore how React.js and Spring Boot can be combined to build powerful, scalable, and responsive web applications.',
  },
  {
    id: 2,
    img: '/assets/images/blog-2.png',
    category: 'Database Management',
    date: 'Dec 05, 2024',
    title: 'MongoDB vs. MySQL: Choosing the Right Database for Your Project',
    text: 'A comparative analysis of NoSQL (MongoDB) and Relational (MySQL) databases, guiding you to make informed decisions for your applications.',
  },
  {
    id: 3,
    img: '/assets/images/blog-3.png',
    category: 'Algorithms & Data Structures',
    date: 'Sep 15, 2024',
    title: 'Visualizing DSA: A Game-Changer for Learning Complex Concepts',
    text: 'Understand how interactive visualizations of Data Structures and Algorithms can significantly enhance comprehension and retention.',
  },
  {
    id: 4,
    img: '/assets/images/blog-4.png',
    category: 'API Integration',
    date: 'Jun 20, 2024',
    title: 'Integrating Third-Party APIs in Your React Applications',
    text: 'A practical guide to effectively consuming and integrating external APIs into your React.js projects for extended functionality.',
  },
  {
    id: 5,
    img: '/assets/images/blog-5.png',
    category: 'Mobile Development',
    date: 'Mar 12, 2024',
    title: 'Building Robust Android Apps with Firebase and Android Studio',
    text: 'Learn about leveraging Firebase for backend services and Android Studio for seamless development of mobile applications.',
  },
  {
    id: 6,
    img: '/assets/images/blog-6.png',
    category: 'Cloud & Deployment',
    date: 'Nov 01, 2023',
    title: 'Getting Started with Firebase for Web and Mobile Backends',
    text: 'An introduction to Firebase, its key features, and how it simplifies backend development for web and mobile applications.',
  },
];

  return (
    <article className="blog" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogPosts.map(post => (
            <li className="blog-post-item" key={post.id}>
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={post.img} alt={post.title} loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    <b className="blog-category">{post.date}</b>
                  </div>
                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.text}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Blog;