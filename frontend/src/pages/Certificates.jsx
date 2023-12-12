import React from 'react'
import { Link } from 'react-router-dom';


import logo from "../sources/LOGO.jpg";
import grp from "../sources/grp.webp";
import cert from "../sources/cert.png"
import cert2 from "../sources/cert2.png"
import YourComponent from "./YourComponent.jsx"
import Modal from './Modal.jsx';
import bot from "../sources/bot.jpeg";
const Certificates = () => {
  return (
    <>
  <meta charSet="utf-8" />
  <title>Nayepankh Foundation</title>
  <link
    rel="stylesheet"
    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
  />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" href="styles.css" />
  {/* Font Awesome */}
  <section id="header">
    {/* <nav class="navbar-nav navbar-outline-lg navbar-bg-dark"> */}
    <a className="navbar-brand">
      <img src={logo} alt="logo.png" />
    </a>
    
    <YourComponent />
    
    <div className="navbar-collapse">
      <ul id="navbar">
        
      <Link to={"../home"} style={{textDecoration:"none"}}><li>
          <a>Home</a>
        </li></Link>

        <Link to={"../About.jsx"} style={{textDecoration:"none"}}><li>
          <a>About</a>
        </li></Link>

        <Link to={"../Certificates.jsx"} style={{textDecoration:"none"}}><li>
          <a className='active'>Certificates</a>
        </li></Link>

        <Link to={"../NR.jsx"} style={{textDecoration:"none"}}><li>
        <a><nobr>Newspaper-Recognition</nobr></a>
        </li></Link>

        <Link to={"../Donate.jsx"} style={{textDecoration:"none"}}><li>
          <a>Donate</a>
        </li></Link>
        
        <Link to={"../Community.jsx"} style={{textDecoration:"none"}}><li>
          <a>Community</a>
        </li></Link>

        <Link to={"../"} style={{textDecoration:"none"}}><li>
          <a>Logout</a>
        </li></Link>

        
        <a href="#" id="close">
          <i className="far fa-times" />
        </a>
      </ul>
    </div>
    {/* </nav> */}
  </section>
  <section id="certificates">
    <div className="certif">
      <h1>Our Certificates</h1>
      <img src={cert} alt="cert.png" />
      <img src={cert2} className="cert2" alt="cert.png" />
    </div>
    <div class="bot-class">
            <a href="https://mediafiles.botpress.cloud/d02ab71e-7631-48f9-bfd7-61cf69ad3307/webchat/bot.html" 
            target="_blank" class="bot-button">
              <img src={bot} class="bot-img" />
              <br />HELLO,<br />I AM A BOT!
            </a>
          </div>
         
  </section>
  <section id="end">
    <div
      className="grid-container"
      id="part2"
      style={{ backgroundColor: "white" }}
    >
      <div className="right">
        <h1 style={{ fontWeight: 700 }}>Get in touch</h1>
        <p>career@nayepankh.com</p>
        <p>WhatsApp: +91-6306266557</p>
        <p>Calling: +91-8318500748</p>
        <p>Office Address:104A/279 P.Road Kanpur</p>
        <p>Pincode: 208012</p>
        <div className="i">
          <i className="social-icon icon1 fab fa-facebook-f" />
          <i className="social-icon fab fa-twitter" />
          <i className="social-icon fab fa-instagram" />
          <i className="social-icon fas fa-envelope" />
        </div>

        <div><Modal /></div>
        
      </div>
      <div className="left">
        <img className="team-img" src={grp} alt="child" />
      </div>
    </div>
  </section>
</>

  )
}

export default Certificates