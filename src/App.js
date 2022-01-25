import React from 'react';
import Contact from './Contact/contact';
import Header from './Header/header';
import Home from './Home/home';
import Project from './Project/project';
import {Switch , Route} from 'react-router-dom'
const App = () => {
return(
  <div>
   <Header />
   <br/>
   <br/>
   <br/>
    <Switch >

      <Route path='/' component={Home} exact />
      <Route path='/project' component={Project} />
      
    
    </Switch> 
  </div>
)
}

export default App