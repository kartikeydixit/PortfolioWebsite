import React from 'react';
import './contact.css'
const Contact = () => {
return(
  <div className="contact-div">
    <h2>Hey , want to work together or have a chit chat ! let's connect</h2>
    
    <div className="card" data-aos="zoom-in">
        
       <div className="inside-card"> 
       <i class="far fa-5x fa-envelope"></i>
       <p>kartikeydixit1401@gmail.com</p>
       </div>
       <div className="inside-card"> 
       <i class="fas fa-5x fa-mobile-alt"></i>
       <p>88000XXXXX</p> </div>
       
       <div className="inside-card"> 
       <a href="https://github.com/kartikeydixit" target="_blank">
       <i class="fab fa-5x fa-github-square"></i>
       </a>
       <p>github.com/kartikeydixit</p> </div>

       <div className="inside-card"> 
       <a href="https://www.linkedin.com/in/kartikeydixit/" target="_blank">
       <i class="fab fa-5x fa-linkedin-in"></i>
       </a>
       <p>linkedin.com/in/kartikeydixit/</p> </div>
    
    </div>
  </div>
)
}

export default Contact