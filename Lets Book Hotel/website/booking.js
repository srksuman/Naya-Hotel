    import React, {Component} from 'react';
  import {Link} from 'react-router-dom';
  import axios from 'axios';
    class Booking extends Component{

  constructor(){
        super()
        this.state={Booking:[]}

      }

           componentDidMount = () => {
        fetch('http://localhost:3001/Booking')
        .then( response => response.json())
        .then( data => {
          this.setState({Booking: data})
        })
        .catch(error => {console.log(error)})

    }

    submit=(e)=>
    {
      let data = {
       Fname:document.querySelector('#fnn').value,
      Lname:document.querySelector('#lnn').value,
       email:document.querySelector('#emaill').value,
      option:document.querySelector('#select').value,
       number:document.querySelector('#numberr').value,
      checkin:document.querySelector('#ci').value,
      checkout:document.querySelector('#co').value,
      adult:document.querySelector('#ad').value,
      children:document.querySelector('#ch').value
      }
      console.log(data)
      e.preventDefault()
      axios.post('http://localhost:3001/Booking',data)
      .then()
      .catch()
 alert('Booking successful..THank you' +document.querySelector('#fnn').value + ' for booking'+document.querySelector('#select').value + ' hotel' );

    }


 //      booking = (e) => {
 //        if(localStorage.booking === undefined){
 //      localStorage.setItem('booking', JSON.stringify([]));
 //    }

 //      let form = document.getElementById("booking");
 //      e.preventDefault();
 //      let storage = JSON.parse(localStorage.getItem('booking'));
 //      let Fname = document.querySelector('#fnn').value
 //      let Lname = document.querySelector('#lnn').value
 //      let email = document.querySelector('#emaill').value
 //      let select = document.querySelector('#select').value
 //      let number = document.querySelector('#numberr').value
 //      let checkin = document.querySelector('#ci').value
 //      let checkout = document.querySelector('#co').value
 //      let adult = document.querySelector('#ad').value
 //      let children = document.querySelector('#ch').value 
 //      let ob = {'Fname':Fname,'Lname':Lname,'email':email,'select':select,'number':number,'checkin':checkin,'checkout':checkout,'adult':adult,'children':children};
 //      storage.push(ob);
 //      localStorage.setItem('booking', JSON.stringify(storage));
 //      console.log(storage);
 //       alert('Booking successful');
 // }

      render = () => {
        const {Booking} = this.state

      return (
        <>
        <style>
         {`.nav {
            display:none;
          }
#namef{
  float:left;
}
          `}
        </style>
<div className="sliderdiv"></div>
        <div id="alll">
        <div className="form">
        <form id="booking" name="myform" method="POST" onSubmit={this.submit} >
          <fieldset>
            <legend id="lgd"><span className="colorchange"><b>HOTEL BOOKING</b></span></legend>
           <div id="frm"><div id="namef"><span>👦🏻</span>First Name:</div><br/>
            <input id="fnn" type="text" name="name" placeholder="suman" required /><br/>
            <div id="namef"><span>👳🏻‍♀️</span>Last Name:</div><br/>
            <input id="lnn" type="text" name="lastname" placeholder="khanal" required /><br/>
           <div id="namef"><span>👩🏼‍💻</span>Email:</div><br/>
            <input id="emaill" type="email" name="email" placeholder="abc@domain.com" required/><br/>
            <div id="namef"><span>👇🏿</span>Choose Hotel:</div><br/>
            <select id="select" required>
            <option>Fairfield By Marriott Kathmandu</option>
            <option>Hotel Yak and Yeti</option>
            <option>Shanker</option>
            <option>Kathmandu</option>
            <option>Hotel Fish Tail Lodge</option>
            <option>Mulberry</option>
            <option>Nepal Cottage Resort Pvt. Ltd</option>
            <option>Green Park Chitwan</option>
            <option>Hyatt Regency Kathmandu</option>
            <option>Hotel Kasthamandap Boutique</option>
            <option>Hotel Himalaya</option>
            <option>Kantipur Temple House</option>
            <option>Pokhara Eco Resort</option>
            <option>Radisson Hotel Kathmandu</option>
            <option>Tiger Palace Resort</option>
            <option>Peace Dragon Lodge</option>
            </select><br/>
            <div id="namef"><span>☎️</span>Phone NUmber:</div><br/>
               <input id="numberr" type="tel" name="contact-phone-number" placeholder="+977" /><br/>
            <div id="namef"><span>✅</span>check-in:</div><br/>
            <input id="ci" type="date" name="checkin-date" required /><br/>
             <div id="namef"><span>☑️</span> check-out:</div><br/>
              <input id="co" type="date" name="date" required /><br/>
              <div id="namef"><span>👳‍♂️</span>Adult:</div><br/>
          <input id="ad" type="Number" className="form-control" required /><br/>
          <div id="namef"><span>👨‍🦲</span>children:</div><br/>
          <input id="ch" type="Number" className="form-control"/><br/><br/>
              <input className="btton" type="submit" value="submit"/></div>
          </fieldset>
          
        </form>
          <button id="lef"><Link to="/home" className="a"><b>⬅️ Go Back</b></Link></button><br/><br/>
      </div> <div id="con"></div></div>

<h1> Booking </h1><div id="conn">
      {Booking.map(Booking=>(
        
        <div id="jsondiv">
        <h4>First Name:{Booking.Fname}</h4>
        <h4>Last Name:{Booking.Lname}</h4>
        <h4>Email:{Booking.email}</h4>
        <h4>Option:{Booking.option}</h4>
        <h4>Number:{Booking.number}</h4>
        <h4>Checkin:{Booking.checkin}</h4>
        <h4>Checkout:{Booking.checkout}</h4>
        <h4>Adult:{Booking.adult}</h4>
        <h4>Childern:{Booking.children}</h4>
</div>
   
        ))} </div>

      </>
      );
      }
    }

    export default Booking;
