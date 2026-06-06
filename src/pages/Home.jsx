import SEO from "../components/SEO";
import "./Home.css";

import logo from "../assets/Prabhakar_Technologies.png";

const Home = () => {
  return (
    <div className="home">
      <SEO
  title="Prabhakar Technologies | Best IT Company in India"
  description="Prabhakar Technologies offers web development, mobile apps, cloud solutions, and IT consulting services in India."
  keywords="Prabhakar Technologies, IT company in India, web development, software company, mobile apps, cloud services"
  url="https://prabhakartechnologies.in"
/>


      {/* Hero Section */}
      <section className="hero">
        <img src={logo} alt="Prabhakar Technologies" className="hero-logo" />
        <h1>
          Welcome to <span>Prabhakar Technologies</span>
        </h1>

        <p>
          We deliver innovative, scalable, and secure IT solutions
          to help businesses grow in the digital world.
        </p>

      </section>


      {/* Mission Section */}
      <section className="mission">

        <div className="mission-card">
          <h3>🚀 Our Mission</h3>

          <p>
            To empower businesses through technology,
            innovation, and reliable digital solutions.
          </p>
        </div>

        <div className="mission-card">
          <h3>💡 Our Vision</h3>

          <p>
            To become a trusted global IT partner
            delivering world-class software services.
          </p>
        </div>

        <div className="mission-card">
          <h3>🤝 Our Values</h3>

          <p>
            Quality, Integrity, Customer Success,
            and Continuous Improvement.
          </p>
        </div>

      </section>

    </div>
  );
};

export default Home;
