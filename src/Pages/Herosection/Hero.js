import React from "react";
import "./Hero.scss";
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div>
  <div className="Hero-section">
    {/* <img className="hero-vector" src={Herovector} alt="ab" /> */}

   
    <h1 className="head1">
      Let your <spam className="head1-spam"><u>hustle</u></spam> 
      speak for itself.    </h1>
      <div className="btn-hero">
      <button className="hustler-village"><b>hustlervillage.com/ </b>
      <spam>your-name</spam></button>

        <div>
          <Link to='/Login' className='s-link'>
        <button className="start">Start Hustling
        <spam className="hexode">&#x2192;</spam>
        </button> </Link> </div>
        
      </div>
      <p className="h-para">It's free, and takes less than a minute </p>
      </div>
      </div>
  );
}

export default Hero;



