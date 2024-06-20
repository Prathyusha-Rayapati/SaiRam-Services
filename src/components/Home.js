import React from 'react';
import personImage from '../assets/person_pesticiding.jpg';
import logoImage from '../assets/logo.jpg'; // Replace with your actual image path
import './Home.css'; // Import your CSS file

function Home() {
  return (
    <div className="home-container">
      <div className="person-image-container">
        <img src={logoImage} alt="Logo" className="logo-image" />
      </div>
      <div className="estimate-container">
        <h1>Call Today for a Free Estimate</h1>
        <h1>(251) 376 8090</h1>
      </div>
      <div>
        <img src={personImage} alt="Person performing pest control" className="person-image" />
      </div>
      
    </div>
  );
}

export default Home;
