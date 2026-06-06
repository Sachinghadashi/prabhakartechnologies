const Careers = () => {
  return (
    <div className="page">
      <h1>Careers</h1>

      <p style={{ marginBottom: '30px' }}>Join our growing team!</p>

      <div style={{ background: 'var(--glass-bg)', padding: '40px', borderRadius: '16px', border: '1px solid var(--glass-border)', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🚀</div>
        <h3 style={{ color: '#fff', marginBottom: '10px' }}>No Current Openings</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
          We currently don't have any open positions, but we are always looking for talented individuals. Please check back later or send us your resume for future opportunities!
        </p>
        <a
          href="mailto:prabhakartechnologies2@gmail.com"
          style={{ display: 'inline-block', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', color: '#fff', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}
        >
          📧 Send Your Resume
        </a>
      </div>
    </div>
  );
};

export default Careers;
