import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import img4 from "/Users/nishitasingh/tourandtravel/src/img/kkk.avif"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"
function Contact(){
    return(
        <div>
        <Navbar></Navbar>
       <Hero
       cName="hero-mid"
       ccName="hero-text"
       heroImg={img4}
       title="CONTACT US"
       //text="Choose your favourite destination"
       //btnText="Travel Plan"
       //url="/"
       btnClass="hide"
       />
       <ContactForm></ContactForm>
       <Footer></Footer>
    </div>
    )
   }
   export default Contact