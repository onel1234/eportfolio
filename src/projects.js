import React from 'react';
import './App.css';
import img1 from './th (1).jpeg';
import img2 from './th (2).jpeg';
import img3 from './th.jpeg';

const ProjectSection = () => {
  return (
    <div className="project-section">
      <h2><p></p><center>My Recent Projects</center></h2>
      <div className="project-row" style={{ backgroundColor: 'black' }}>
        <div className="project-content">
        <div className="project-image">
            <img src={img1} alt="Project 1" />
          </div>
          <div className="project-details">
            <h3 style={{ color: 'white' }}><br></br>WEBSITE FOR A RESTAURANT</h3>
            <div className="technologies">
              <div className="technology" style={{ backgroundColor: '#FF5733' }}>PHP</div>
              <div className="technology" style={{ backgroundColor: '#5F9EA0' }}>JavaScript</div>
              <div className="technology" style={{ backgroundColor: '#DAA520' }}>HTML</div>
              <div className="technology" style={{ backgroundColor: '#8A2BE2' }}>CSS</div>
              <div className="technology" style={{ backgroundColor: '#32CD32' }}>bootstrap</div>
            </div>
            <p>This a sleek website crafted for a lively restaurant. It offers visitors easy navigation, showcasing the restaurant's menu, ambiance, and events. With a user-friendly design, patrons can effortlessly explore offerings and make reservations for a delightful dining experience.To visit the github repository <a href="https://github.com/onel1234/restaurant-sudda">Click Here</a>
</p>
          </div>
          
        </div>
      </div>
      <div className="project-row" style={{ backgroundColor: 'black' }}>
        <div className="project-content">
          <div className="project-image">
            <img src={img2} alt="Project 2" />
          </div>
          <div className="project-details">
            <h3>SMART FARMHOUSE DESIGN AND BUILD</h3>
            <div className="technologies">
              <div className="technology" style={{ backgroundColor: '#FF5733' }}>Boolean</div>
              <div className="technology" style={{ backgroundColor: '#5F9EA0' }}>Arduno</div>
              <div className="technology" style={{ backgroundColor: '#DAA520' }}>electric circuits</div>
            </div>
            <p>This is an innovative smart farm house, meticulously crafted using logic gates. This cutting-edge design incorporates advanced technology to automate various tasks, ensuring efficient management of the farm. With its intelligent systems, the smart farm house optimizes resource utilization, enhances productivity, and offers sustainable solutions for modern agriculture practices.To visit the github repository <a href="https://github.com/onel1234/SMART-FARMHOUSE">Click Here</a></p>
          </div>
        </div>
      </div>
      <div className="project-row" style={{ backgroundColor: 'black' }}>
        <div className="project-content">
          <div className="project-image">
            <img src={img3} alt="Project 3" />
          </div>
          <div className="project-details">
            <h3>LMS FOR A TUTION CLASS USING C#</h3>
            <div className="technologies">
              <div className="technology" style={{ backgroundColor: '#FF5733' }}>C#</div>
              <div className="technology" style={{ backgroundColor: '#5F9EA0' }}>.NET framework</div>
              <div className="technology" style={{ backgroundColor: '#DAA520' }}>windows WPF forums</div>
              <div className="technology" style={{ backgroundColor: '#8A2BE2' }}>bootstrap</div>
              <div className="technology" style={{ backgroundColor: '#32CD32' }}>visual studio</div>
            </div>
            <p> Learning Management System (LMS) built for a tuition class using C# and .NET framework. It facilitates seamless interaction between students and instructors, offering features like course materials, assignments, attendance tracking, and real-time messaging. This user-friendly platform streamlines learning and enhances collaboration between teachers and students.To visit the github repository <a href="https://github.com/onel1234/LMS-FOR-A-TUTION-CLASS-USING-C-">Click Here</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
