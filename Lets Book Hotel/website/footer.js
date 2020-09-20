 import React, {Component} from 'react';
     import {Link} from 'react-router-dom';
     
    class Footer extends Component{
 

    render=()=>{
return(
  <React.Fragment>
<div className="footer">
    <div >
    <Link to="#" className="fa fa-facebook"></Link>
     <Link to="#" className="fa fa-twitter"></Link>
      <Link to="#" className="fa fa-google"></Link>
       <Link to="#" className="fa fa-instagram"></Link>
</div>
    <div className="fo">
      <p><span className="color">Never say no when a client asks for something, even if it is the moon.</span></p>
      <div className="contact">
        Address:Kathmandu,Nepal
        Phone:9803955983,9863476636<br/>
        Email:www.bookme.com
      </div>
      </div><hr/>
<footer className="fot"><span className="bok">BOOKME</span><br/>Bookme.com&copy;2020||All Right Reserved</footer>
</div>
</React.Fragment>
);
}
}
export default Footer;