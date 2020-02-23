import React from 'react';
import { Link, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Menu from "./Menu";


const Home = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <Menu />
      <div className="dark-overlay">
        <div className="landing-inner">
          <p className=" x-large w-75">
            Do Not Hasitate, You May Find Your Dream House.
          </p>
          <div className="buttons mt-5">
            <Link to="/properties" className="btn btn-success p-4 lead">
              Start Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};




export default Home;