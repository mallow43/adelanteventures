const About = () => {
  return (
    <div className="about-page">

      <div className="container">
        <div className="about-content">
          <h1 className="about-title">About Us</h1>

          <p className="about-description">
            Adelante Ventures LLC was founded in 2018 by Manolo Sánchez, former
            Chairman & CEO of BBVA Compass. The firm is dedicated to investing
            in innovative fintech companies and venture capital funds that are
            transforming the financial services industry.
          </p>

          <div className="contact-section">
            <h2 className="contact-title">Get in Touch</h2>

            <div className="contact-grid">
              <div className="contact-card">
                <a
                  href="https://www.linkedin.com/in/manolosanchezrodriguez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  <i className="fab fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="contact-card">
                <a
                  href="mailto:info@adelante.ventures"
                  className="btn btn-outline-primary"
                >
                  <i className="fas fa-envelope"></i>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
