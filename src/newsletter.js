import React from 'react';
import './App.css';

const NewsletterSection = () => {
  return (
    <div className="newsletter-section">
      <h2>🌟 Stay updated by subscribing to my newsletter. 🚀</h2>
      <div className="newsletter-content">
        <div className="newsletter-text">
          <p>🌟 Join our newsletter community to receive exclusive updates, behind-the-scenes insights, and special offers! Don't miss out on the latest trends, tips, and tricks to elevate your skills and stay ahead in the ever-evolving tech world. 🚀</p>
          <p>✨ Whether you're a seasoned developer or just starting your coding journey, our newsletter is tailored to inspire, inform, and empower you every step of the way. Dive into a world of innovation and creativity with us! ✨</p>
        </div>
        <div className="newsletter-form">
          <input type="email" placeholder="Your Email Address" />
          <button>Subscribe 🚀</button>
        </div>
      </div>
    </div>
  );
}

export default NewsletterSection;
