import React, { useState, useEffect, useRef } from 'react';
import InternData from '../../data/internCoursedata.json'
import InternshipCards from './InternshipCards'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Internship.css';
import Typed from 'typed.js';


const Internship = () => {

 const element = useRef(null);


 useEffect(() => {

 const typed = new Typed(element.current, {
  strings: ["Freshers", "Persuing/Collage Students"],
  typeSpeed: 50,
  backSpeed: 20,
  loop: true,
});

return  () => {
  typed.destroy();
}
}, []);


// for scrolling

useEffect(()=>{
  AOS.init({ easing:"ease-in-shine" , duration:800 , delay:0 })
},[])

  return (
    <>
    <div id='internship'  >
      
      </div>
          <div className='intern-container mt-20'>
      <header className='h-28  content-center text-center ml-6 mr-6 rounded-lg' data-aos='fade-up'>
        <p className=' text-5xl font-bold'>
          Internships for <span className='element' ref={element}></span>
        </p>
      </header>
      <div className="intern-training-info flex justify-around pt-8 pb-8 ml-6 mr-6 rounded-lg mt-1">
  <div className='p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg internship-available shadow-lg hover:shadow-xl transition-shadow duration-300'>
    <p className='text-white text-center text-lg font-semibold tracking-wide'>
      Work from Home Internships
    </p>
  </div>
  <div className='p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg internship-available shadow-lg hover:shadow-xl transition-shadow duration-300'>
    <p className='text-white text-center text-lg font-semibold tracking-wide'>
      Internship With Training
    </p>
  </div>
</div>

      <div className="intern-card-container ">
        {
            InternData.map((data)=>(
            <InternshipCards key={data.id} img={data.img} title={data.title}/>
        ))
    }
    </div>
    </div>
    </>
  );
};

export default Internship;
