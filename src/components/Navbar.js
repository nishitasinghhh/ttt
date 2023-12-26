//import './components/NavbarStyles.css'
import React from "react";
import { Component } from "react";
import ReactDOM from 'react-dom'
 import '/Users/nishitasingh/tourandtravel/src/components/NavbarStyles.css'
 import { Link } from "react-router-dom"
import { MenuItems } from "./MenuItems";
class Navbar extends Component{
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
              <h1 className="navbar-logo">MYSTIC INDIA</h1>
              <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked?"fas fa-times":"fas fa-bars"}></i>
            
              </div>
              <ul className={this.state.clicked ? "nav-menu active":"nav-menu"}>
              {MenuItems.map((items,index)=>{
                   return (
                    
                 <li key={index}>
                    <Link to={items.url} className={items.cName}><i className={items.icon}></i>{items.title}</Link>
                  </li>
                    
                    
                   )
              })}
              <button>Sign Up</button>
              </ul>
            </nav>
        )
    }
    
}
export default Navbar