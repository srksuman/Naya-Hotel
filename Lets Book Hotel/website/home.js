import React, {Component} from 'react';
  import {Link} from 'react-router-dom';

    class Home extends Component{ 

render=()=>{
return(
	<>
	<div id="all">
<div className="contentheader">
<h1>Never say no when a client asks for something, even if it is the moon.<br/><span className="colorchange">bookme</span>
</h1>
<Link to="/booking"  className="btn btnfull"> <span>🖱️</span>click to book</Link>


</div>
</div>
<div id="background">
  <div className="containerhotelpic">
        <h1>❤️ 🧡 💛Hotels 💚 💙 💜</h1>
        <p>⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐</p>
      <main id="mainhotelpic">
      
        <div className="singles">
          <img id="imghotel"src="../images/1st.webp" alt=""/>
          <div className="contenthotel">
            <h3>Fairfield By Marriott</h3>
            <p>🏆 1st Most popular 4-star Hotel</p>
            <p>❤️Kathmandu</p>
            ⭐⭐⭐⭐
          </div>
        </div>

         <div className="singles">
          <img id="imghotel"src="../images/shankar.webp" alt=""/>
          <div className="contenthotel">
            <h3>Shanker</h3>
            <p>🏆 Most popular 2-star Hotel</p>
            <p>❤️Kathmandu</p>
            ⭐⭐
          </div>
        </div>

         <div className="singles">
          <img id="imghotel"src="../images/yakandyeti.webp" alt=""/>
          <div className="contenthotel">
            <h3>Hotel Yak and Yeti</h3>
            <p>🏆Popular 5-star Hotel</p>
            <p>❤️Kathmandu</p>
            ⭐⭐⭐⭐⭐
          </div>
        </div>

         <div className="singles">
          <img id="imghotel"src="../images/classic.webp" alt=""/>
          <div className="contenthotel">
            <h3>Classic Nepal</h3>
            <p>🏆Popular Hotel</p>
            <p>❤️Chitwan</p>
            ⭐⭐
          </div>
        </div>

         <div className="singles">
          <img id="imghotel"src="../images/h.jpg" alt=""/>
          <div className="contenthotel">
            <h3>OYO 198 Hotel Lake Diamond</h3>
            <p>🏆Popular 4-star Hotel</p>
            <p>❤️Pokhera</p>
            ⭐⭐⭐
          </div>
        </div>

         <div className="singles">
          <img id="imghotel"src="../images/hyatt.webp" alt=""/>
          <div className="contenthotel">
            <h3>Hyatt Regency Kathmandu</h3>
            <p>🏆Most popular 5-star Hotel</p>
            <p>❤️Kathmandu</p>
            ⭐⭐⭐⭐⭐
          </div>
        </div>

         <div className="singles">
          <img id="imghotel"src="../images/abother.webp" alt=""/>
          <div className="contenthotel">
            <h3>Hotel Kasthamandap Boutique</h3>
            <p>🏆 popular Hotel</p>
            <p>❤️Kathmandu</p>
            ⭐⭐⭐
          </div>
        </div>

         <div className="singles">
          <img id="imghotel"src="../images/next.webp" alt=""/>
          <div className="contenthotel">
            <h3>Hotel Himalaya</h3>
            <p>🏆 popular Hotel</p>
            <p>❤️Kathmandu</p>
            ⭐⭐
          </div>
        </div>

         <div className="singles">
          <img id="imghotel"src="../images/next1.webp" alt=""/>
          <div className="contenthotel">
            <h3>Kantipur Temple House</h3>
            <p>🏆 4-star Hotel</p>
            <p>❤️Lalitpur</p>
            ⭐⭐⭐⭐
          </div>
        </div>

         <div className="singles">
          <img id="imghotel"src="../images/next3.webp" alt=""/>
          <div className="contenthotel">
            <h3>Pokhara Eco Resort</h3>
            <p>🏆 4-star Hotel</p>
            <p>❤️Pokhera</p>
            ⭐⭐⭐⭐
          </div>
        </div>

         <div className="singles">
          <img id="imghotel"src="../images/next.webp" alt=""/>
          <div className="contenthotel">
            <h3>Heaven Hill</h3>
            <p>🏆 1st Most popular 4-star Hotel</p>
            <p>❤️Sindhupalchock</p>
            ⭐⭐⭐⭐⭐
          </div>
        </div>

         <div className="singles">
          <img id="imghotel"src="../images/next4.webp" alt=""/>
          <div className="contenthotel">
            <h3>Radisson Hotel Kathmandu</h3>
            <p>🏆5-star Hotel</p>
            <p>❤️Kathmandu</p>
            ⭐⭐⭐⭐⭐
          </div>
        </div>
   </main></div>
 </div><br/>
</>
	);

}
}
export default Home;