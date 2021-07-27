import React from 'react';
import image from "./home2.svg";
import Nav from './Nav.js';
import './Home.css';
const Home=()=>{
return(
 
  <section id="home">
     <Nav/>
  <div className="home">
    <div className="home-content">
       <h1>Welcome to Let Grow More</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus vehicula diam, vel cursus eros consequat id. Suspendisse aliquet vestibulum pretium. Proin gravida blandit placerat. Etiam scelerisque odio sed purus semper, sit amet egestas purus sagittis. Duis posuere rhoncus fringilla. Praesent vitae lacus sodales, tristique arcu in, mattis metus.</p>
       <button className="hbtn">READ MORE</button>
    </div>  
    <div className="home-image">
       <img src={image} alt="Home-img"></img>
    </div>  
    
  </div>
 
  </section>
);

};
export default Home;