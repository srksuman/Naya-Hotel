 import React, {Component} from 'react';
     
     
    class About extends Component{
 

    render=()=>{
return(
  <>
<div id="lightgrey">
  <main className="containerabout">
    <div className="row">
        <div>
            <h2 id="hf"><span className="colorchange"><b>ABOUT US</b></span></h2></div>
       
            <div className="info-text">
               
                <p><div id="fB"><div id="fq"><b>What is a hotel booking engine?</b></div><br/>
<div>First off, let’s define what a hotel booking engine is. A hotel booking engine is the software used by guests to book your property online. It allows to sell rooms directly on website, as well as through advertisements on Facebook and other popular social networking sites.</div></div>

<div id="sb">
    <div><b id="bookme">Bookme.com</b></div>
    Bookme.com is a 100% independent hotel price comparison website.

In the hotel and lodging industry there is no shortage of choice for the consumer; both in terms of the number of establishments on offer, and the number of online merchants and travel agencies seeking your patronage.

Making sense of the enormous amounts of information available online is not always easy. Having waded through countless reviews on trip advisor and similar review sites in order to select a suitable establishment, the customer is then faced with task of selecting an online merchant or travel agency with which to make their reservation.
</div></p>
            </div>
        </div>
    <div id="figuresabout">
                <figure className="pics"><img src="../images/hyatt.webp" alt=""/></figure>
                <figure className="pics"><img src="../images/picm.jpg"  alt=""/></figure>
          </div>
               <div id="clear"></div> 
           
        <div></div>
        <hr/>
        <div className="row">
          
                <div className="info-text">
                    <p><div id="sq"><b>What are the benefits?</b></div><br/><div>
<b id="s1">1. Your property is instantly bookable through your hotel website.</b><br/>
Research shows that most guests will look at both OTAs and the property website to inform their decision. By presenting an easy way for them to book right on your page, you increase the chances that when they’re ready to reserve, they’ll do it directly with you.<br/><br/>
<b id="s2">2. You pay far less commission.</b><br/>
Bookings through your property website cost you much less commission than bookings through an OTA. This means that any direct bookings will have a big impact on your bottom line.<br/><br/>

<b id="s3">3. You increase your bookings.</b><br/>
There are many reasons guests are more likely to book your property when you have an embedded booking engine. For one, your booking engine is open 24/7 while your front desk may not be, so customers can book regardless of personal factors like time zone. Secondly, once travellers land on your site, the engine makes it easy for them to just click and reserve – rather than going back to the OTA to book and getting distracted by other options.<br/><br/>

<b id="s4">4. You can easily accept credit cards and process payments.</b><br/>
A major plus of an embedded booking engine is that guests can pay directly by credit card and the system will automatically process the reservation details – saving you time and hassle. This includes extra payments like deposits or charges for additional services such as br/eakfast and cleaning fees.<br/></div>
</p>
                </div>
           </div></main></div>

</>
);
}
}
export default About;