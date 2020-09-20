    import React, {Component} from 'react';


class Form extends Component{  

add = (e) => {
    if(localStorage.contact === undefined){
      localStorage.setItem('contact', JSON.stringify([]));
    }

    let form = document.getElementById("contact");
    e.preventDefault();
    let local = JSON.parse(localStorage.getItem('contact'));
    let Fullname = document.querySelector('#fn').value
    let email = document.querySelector('#email').value
    let number = document.querySelector('#number').value
    let comment = document.querySelector('#cm').value
    let obb = {'Fullname':Fullname,'email':email,'number':number,'comment':comment};
      local.push(obb);
    localStorage.setItem('contact',JSON.stringify(local));
    alert('we will contact you soon..Thank you!');
  }





 render = () => {
      return (<>
        <style>{
          `
form{
 background-color:white;
}

          `
        }</style>
  <div className="for">
    <form id="contact" name="myform" method="POST" onSubmit={this.add} >
      <fieldset>
        <legend><span className="colorchange"><b>CONTACT US</b></span></legend>

<img className="imgggg"   src="../images/ring.png" width="100" height="80" alt=""/>
<br/>
       <span>🕴</span>Full Name:<br/>
        <input  id="fn" type="text" name="name" placeholder="suman" required/><br/>
        <span>👩🏻‍💻</span>Email:<br/>
        <input  id="email" type="email" name="email" placeholder="abc@domain.com" required/><br/>
       <span> ☎️</span>Phone NUmber:<br/>
           <input  id="number" type="tel" name="contact-phone-number" placeholder="+977" required/><br/>
           <span>🩸</span>comment:<br/>
           <textarea  id="cm" required rows="3" cols="23"></textarea><br/>
      <button id="bth" type="submit" value="submit">Send</button>

      </fieldset>
      
    </form>
  </div> </>
      );
      }
    
}
    export default Form;