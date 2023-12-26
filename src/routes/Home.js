import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import img2 from '/Users/nishitasingh/tourandtravel/src/img/golden.avif'
import Destination from "../components/Destination"
import Trip from "../components/Trips"
import Footer from "../components/Footer"

function Home(){
 return(
    <div>
        <Navbar></Navbar>
       <Hero
       cName="hero"
       ccName="hero-text"
       heroImg={img2}
       title="WHISPERS OF MYSTIC INDIA"
       text="Choose your favourite destination"
       btnText="Travel Plan"
       url="/"
       btnClass="show"
       />
       <Destination></Destination>
       <Trip></Trip>
       <Footer></Footer>
    </div>
 )
}
export default Home
