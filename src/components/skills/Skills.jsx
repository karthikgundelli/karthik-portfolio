import React, { useEffect, useState } from 'react';
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skillsData = [
    {
      name: 'HTML',
      description: 'Used to structure the web pages with semantic tags and responsive layout support.',
    },
    {
      name: 'CSS',
      description: 'Used to style HTML elements, implement responsive designs using Flexbox and Grid.',
    },
    {
      name: 'JavaScript',
      description: 'Adds interactivity and logic to web pages, including DOM manipulation and APIs.',
    },
    {
      name: 'React',
      description: 'Library for building user interfaces using reusable components and hooks.',
    },
    {
      name: 'VS Code',
      description: 'Code editor used for developing applications with useful extensions and debugger.',
    },
    {
      name: 'Windows OS',
      description: 'Primary operating system used for development, deployment, and testing.',
    },
    {
      name: 'Python (Basic)',
      description: 'Basic understanding for scripting and problem-solving logic.',
    },
    {
      name: 'C (Basic)',
      description: 'Used to understand low-level programming and memory concepts.',
    },
    {
      name: 'Node.js',
      description: 'Used to build scalable backend APIs with JavaScript runtime environment.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title" data-aos="fade-up">Skills I'm Working With</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div
            className={`skill-card ${openIndex === index ? 'open' : ''}`}
            key={index}
            data-aos="zoom-in"
            onClick={() => toggleCard(index)}
          >
            <h3>{skill.name}</h3>
            {openIndex === index && <p className="skill-description">{skill.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
