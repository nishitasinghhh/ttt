import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import img3 from "/Users/nishitasingh/tourandtravel/src/img/kashmir3.avif"
import Trip from "../components/Trips"
import Footer from "../components/Footer"
function Service(){
    return(
        <div>
        <Navbar></Navbar>
       <Hero
       cName="hero-mid-mid"
       ccName="hero-text"
       heroImg={img3}
       title="OUR SERVICES"
       //text="Choose your favourite destination"
       //btnText="Travel Plan"
       //url="/"
       btnClass="hide"
       />
       <Trip></Trip>
       <Footer></Footer>
    </div>
    )
   }
   export default Service