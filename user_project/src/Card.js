import './Card.css';
import React from 'react';
import {
  faTwitter,faInstagram,faFacebook,faLinkedin
}from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheckCircle, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
const Card =({userData})=>{
  return(
    // <i class="fas fa-user"></i>
    <div className="cards">
    <div className="card-title">
      <div className="card-name">
       <h1><FontAwesomeIcon icon={faUser} color="rgb(255,255,255)"  /> {userData.first_name} </h1> 
       <h1> {userData.last_name} <FontAwesomeIcon icon={faCheckCircle} color="rgb(19, 167, 241)" /> </h1>
      </div>
      <div className="card-email">
       <h2><FontAwesomeIcon icon={faEnvelope} color="rgb(255,255,255)" /> {userData.email}</h2>
    </div>
    <div className="icon">
        <FontAwesomeIcon icon={faFacebook} color="rgb(255,255,255)" />
        <FontAwesomeIcon icon={faTwitter} color="rgb(255,255,255)" />
        <FontAwesomeIcon icon={faInstagram} color="rgb(255,255,255)" />
        <FontAwesomeIcon icon={faLinkedin} color="rgb(255,255,255)"/>
    </div>
    </div>
    <div className="card-img">
      <img src={userData.avatar} alt='avatar' />
    </div>
    
  </div>
  );
};
export default Card;