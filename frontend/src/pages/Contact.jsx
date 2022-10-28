import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/contact.css"


const Contact = () => {
  return (
    <>
      <Navbar/>
     <div className="containerContact">
       <div className="boxContact">
       <div className="box">
         <div className="imgBox">
           <img src="./images/contact/f6.png" alt="" />
         </div>
         <div className="details">
           <div className="content">
           <h2>Find us on facebook!</h2>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium  cumque totam incidunt velit eos.</p>
         </div>
         </div>
       </div>
       <div className="box">
       <div className="imgBox">
           
       <img src="./images/contact/d.jpg" alt="" />
         </div>
         <div className="details">
           <div className="content">
           <h2>Find us on Discord!</h2>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium  cumque totam incidunt velit eos.</p>
         </div>
         </div>
       </div>
       <div className="box">
       <div className="imgBox">
           <img src="./images/contact/te1.png" alt="" />
         </div>
         <div className="details">
           <div className="content">
           <h2>Find us on telegram!</h2>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium  cumque totam incidunt velit eos.</p>
         </div>
         </div>
       </div>
       <div className="box">
       <div className="imgBox">
           <img src="./images/contact/viber.jpg" alt="" />
         </div>
         <div className="details">
           <div className="content">
           <h2>Find us on viber!</h2>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium  cumque totam incidunt velit eos.</p>
         </div>
         </div>
       </div>
       <div className="box">
       <div className="imgBox">
       <img src="./images/contact/i.jpeg" alt="" />
         </div>
         <div className="details">
           <div className="content">
           <h2>Find us on Instagram!</h2>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium  cumque totam incidunt velit eos.</p>
         </div>
         </div>
       </div>
       <div className="box">
       <div className="imgBox">
       <img src="./images/contact/s2.jpg" alt="" />
       
           {/* <img src="./images/contact/kl1.jpg" alt="" /> */}
         </div>
         <div className="details">
           <div className="content">
           <h2>Find us on signal!</h2>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium  cumque totam incidunt velit eos.</p>
         </div>
         </div>
       </div>
       <div className="box">
       <div className="imgBox">
           <img src="./images/contact/skype.png" alt="" />
         </div>
         <div className="details">
           <div className="content">
           <h2>Find us on Skype!</h2>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium  cumque totam incidunt velit eos.</p>
         </div>
         </div>
       </div>
       <div className="box">
       <div className="imgBox">
           <img src="./images/contact/tw.png" alt="" />
         </div>
         <div className="details">
           <div className="content">
           <h2>Find us on twitter!</h2>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium  cumque totam incidunt velit eos.</p>
         </div>
         </div>
       </div>
     </div>
     </div>
    
     
    <Footer/>
   
    </>
  );
};

export default Contact;
