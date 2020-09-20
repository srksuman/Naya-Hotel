    import React, {Component} from 'react';
var i;

   var hotelCustomer =[
  {
    username: "suman",
    password: "sumanrajkhanal"
  },
{
  username: "Ram",
    password: "password12"  
},
{
  username: "shyam",
    password: "password21"}  
]
    class Login extends Component{




 login=()=> {
  //reterving data input from the form
  var username= document.getElementById("username").value
  var password= document.getElementById("password").value
  //loop through all the user ojecects and conform if the user name password are correct
  for(i=0;i<hotelCustomer.length;i++)
{

  if(username===hotelCustomer[i].username && password===hotelCustomer[i].password){
    console.log(username +"is logged  in !!!!!!!")
    this.props.history.push('/home')


    return
  }
}console.log("incorrect username or password")
alert('incorrect username or password')
}
 registerUser=(e)=> {
var registerUser= document.getElementById("newUser").value
var registerPassword= document.getElementById("newPassword").value
var newUser={
  username: registerUser,
  password: registerPassword
}

for(i=0;i<3;i++){
  if(registerUser===hotelCustomer[i].username){
  
    return
  }else if(registerPassword.length<8){
    alert("password is too short input 8 or more character")
    return
  }
}

hotelCustomer.push(newUser)
console.log(hotelCustomer)


 if(localStorage.logged === undefined){
      localStorage.setItem('logged', JSON.stringify([]));
    }

    let form = document.getElementById("logged");
    e.preventDefault();
    let local = JSON.parse(localStorage.getItem('logged'));
    let username = document.querySelector('#newUser').value
     let number = document.querySelector('#phonenumber').value
    let password = document.querySelector('#newPassword').value
     let dob = document.querySelector('#dob').value
    let obb = {'username':username,'number':number,'password':password,'dob':dob};
      local.push(obb);
      console.log(local);
    localStorage.setItem('logged',JSON.stringify(local));
    
    alert('Register successful!');
}





      render = () => {
      return (
      <>  
      <style>{`

.nav {
            display:none;
          }
input {
 width: 40%;
 height: 30px;
 border-radius: 20px;
 border:solid purple;
}

.logo{
  height: 100px;
  width: 100px;
}
h2{
  margin-right:6%;
  }
form{
  background-color:grey;
}
 
        `}</style>









<div id="registerlog">

  <form id="logged" name="myform" method="POST" >
    <img className="logo" src="../images/LOGO.png" alt="" /><br/>
    <h2><span>🔐</span>Register</h2>
     User-Name:<br/>
    <input  id="newUser" required /><br/>
    Phone Number:<br/>
    <input type="number" id="phonenumber" required /><br/>
    Password:<br/>
    <input type="password"  id="newPassword" required/><br/>
  

    Date of Birth:<br/>
     <input type="date" id="dob" /><br/><br/>
    <button id="btn1" type="button" onClick={this.registerUser}><span>✔</span>Register</button><br/><br/>

  </form><br/>
</div>





        <div id="loginlogin">
  <form >
   <img className="logo" src="../images/LOGO.png" alt="" /><br/><br/>
    <h2 ><span>🔑</span>Login</h2>
    User-Name:<br/>
    <input  id="username"/><br/>
    Password:<br/>
    <input type="password" id="password"/><br/><br/>
    <button id="btn2" type="button" onClick={this.login}><span>🗝Login</span></button>

  </form><br/></div>





  </>
      );
      }
    }

    export default Login;
