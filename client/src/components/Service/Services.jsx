import React , { useEffect } from 'react';
import './Services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

  useEffect(() => {
    AOS.init({ easing: 'ease-in-sine', duration: 800, delay: 0 });
  }, []);

  return (
    <section id="services" className="services-section py-24 px-4 lg:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12" data-aos="fade-up">Our Services</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12" data-aos="fade-up">
          We provide career-enhancing internship opportunities for students and freelancers, along with top-notch project services. Our mission is to empower freshers and guide them in launching successful careers while delivering high-quality freelance solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" id="service1">
          {/* Internship Program Card */}
          <div className="service-card">
            <div className="icon-container">
              <i className="fas fa-user-graduate text-5xl text-blue-500"></i>
            </div>
            <h3 className="text-2xl font-semibold my-4">Internship Programs</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Providing hands-on internships tailored for students. Gain real-world experience and enhance your technical and professional skills.
            </p>
          </div>

          {/* Freshers Training Card */}
          <div className="service-card">
            <div className="icon-container">
              <i className="fas fa-briefcase text-5xl text-green-500"></i>
            </div>
            <h3 className="text-2xl font-semibold my-4">Freshers Training</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Aimed at recent graduates, our comprehensive training helps bridge the gap between academia and the professional world.
            </p>
          </div>

          {/* Freelancing Services Card */}
          <div className="service-card">
            <div className="icon-container">
              <i className="fas fa-project-diagram text-5xl text-orange-500"></i>
            </div>
            <h3 className="text-2xl font-semibold my-4">Freelance Project Services</h3>
            <p className="text-gray-700 dark:text-gray-300">
              From small startups to large enterprises, we offer professional freelancing services, ensuring on-time project delivery with quality results.
            </p>
          </div>

          {/* Career Guidance Card */}
          <div className="service-card">
            <div className="icon-container">
              <i className="fas fa-chalkboard-teacher text-5xl text-purple-500"></i>
            </div>
            <h3 className="text-2xl font-semibold my-4">Career Guidance</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Helping students and freshers with mentorship, career advice, and placement assistance to ensure you land your dream job.
            </p>
          </div>

          {/* Freelancing Platform Assistance Card */}
          <div className="service-card">
            <div className="icon-container">
              <i className="fas fa-laptop-code text-5xl text-red-500"></i>
            </div>
            <h3 className="text-2xl font-semibold my-4">Freelancing Platform Assistance</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Guiding freelancers on how to excel on platforms like Upwork, Fiverr, and more, helping them secure and successfully complete projects.
            </p>
          </div>

          {/* Project Management Card */}
          <div className="service-card">
            <div className="icon-container">
              <i className="fas fa-tasks text-5xl text-yellow-500"></i>
            </div>
            <h3 className="text-2xl font-semibold my-4">Project Management</h3>
            <p className="text-gray-700 dark:text-gray-300">
              We handle complete project management, ensuring the seamless execution of all phases from initiation to delivery, tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
