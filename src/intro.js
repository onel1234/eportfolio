// Introduction.js

import React from 'react';
import avatarimage from './Screenshot 2024-04-04 200148.png';

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="introduction-text">
        <h2>Hey there!  I'm Wathila 👋</h2>
        <p>
        

👨‍💻 Greetings! I am a dedicated software developer hailing from the beautiful landscapes of Sri Lanka. 💻 With a profound expertise in web development, I thrive on the exhilarating journey of unraveling intricate puzzles and crafting innovative solutions. 🧩 Beyond the realm of coding, I am an avid explorer of the great outdoors, finding solace in the tranquility of nature's embrace 🏞️, or indulging in the simple pleasures of a well-brewed cup of coffee. ☕️ Let us embark on this adventure of technology together, one line of code at a time! 💥
        </p>
      </div>
      <div className="avatar">
        <img src={avatarimage} alt="Avatar" />
      </div>
    </div>
  );
}

export default Introduction;

