import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from "../assets/Rectangle 10.png";
import slide2 from "../assets/Rectangle 7.png";
import slide3 from "../assets/Rectangle 9.png";
import '../styles/Banner.css';

const Banner = () => {
  const settings = {
    dots: true, // Enable dots navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <div className="custom-dot"></div> // Custom dot element
    ),
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative">
          <img
            className="d-block w-full h-96 object-cover"
            src={slide1}
            alt="First slide"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-60">
            <h1 className="text-5xl font-bold mb-4">We Do Big Things With Big Ideas</h1>
            <div className="text-xl text-left">
              Talk To Our Experts And Get Your Dream Home Done. If You Dream Of 
               Geography And Views Of Land That You Love
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4">
              Explore Now
            </button>
            {/* <img src='C:\Users\snehal\Desktop\BuildX\buildx\src\assets\Group 1.png' alt='dots'></img> */}
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            className="d-block w-full h-96 object-cover"
            src={slide2}
            alt="Second slide"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-60">
            <h1 className="text-5xl font-bold mb-4">We Do Big Things With Big Ideas</h1>
            <p className="text-xl text-center">
              Talk To Our Experts And Get Your Dream Home Done. If You Dream Of
              Designing A New Home That Takes Full Advantage Of The Unique
              Geography And Views Of Land That You Love
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4">
              Explore Now
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img
            className="d-block w-full h-96 object-cover"
            src={slide3}
            alt="Third slide"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-60">
            <h1 className="text-5xl font-bold mb-4">We Do Big Things With Big Ideas</h1>
            <p className="text-xl text-center">
              Talk To Our Experts And Get Your Dream Home Done. If You Dream Of
              Designing A New Home That Takes Full Advantage Of The Unique
              Geography And Views Of Land That You Love
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4">
              Explore Now
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
