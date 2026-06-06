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

        <hr style={{ borderColor: 'var(--glass-border)', margin: '40px 0' }} />

        <h2 style={{ color: 'var(--accent-primary)', marginBottom: '25px' }}>Meet Our Team</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          
          {/* Founder & CEO */}
          <div style={{ background: 'var(--glass-bg)', padding: '25px', borderRadius: '16px', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 15px auto', color: '#fff' }}>
              👨‍💻
            </div>
            <h3 style={{ color: '#fff', marginBottom: '5px' }}>Sachin Ghadashi</h3>
            <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '15px' }}>Founder & CEO</p>
            <p style={{ fontSize: '0.9rem' }}>Visionary leader driving innovation and delivering robust IT solutions for modern businesses.</p>
          </div>

          {/* Sales and Marketing */}
          <div style={{ background: 'var(--glass-bg)', padding: '25px', borderRadius: '16px', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #10b981, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 15px auto', color: '#fff' }}>
              📈
            </div>
            <h3 style={{ color: '#fff', marginBottom: '5px' }}>Sales & Marketing</h3>
            <p style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '15px' }}>Growth & Strategy</p>
            <p style={{ fontSize: '0.9rem' }}>Dedicated team focused on client acquisition, market expansion, and brand visibility.</p>
          </div>

        </div>

        <hr style={{ borderColor: 'var(--glass-border)', margin: '40px 0' }} />

        <h2 style={{ color: 'var(--accent-primary)', marginBottom: '15px' }}>Our Clients</h2>
        <p style={{ marginBottom: '15px' }}>
          We are proud to work with a growing list of innovative startups, growing enterprises, and local businesses.
        </p>
        <ul style={{ listStyleType: 'none', padding: '0', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <li style={{ background: 'var(--glass-bg)', padding: '10px 20px', borderRadius: '8px', border: '1px solid var(--glass-border)', color: '#fff', fontWeight: '500' }}>
            🤝 Dilraj Kirana Store
          </li>
        </ul>

      </div>
    </div>
  );
};

export default About;
