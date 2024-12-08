import React, { useState, useEffect } from 'react';
import './Home.css'; // Import the updated CSS file
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faTelegram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';


const HomeTop = () => {
  const [text, setText] = useState('');
  const fullText = " Join an exclusive members-only community, get high-quality structured courses, memberships, and much more";

  useEffect(() => {
    let index = 0;
    let isDeleting = false;

    const typingInterval = setInterval(() => {
      setText((prev) => {
        if (!isDeleting) {
          return fullText.substring(0, index);
        } else {
          return fullText.substring(0, index);
        }
      });

      if (!isDeleting) {
        index++;
      } else {
        index--;
      }

      if (index === fullText.length) {
        isDeleting = true;
      } else if (index === 0) {
        isDeleting = false;
        setTimeout(() => {
          setText(''); // Clear text before starting again
        }, 500); // Pause duration before starting to type again
      }
    }, 40); // Adjust typing speed here

    return () => clearInterval(typingInterval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="container-homeTop flex">
      <div className="left-side-homeTop flex-1 flex flex-col justify-between" style={{marginTop:"-400px"}}>
        <div className="heading-homeTop text-center">
          <div className="fixed-box" >
            <p className="scale-animation">Learn with sanskar Saswat !</p>
          </div>
        </div>

       
        <div className='welcomeTo'>
        <span>  <h1 style={{fontSize:"40px", fontWeight:"700"}}>Welcome  To <span
  style={{
    background: "-webkit-linear-gradient(90deg, hsla(339, 100%, 55%, 1) 0%, hsla(197, 100%, 64%, 1) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block", 
  }}
>
  BollyWoodDecodingHits
</span>
</h1></span>
        </div> <br /> 
        <div className="typing-effect-homeTop text-center fixed-box-homeTop" >
          <p>Welcome to our webite ! {text}</p> 
        </div> <br />
        {/* <div className="home-top-left-bottom flex justify-around ">
          <Link to='internship' className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer">Internships</Link>
          <Link to='about' className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer">About Us</Link>
        </div> */}
        <div className="elementor-social-icons-wrapper elementor-grid">
  <span className="elementor-grid-item">
    <a
      className="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-animation-shrink"
      href="https://www.youtube.com/musicwitharijit"
      target="_blank"
      rel="noreferrer"
    >
      <span className="elementor-screen-only">Youtube</span>
      <FontAwesomeIcon icon={faYoutube} />
   </a>
  </span>
  <span className="elementor-grid-item">
    <a
      className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-animation-shrink"
      href="https://www.instagram.com/musicwitharijit/"
      target="_blank"
      rel="noreferrer"
    >
      <span className="elementor-screen-only">Instagram</span>
      <FontAwesomeIcon icon={faInstagram}/>    </a>
  </span>
  <span className="elementor-grid-item">
    <a
      className="elementor-icon elementor-social-icon elementor-social-icon-telegram elementor-animation-shrink"
      href="https://t.me/+Ra-bawrlUchkMDk1"
      target="_blank"
      rel="noreferrer"
    >
      <span className="elementor-screen-only">Telegram</span>
      <FontAwesomeIcon icon={faTelegram} />    </a>
  </span>
  <span className="elementor-grid-item">
    <a
      className="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-animation-shrink"
      href="https://www.facebook.com/musicwitharijit/"
      target="_blank"
      rel="noreferrer"
    >
      <span className="elementor-screen-only">Facebook</span>
      <FontAwesomeIcon icon={faFacebook} />    </a>
  </span>
  <span className="elementor-grid-item">
    <a
      className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-animation-shrink"
      href="https://twitter.com/musicwitharijit"
      target="_blank"
      rel="noreferrer"
    >
      <span className="elementor-screen-only">Twitter</span>
      <FontAwesomeIcon icon={faTwitter} />    </a>
  </span>
</div>

<div className="elementor-button-wrapper" style={{marginTop:"30px"}}>
  <a
    className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow"
    href="https://t.me/+Ra-bawrlUchkMDk1"
    target="_blank" rel="noreferrer"
  >
    <span className="elementor-button-content-wrapper" style={{width:"500px"}}>
      <span className="elementor-button-icon">
      </span>
      <FontAwesomeIcon icon={faTelegram} /> <span className="elementor-button-text">   Join my community</span>
    </span>
  </a>
</div>


      </div>
      <div className="right-side-homeTop flex-1 relative">
        <div className="absolute inset-0 clip-left-diagonal" style={{height:"600px", marginTop:"-20px"}}>
          <img
            className="w-full h-full object-cover"
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcfErvF6ctHhAv6r5cbi0F1BCY_DcsWggsBA&s"
            src="/Screenshot 2024-12-05 at 10.20.03 PM.png"
            alt=""
          />
        </div>
      </div>

      <div className="right-side-homeTop2" >
        <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcfErvF6ctHhAv6r5cbi0F1BCY_DcsWggsBA&s"
            alt="Image" />
      </div>
    </div>
  );
};

export default HomeTop;
