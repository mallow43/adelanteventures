import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page py-5">
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center py-5">
          <div className="col-12 col-lg-8 text-center">
            <div className="py-5 my-5">
              <h1 className="display-5 fw-semibold mb-4">
                Adelante Ventures LLC is an investor in US and international fintech disruptors.
              </h1>
              <p className="lead text-muted mb-5">
                Adelante Ventures LLC also invests in venture capital funds.
              </p>
              <Link 
                to="/about" 
                className="btn btn-primary btn-lg px-4 py-2"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
