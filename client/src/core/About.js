import React from 'react';
import img from '../img/about.jpg'
import Menu from './Menu'

const AboutPage = () => {
  return (
    <div >
      <Menu />
      <div id='contt' className="container">
        <div className="row ">

          <div className="col-md-12 m-auto ">
            <h1 className="display-5 mb-5">It's our pleasure to serve you</h1>

          </div>

          <div class="col-md-6 mt-3" data-aos="fade-up" data-aos-delay="100">
            <img src={img} alt="Ima" className=" rounded" />
          </div>
          <div className="col-md-5 ml-auto" data-aos="fade-up" data-aos-delay="200">

            <h2 className="h1">Our Company</h2>


            <p className="lead">Illum repudiandae ratione facere explicabo. Consequatur dolor optio iusto, quos autem voluptate ea? Sunt laudantium fugiat, mollitia voluptate? Modi blanditiis veniam nesciunt architecto odit voluptatum tempore impedit magnam itaque natus!</p>
            <p><a href="#" className="btn btn-outline-primary rounded-0 py-2 px-5">Read More</a></p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutPage;
