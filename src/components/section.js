import React from 'react';
import './ConsultingSection.css';
import image from '../assets/Rectangle 6 (1).png';
import icon1 from '../assets/skyline.svg';
import icon2 from '../assets/building.svg';
import icon3 from '../assets/wallpaper.svg';

function ConsultingSection() {
  return (
    
    <section className="consulting-section">
      <div className="yellow-tab">
        <h2>
          Consulting And Estimate For Your Project, <a href="#contact">Contact Us Today</a>
        </h2>
        <button className="get-quote-btn">Get A Quote</button>
      </div>
      <div className="container">
  <div className="row align-items-center consulting-wrapper">
    
    <div className="col-md-6">
      <img src={image} alt="Consulting Image" className="img-fluid consulting-image" />
    </div>
   
    <div className="col-md-6 consulting-section">
  <div className="service-boxes">
    <div className="service-box">
      <img src={icon1} alt="builder" className="icon" />
      <div>
        <h1>General Builder</h1>
        <p>
          Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis
          persequeris neglegentur, facete commodo ea use possit lucilius.
        </p>
      </div>
    </div>
    <div className="service-box">
      <img src={icon2} alt="house" className="icon" />
      <div>
        <h3>House Extensions</h3>
        <p>
          Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis
          persequeris neglegentur, facete commodo ea use possit lucilius.
        </p>
      </div>
    </div>
    <div className="service-box">
      <img src={icon3} alt="service" className="icon" />
      <div>
        <h3>Refurbishment</h3>
        <p>
          Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis
          persequeris neglegentur, facete commodo ea use possit lucilius.
        </p>
      </div>
    </div>
  </div>
</div>

  </div>
</div>
      
    </section>
  );
}

export default ConsultingSection;
