import React from 'react';
import Introduction from './intro'; // Import Introduction component
import './App.css'; // Import CSS file for styling
import logoimg from './Screenshot 2024-02-06 171115.png';
import ProjectSection from './projects';
import BlogSection from './blogs';
import NewsletterSection from './newsletter';
import Footer  from './footer';
function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="left-links">
          <a href="/">Home 🏠</a>
          <a href="/blogs">Blogs 📝</a>
          <a href="/github">GitHub 💻</a>
          <a href="/twitter">Twitter 🐦</a>
        </div>
        <div className="right-logo">
          <img src={logoimg} alt="Business Logo" />
        </div>
      </nav>
      <Introduction />
      <ProjectSection/>
      <BlogSection/>
      <NewsletterSection/>
      <Footer />
    </div>
  );
}

export default App;


