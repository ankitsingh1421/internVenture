import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import './About.css';
import 'aos/dist/aos.css';
import Nav from '../Nav';
import Pawan from '../../TeamMemberImage/Pawan.jpeg'

const About = () => {
 

  const imageSets = [
    [
      { src: '', alt: 'Ankit' , role:"FOUNDER",url:"https://www.linkedin.com/in/ankitsingh1421/"},
      { src: Pawan, alt: 'Pawan',role:"CEO" },
      { src: '', alt: 'Vishesh ' ,role:"DIRECTOR"},
      { src: '/', alt: 'Sakshi ',role:"MANAGER" },

    ],
    [
      { src: 'https://d20rzw95v74l8a.cloudfront.net/aboutus/t6.webp', alt: 'pawan ' ,role:"manager"},
      { src: 'https://d20rzw95v74l8a.cloudfront.net/aboutus/t6.webp', alt: 'sakshi ' ,role:"hr"},
    ],
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);


  const handleButtonClick = (index) => {
    setCurrentIndex(index);


    if (intervalId) {
      clearInterval(intervalId);
    }


    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSets.length);
    }, 2000); // Change every 1 second

    setIntervalId(id);
  };

  useEffect(() => {

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  useEffect(() => {
    AOS.init({ easing: 'ease-in-sine', duration: 800, delay: 0 });
  }, []);

  return (
    <div id='about'>
      <Nav />
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center pt-36 hero-features-gap">
        <div className="w-[51rem] max-sm:w-[19rem] max-md:w-[35rem] max-lg:w-[42rem]">
          <h3 data-aos="fade-up" className="gradient-text font-heading leading-[3.8rem] text-[44px] max-sm:text-3xl font-semibold">
            On A Mission To Help Billions Through Providing Internships
          </h3>
          <h5 data-aos="fade-up" className="text-[22px] leading-8 max-sm:text-sm mt-3 ">
          We are a dynamic company offering valuable internships and creating innovative software solutions.
          </h5>
        </div>
      </div>

      {/* Features Section */}
      <div data-aos="fade-up" className="flex justify-evenly max-sm:flex-col p-20">
        {[ 'Hands-On Learning', 'Affordable Pricing', 'Efficient Implementation'].map((feature, index) => (
          <div key={index} className="flex flex-col mt-20">
            <img
              alt={feature}
              src={`https://d20rzw95v74l8a.cloudfront.net/aboutus/Icon%20(${index+1}).webp`}
              className="self-center"
              width={70}
              height={70}
            />
            <h3 className="mt-10 self-center text-[1.2rem] w-[100%] text-center ">{feature}</h3>
          </div>
        ))}
      </div>

      {/* Certification Section */}
      <div class="container">
    <div class="heading-section">
        <h2>We Are Registered And Certified</h2>
        <p>Incorporated with the Ministry of Corporate Affairs, we operate with full compliance and transparency.</p>
    </div>
    
    <div class="cards-wrapper">

        <div className="card">
            <img src="https://octanet.in/storage/2024/06/startup-india-logo1-02-1024x265.png" alt="Startup India Logo"/>
        </div>
        <div className="card">
            <img src="https://octanet.in/storage/2024/06/iso-9001-logo.png" alt="ISO 9001 Logo"/>
        </div>
        <div className="card">
            <img src="https://octanet.in/storage/2024/06/aicte.png" alt="AICTE Logo"/>
        </div>
        <div className="card">
            <img src="https://octanet.in/storage/2024/06/IAF-logo-300x193-compressed.webp" alt="IAF Logo"/>
        </div>


        <div className="card">
            <img src="https://octanet.in/storage/2024/06/startup-india-logo1-02-1024x265.png" alt="Startup India Logo"/>
        </div>
        <div className="card">
            <img src="https://octanet.in/storage/2024/06/iso-9001-logo.png" alt="ISO 9001 Logo"/>
        </div>
    </div>
</div>

      {/* Vision Section */}
      <div className="flex flex-col items-center mt-32 max-sm:p-5 max-sm:mt-10">
        <div className="flex justify-evenly max-sm:flex max-sm:flex-col max-sm:items-center mb-28">
          <img
            alt="Vision"
            src="https://d20rzw95v74l8a.cloudfront.net/aboutus/theme2.webp"
            className="self-center animate-up-down"
            width={260}
            height={260}

          />
          <div className="w-[55rem] max-lg:w-[40rem] max-md:w-[25rem] max-sm:w-[20rem] max-sm:mt-5 max-sm:justify-center">
            <h2 className="text-[42px] max-sm:text-[26px] font-heading mb-5">Our Vision</h2>
            <p className="text-[22px] max-sm:text-[16px] ">
            In the longer run, Tech for Trust aims to redefine the technology landscape by developing innovative software solutions and providing valuable internships. We focus on creating impactful technologies that address current deficiencies and empower the next generation of tech professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex justify-evenly flex-row-reverse mb-28 mx-5">
        <img
          alt="Mission "
          src="https://d20rzw95v74l8a.cloudfront.net/aboutus/theme1.webp"
          className="self-center animate-up-down"
          width={160}
          height={160}
        />
        <div className="w-[55rem] max-lg:w-[40rem] max-md:w-[25rem] max-sm:w-[20rem] max-sm:mt-5 max-sm:justify-center">
          <h2 className="text-[42px] max-sm:text-[26px] font-heading mb-5">Our Mission</h2>
          <p className="text-[22px] max-sm:text-[16px] ">
  We develop cutting-edge software solutions and provide impactful internships to empower talent and advance technology. Our goal is to drive innovation and career growth in the tech industry.
          </p>
        </div>
      </div>
      {/* Team Section */}
<div className="flex flex-col items-center justify-center text-center mt-20">
  <div className="w-[51rem] max-sm:w-[19rem] max-md:w-[35rem] max-lg:w-[42rem]">
    <h3 data-aos="fade-up" className="gradient-text font-heading leading-[3.8rem] text-[44px] max-sm:text-3xl font-semibold">
      Say Hello to Our Team Members
    </h3>
    {/* Removed margin from the h5 element to eliminate space */}
    <h5 data-aos="fade-up" className="text-[22px] leading-8 max-sm:text-sm mt-1">
      Meet the skilled professionals who drive our business forward
    </h5>
  </div>
</div>
<div className="relative flex flex-col items-center bg-[url('https://d20rzw95v74l8a.cloudfront.net/aboutus/tile-bg.webp')] bg-cover bg-center h-auto py-12 mt-3">
  {/* Image Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
    {imageSets[currentIndex].map((image, idx) => (
      <a
        key={idx}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center max-w-[14.7rem] border-colorD border-2 p-4 rounded-xl bg-bgColorA transition-transform duration-500 transform hover:scale-105 hover:translate-y-1"
        href={image.url}
      >
        {/* Display the image */}
        <img
          alt={image.alt}
          src={image.src}
          width="200"
          height="150"
          className="h-[150px] w-auto"
        />
        <p> {image.alt}</p>
        <p className='text-gray-500'>{image.role}</p>
      </a>
    ))}
  </div>

  <div className="flex mt-10 absolute bottom-5 space-x-2">
    <button
      className="w-3 h-3 rounded-full border-2 border-lightdark"
      onClick={() => handleButtonClick(0)}
    ></button>
    <button
      className="w-3 h-3 rounded-full bg-lightGrey"
      onClick={() => handleButtonClick(1)}
    ></button>
  
  </div>
</div>

    </div>
  );
};

export default About;