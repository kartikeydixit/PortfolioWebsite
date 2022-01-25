import React from 'react';
import './home.css'
import webdev_icon from './../assets/webdev_icon.svg';
import Contact from '../Contact/contact';
const Home = () => {
return(
  <div className="container">
     <div className="header">
       <h1>Hi , I'm Kartikey Dixit. I am a Frontend developer (and also Backend Developer) as well as College Student. </h1>
     </div>
     <br/><br/>

     <div className="icon">
      <img src={webdev_icon} />
     </div>
     <div className="intro">
       <h3>About</h3>
       <p>Hey , Website development is my passion and i love to make frontend websites majorly, i have also worked on backend  projects . Currently i work as a freelance web developer online and i also love creating new product , so if you have any idea then maybe we could work together to bring it to life through some code ;)</p>
        
        <p>I am persuing my B.Tech from MNNIT Allahabad , and Currently i am in my second year of college.</p>                    
       <h3>Services</h3>
         
        <p><b>Frontend Developer</b></p>
        
        <ul>
         <li>React Js</li>
         <li>Bootstrap</li>
         <li>Javascript</li>
         <li>Html , Css</li>
        </ul>

        <p><b>Backend Developer</b></p>

        <ul>
        <li>Node Js </li>
        <li>Mongo DB</li>
        <li>Javascript</li>
       </ul>
     </div>
     <Contact />
  </div>

  
)
}

export default Home