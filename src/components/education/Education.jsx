import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Education.css'; // Optional, if you want custom styling


const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="education-section">
      <h2 className="education-title" data-aos="fade-up">Education</h2>

      <div className="education-card" data-aos="fade-up">
     
        <div className="edu-content">
          <h3>B.Tech in CSE</h3>
          <p>Holy Mary Institute of Science and Technology</p>
          <p>2021 - 2025</p>
          <p>Secured: 80%</p>
        </div>
      </div>

      <div className="education-card" data-aos="fade-up">
   
        <div className="edu-content">
          <h3>Intermediate (MPC)</h3>
          <p>Telangana Model Junior College</p>
          <p>2019 - 2021</p>
          <p>Secured: 84%</p>
        </div>
      </div>

      <div className="education-card" data-aos="fade-up">
      
        <div className="edu-content">
          <h3>10th Standard</h3>
          <p>Telangana Model School</p>
          <p>Batch: 2019</p>
          <p>Secured: 95%</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
