import React from 'react';
import residentialPestControl from '../assets/residential_pest_control.jpg';
import commercialPestControl from '../assets/commercial_pest_control.jpg';
import termiteControl from '../assets/termite_control.jpg';
import rodentControl from '../assets/rodent_control.jpg';
import bedBugControl from '../assets/bed_bug_control.jpg';
import carpetControl from '../assets/carpet_control.jpg';
import './Services.css'; // Import CSS file

function Services() {
  return (
    <div className="services">
      <div className="service">
        <h3>Residential Pest Control</h3>
        <img src={residentialPestControl} alt="Residential Pest Control" />
        <p>Our residential pest control services ensure that your home is free from unwanted pests.</p>
      </div>

      <div className="service">
        <h3>Commercial Pest Control</h3>
        <img src={commercialPestControl} alt="Commercial Pest Control" />
        <p>We provide pest control solutions for businesses of all sizes to ensure a safe and healthy environment.</p>
      </div>

      <div className="service">
        <h3>Termite Inspection and Control</h3>
        <img src={termiteControl} alt="Termite Control" />
        <p>Protect your property from termite damage with our comprehensive inspection and control services.</p>
        <p>Termites can cause significant structural damage to buildings. Our termite control services include thorough inspections, effective treatment methods, and prevention strategies to safeguard your property.</p>
      </div>

      <div className="service">
        <h3>Rodent Control</h3>
        <img src={rodentControl} alt="Rodent Control" />
        <p>Our rodent control services will help you eliminate and prevent rodent infestations.</p>
        <p>Rodents can spread diseases and cause damage to property. We offer humane rodent removal, effective trapping methods, and exclusion techniques to keep your home or business rodent-free.</p>
      </div>

      <div className="service">
        <h3>Bed Bug Control</h3>
        <img src={bedBugControl} alt="Bed Bug Control" />
        <p>Effective bed bug control solutions to eliminate bed bugs from your home or business.</p>
        <p>Bed bugs are persistent pests that can cause discomfort and affect your sleep. Our bed bug control services involve thorough inspections, targeted treatments, and follow-up measures to ensure complete eradication.</p>
      </div>

      <div className="service">
        <h3>Carpet Control</h3>
        <img src={carpetControl} alt="Carpet Control" />
        <p>Carpet control services to address and clean carpet pests, ensuring a clean and hygienic environment.</p>
        <p>Carpet pests can infest homes and businesses due to various reasons such as moisture, food particles, and lack of regular cleaning. Our carpet control services are designed to effectively clean and treat carpets, removing pests and preventing future infestations. We use eco-friendly products and advanced techniques to ensure thorough cleaning without harming your carpets.</p>
      </div>
    </div>
  );
}

export default Services;
