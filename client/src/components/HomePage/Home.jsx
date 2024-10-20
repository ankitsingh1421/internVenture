import React from 'react'
import HomeTop from './HomeTop'
import Chatbot from '../ChatBot'
import Internship from '../Internship/Internship'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'
import Services from '../Service/Services'
import Login from '../../Adminn/login/Login'
import Verify from 'components/Verify/Verify'

// This home function used for call all the files of the home page
const Home = () => {
  return (
    <>
      <div className="hometop-call">
        <HomeTop/>
        <About/>
        <Internship/>
        <Services/>
        <Contact/>
        <Chatbot/>
        <Footer/>
      </div>
    </>
  )
}

export default Home
