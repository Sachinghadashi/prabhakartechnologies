import SEO from "../components/SEO";
const About = () => {
  return (
    <div className="page">
      <SEO
        title="About Us | Prabhakar Technologies"
        description="Learn about Prabhakar Technologies, our mission, vision, and professional IT services."
        keywords="about Prabhakar Technologies, IT company India"
        url="https://prabhakartechnologies.in/about"
      />
      <h1>About Us</h1>

      <div className="about-content" style={{ marginTop: '20px', lineHeight: '1.8' }}>
        <p>
          Welcome to <strong>Prabhakar Technologies</strong>, a dynamic IT startup founded in <strong>2026</strong> by <strong>Sachin Ghadashi</strong>. 
          We are driven by a passion for innovation and a commitment to helping businesses thrive in the digital age.
        </p>
        
        <p style={{ marginTop: '15px' }}>
          As a forward-thinking technology partner, we specialize in delivering high-quality digital solutions tailored to your unique needs. Our core expertise includes:
        </p>

        <ul style={{ listStyleType: 'none', padding: '0', marginTop: '15px', marginBottom: '20px' }}>
          <li style={{ marginBottom: '10px' }}>🌐 <strong>Website Development:</strong> Crafting stunning, responsive, and high-performance websites.</li>
          <li style={{ marginBottom: '10px' }}>📱 <strong>App Development:</strong> Building intuitive and engaging mobile applications.</li>
          <li style={{ marginBottom: '10px' }}>📊 <strong>Data Analytics:</strong> Transforming raw data into actionable insights to drive smart business decisions.</li>
        </ul>

        <p>
          At Prabhakar Technologies, our mission is to empower brands with cutting-edge technology, ensuring growth, efficiency, and success in an ever-evolving digital landscape. Let's build the future together!
        </p>
      </div>
    </div>
  );
};

export default About;
