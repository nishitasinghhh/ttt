import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import img1 from '/Users/nishitasingh/tourandtravel/src/img/desert.avif'
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs"
function About(){
    return(
        <div>
        <Navbar></Navbar>
       <Hero
       cName="hero-mid"
       ccName="hero-text"
       heroImg={img1}
       title="ABOUT MYSTIC INDIA"
       //text="Choose your favourite destination"
       //btnText="Travel Plan"
       //url="/"
       btnClass="hide"
       />
       <AboutUs></AboutUs>
       <Footer></Footer>
    </div>
    )
   }
   export default About