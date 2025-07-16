const About = () => {
  return (
    <div className="about-page py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="mb-5">
              <h1 className="display-5 fw-semibold mb-4">About Us</h1>
              <div className="lead text-muted">
                <p className="mb-4">
                  Adelante Ventures LLC was founded in 2018 by Manolo Sánchez, former Chairman & CEO of BBVA Compass. 
                  The firm is dedicated to investing in innovative fintech companies and venture capital funds that are 
                  transforming the financial services industry.
                </p>
              </div>
            </div>
            
            <div className="contact-actions mt-5 pt-4">
              <h2 className="h4 mb-4 text-center">Get in Touch</h2>
              <div className="row g-3 justify-content-center">
                <div className="col-12 col-md-4">
                  <a 
                    href="https://www.linkedin.com/in/manolosanchezrodriguez" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary d-flex align-items-center justify-content-center py-3"
                  >
                    <i className="fab fa-linkedin fs-4 me-2"></i>
                    <span>LinkedIn</span>
                  </a>
                </div>
                <div className="col-12 col-md-4">
                  <a 
                    href="mailto:info@adelante.ventures" 
                    className="btn btn-outline-primary d-flex align-items-center justify-content-center py-3"
                  >
                    <i className="fas fa-envelope fs-4 me-2"></i>
                    <span>Email</span>
                  </a>
                </div>
                <div className="col-12 col-md-4">
                  <a 
                    href="tel:+17138259000" 
                    className="btn btn-outline-primary d-flex align-items-center justify-content-center py-3"
                  >
                    <i className="fas fa-phone fs-4 me-2"></i>
                    <span>Call Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
