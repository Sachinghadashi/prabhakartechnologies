import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <h1>
          Welcome to <span>Prabhakar Technologies</span>
        </h1>

        <p>
          We deliver innovative, scalable, and secure IT solutions
          to help businesses grow in the digital world.
        </p>

        <button className="hero-btn">
          Get Started
        </button>
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
