// AboutUs.js
import React from 'react';
import './AboutUs.css'; // Import your CSS file for About Us styles

function AboutUs() {
  return (
    <div id="about-us" className="about-us-container">
      <div className="history-section">
        <h2 className="history-title">Our History</h2>
        <p className="history-text">
        Sai Ram Services LLC is a distinguished pest control business based in Mobile, AL, with over a decade of expertise since our inception in 2010. 
        We have successfully handled over 700 cases, spanning residential and commercial sectors, addressing a wide range of pest control issues such as bedbugs and carpet pests. Throughout our journey, we have consistently delivered exceptional service, maintaining a strong focus on commitment, integrity, and quality for our valued customers.</p>
        <p className="history-text">
        We are a thriving and expanding pest control business based in Mobile, AL. Our commitment to excellence has driven us to continually grow our customer base, enhance our products, and expand our services. We are dedicated to providing top-notch customer service and ensuring the satisfaction and safety of our valued clients.

</p>
        <p className="history-text">
          We are a fully insured company that covers our clients with liability and workers' compensation insurance for any claim that may arise from operating on your property. But we strive to leave your property without any incident, and have never had a claim!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
