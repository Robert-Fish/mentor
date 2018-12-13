import React from 'react';
import ProfileImg from '../assets/Profile.jpg';

export default function About() {
  return (
    <div className="container mt-3 about">
      <div className="row">
        <div className="col-md-3 mb-2">
          <img src={ProfileImg} alt="" className="img-fluid" />
        </div>
        <div className="col-md-9">
          <h1 className="text-white">Welcome to my app!</h1>
          <p className="text-white">
            I built this app to give beginners, a list of resources. Not just any resources, but
            resources that we've all used. I believe in quality resources and this app aims to
            provide just that.
          </p>
        </div>
      </div>
    </div>
  );
}
