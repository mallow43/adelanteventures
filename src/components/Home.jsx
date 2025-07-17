import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <div className="home-hero">
          <h1 className="hero-title">Adelante Ventures LLC</h1>
          <p className="hero-subtitle">
            We are investors in US and international fintech disruptors. This
            firm also invests in venture capital funds.
          </p>
          <div className="hero-cta">
            <Link to="/about" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
