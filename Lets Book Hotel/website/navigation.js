 import React, {Component} from 'react';

     import {Link} from 'react-router-dom';
     
    class Nav extends Component{
 mv=()=> {
  var x = document.getElementById("tnav");
  if (x.className === "nav") {
    x.className += " res";
  } else {
    x.className = "nav";
  }
}

    render=()=>{
return(
	<>
<div className="nav" id="tnav">
<img src="../images/LOGO.png" className="logo" alt=""/>
<div id="hov">

<Link to="/home" className="a"><span>🏘️</span>Home</Link>
<Link to="/about" className="a"><span>📚</span>About</Link>
<Link to="/contact" className="a"><span>📞</span>Contact</Link>
<Link to="/picture" className="a"><span>📸</span>Gallery</Link>
<Link to="/" className="a"><span>🕺🏻</span>Logout</Link>
</div>
  <a href="#" className="icon" onClick={this.mv}>

    <i id="faaa" className="fa fa-bars"></i>
  </a>
</div>
</>
);
}
}
export default Nav;