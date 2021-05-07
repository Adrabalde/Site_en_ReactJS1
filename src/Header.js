import React, { useState } from "react";
//import "../Header.css";
import Logo from './logo.jpg';
import "./App.css";



const Header = (props) => {
 console.log("props",props)
  
  return (
    <div className="header">

      <div style={{ display: 'flex', alignSelf: 'flex-start', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flex: .6 }}>
        <div style={{ flex: .2 }}>
          <a href="/">
            <img src={Logo} className="logo" alt="logo" />  
          </a>
        </div>
        <div style={{ flex: .8, textAlign: 'left' }}>
          <h3 className="left-margin"> Le réseau des Instituts des Hautes Etudes  </h3>
        </div>
      </div>

      {/* <div className="logo-nav"> */}
        {/* <div className="logo-container">

          <a href="#">
            <img src={Logo} className="logo" alt="logo" />  
            <hr></hr>
          </a>
        </div>  */}
        
      {/* </div>    */}
        
      {/* <h3 className="left-margin"> Le réseau des Instituts des Hautes Etudes  </h3> */}
      <div className="flexCenter row dividedTop">
        <div className="option" >
            <p onClick={()=>props.switchView("home")}>ACCUEIL</p>
        </div>
        <div className="option" >
            <p onClick={()=>props.switchView("formations")}>FORMATIONS</p>
        </div> 
        <div className="option" >
            <p onClick={()=>props.switchView("pedagogie")}>PEDAGOGIE</p>
        </div>
      </div>
      {/* <div className="menu">      
        <ul className="nav-options">
            <li className="option" >
                <p onClick={()=>props.switchView("home")}>ACCUEIL</p>
            </li>
            <li className="option" >
                <p onClick={()=>props.switchView("formations")}>FORMATIONS</p>
            </li> 
            <li className="option" >
                <p onClick={()=>props.switchView("pedagogie")}>PEDAGOGIE</p>
            </li>
        </ul>     
      </div>   */}
            
    </div>
    
  );
};

export default Header;