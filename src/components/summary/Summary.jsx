import React, { useEffect , useNavigate} from 'react';
import './Summary.css';
import '.components/contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Summary = () => {

 const navigate = useNavigate();
 
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="summary-section" id="summary" data-aos="fade-up">
      <h2 className="summary-title">About Me</h2>
      <div className="summary-content">
        <p>
          Hello! I’m <strong>Karthik Gundelly</strong>, a passionate and aspiring <strong>Frontend Developer</strong> with a solid foundation in web technologies. 
          I have completed my <strong>B.Tech in Computer Science</strong> from Holymary Institute of Science and Technology (2021–2025), securing 80%.
        </p>

        <p>
          I’ve completed internships at <strong>Internship Studio</strong> and <strong>Code Alpha</strong>, gaining hands-on experience in building responsive web interfaces using <strong>HTML, CSS, JavaScript, and React</strong>.
        </p>

        <p>
          I have developed real-world projects such as a <strong>College Placement System</strong> and a <strong>Professional Portfolio</strong>, which are deployed on Vercel and showcase my ability to design user-centric, functional interfaces.
        </p>

        <p>
          My technical skills include:
          <ul>
            <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React</li>
            <li><strong>Tools:</strong> VS Code, Windows</li>
            <li><strong>Languages:</strong> Python (Basic), C (Basic), Node.js</li>
          </ul>
        </p>

        <p>
          I’m actively looking for opportunities to grow as a software developer and contribute to impactful projects while continuing to learn and evolve in this exciting field.
        </p>

            <button onClick={() => navigate('/contact')}>
      Contact Me
    </button>
      </div>
    </section>
  );
};

export default Summary;
