import React from 'react';
import './App.css';
import blog1Image from './blogimg1.jpeg';
import blog2Image from './image-post2.jpeg';
import blog3Image from './image-post3.jpeg';

const BlogSection = () => {
  return (
    <div className="blog-section">
      <h2>My Recent Blogs </h2>
      <h4><a href="#">see all blogs 👉</a></h4>
      <div className="blog-container">
        <div className="blog">
          <img src={blog1Image} alt="Blog 1" />
          <p>
          "Fueling creativity with my computer and a comforting cup of coffee, I embark on a journey into the boundless depths of the digital realm. Together, let's uncover the endless possibilities that await, one sip and click at a time. Join me in this adventure as we navigate through innovation and inspiration, forging new paths and embracing the ever-evolving landscape of technology."
          </p>
        </div>
        <div className="blog">
          <img src={blog2Image} alt="Blog 2" />
          <p>
          "Brainstorming: The Art of Unleashing Creativity

In a world fueled by innovation, brainstorming stands as the cornerstone of creativity. It's the process of unleashing ideas, allowing them to flow freely like a river seeking its course. Whether alone or in a group, brainstorming ignites the spark of ingenuity, paving the way for groundbreaking solutions and inspired endeavors. So, grab your pen, gather your thoughts, and dive into the boundless sea of possibilities that await."
          </p>
        </div>
        <div className="blog">
          <img src={blog3Image} alt="Blog 3" />
          <p>
          "Notes are the lifelines of productivity and creativity. They capture fleeting ideas, organize thoughts, and serve as guides in our daily lives. Whether scrawled on paper or stored digitally, they ensure no insight is lost and provide a roadmap for progress. With notes, we harness the power of our ideas, stay organized, and unlock our full potential. In a world of constant motion, they are our steadfast companions, guiding us towards clarity and achievement."  
            
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
