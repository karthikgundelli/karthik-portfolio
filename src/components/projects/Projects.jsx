import React, { useEffect } from 'react';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projectList = [
    {
      title: 'College Placement System',
      tech: 'HTML, CSS, JavaScript, React',
      desc: `This is my academic major project developed entirely using frontend technologies. 
      It helps college students prepare for placement drives by offering aptitude tests, mock interviews, 
      and resume building tools—all for free.`,
      deploy: 'https://college-placement.vercel.app', // Replace with your actual Vercel link
    },
    {
      title: 'Professional Portfolio',
      tech: 'HTML, CSS, React',
      desc: `This personal portfolio site is designed to showcase user skills, experience, and projects. 
      It’s fully responsive and deployed on Vercel to make it easily shareable with recruiters.`,
      deploy: 'https://my-portfolio.vercel.app', // Replace with your actual Vercel link
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title" data-aos="fade-up">Projects I've Worked On</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" data-aos="fade-up" key={index}>
            <h3>{project.title}</h3>
            <p className="tech-stack"><strong>Tech Stack:</strong> {project.tech}</p>
            <p className="description">{project.desc}</p>
            <a href={project.deploy} target="_blank" rel="noreferrer" className="project-link">
              View Live &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
