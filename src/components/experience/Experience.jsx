import React, { useEffect } from 'react';
import './Experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'Internship Studio',
      duration: 'July 2024 - August 2024',
      description:
        'Gained practical experience in frontend web development using HTML, CSS, JavaScript, and React. Understood how UI/UX is built and deployed.',
    },
    {
      title: 'Web Development Intern',
      company: 'Code Alpha',
      duration: 'May 25, 2025 - Ongoing (3 Months)',
      description:
        'Currently working as a frontend intern to build web projects using HTML, CSS, React, and exploring advanced UI integrations.',
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title" data-aos="fade-up">Internship Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" data-aos="fade-up" key={index}>
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <p className="duration">{exp.duration}</p>
            <p className="desc">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
