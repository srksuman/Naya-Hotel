import React from 'react';

import './App.css';
import Nav from './website/navigation';
import Footer from './website/footer';
import Form from './website/contact';
import Picture from './website/picture';
import About from './website/about';
import Booking from './website/booking';
import Home from './website/home';
import Login from './website/login';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
function App() {
  return (
  	<Router>
    <div className="App">
     <Nav/>
     <Switch>
     <Route path="/Home"  component={Home}/>
     <Route path="/about" component={About}/>
      <Route path="/contact" component={Form}/>
      <Route path="/picture" component={Picture}/>
      <Route path="/" exact component={Login}/>
      <Route path="/booking" component={Booking}/>
     </Switch>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
