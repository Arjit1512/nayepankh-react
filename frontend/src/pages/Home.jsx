import React from 'react'
import "../App.css"
import grp from "../sources/grp.webp";
import logo from "../sources/LOGO.jpg";
import part2 from "../sources/part2.jpg";
import car1 from "../sources/car1.jpg";
import car2 from "../sources/car2.webp";
import car3 from "../sources/car3.jpg";
import ppl from "../sources/ppl.jpg";
import aboutLink from "./About.jsx";
import "./script.js"
import { Link } from 'react-router-dom';
import YourComponent from './YourComponent.jsx';
const Home = () => {
  
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
  {/* MAIN PAGE     */}
  <section id="header">
    {/* <nav class="navbar-nav navbar-outline-lg navbar-bg-dark"> */}
    <a className="navbar-brand">
      <img src={logo} alt="logo.png" />
    </a>

    <YourComponent />  
  

    <div className="navbar-collapse">
      <ul id="navbar">
        
        <Link to={"/home"}><li>
          <a className='active'>Home</a>
        </li></Link>
 
        <Link to={"../About.jsx"}><li>
          <a>About</a>
        </li></Link>

        <Link to={"../Certificates.jsx"}><li>
          <a>Certificates</a>
        </li></Link>

        <Link to={"../NR.jsx"}><li>
          <a><nobr>Newspaper-Recognition</nobr></a>
        </li></Link>

        <Link to={"../Donate.jsx"}><li>
          <a>Donate</a>
        </li></Link>

        <Link to={"../"}><li>
          <a>Logout</a>
        </li></Link>


        <a href="#" id="close">
          <i className="far fa-times" />
        </a>
      </ul>
    </div>
    {/* </nav> */}
  </section>
  <section id="hero">
    <h2>
      It's that easy
      <br />
      to bring a Smile on
      <br />
      their faces
    </h2>
    <h4>
      We don't ask for much, just help us with what
      <br />
      you can- Be it Money, Skill or Your Time
    </h4>
    <button>Donate Now</button>
  </section>
  <section id="partt2">
    <div className="grid-container" id="part2">
      <div className="left">
        <img src={part2} alt="child" />
      </div>
      <div className="right">
        <h5>ABOUT US</h5>
        <h1>
          Think global,
          <br />
          Act local.
        </h1>
        <p>
          "NayePankch Foundation" is a non governmental
          <br />
          organisation with a strong desire to help the
          <br />
          society and make it better place for all, by doing
          <br />
          everything in our power and to make our vision
          <br />
          successful we would require your vital support.
          <br />
          Service to mankind is the service to god. Let's
          <br />
          revolutionise the society together!.
        </p>
        <button className="b1">LEARN MORE</button>
        <button className="b2">OUR CERTIFICATES</button>
      </div>
    </div>
  </section>
  <section id="part3">
    <h1>
      Welcome to
      <br />
      Nayepankh Foundation
    </h1>
    <p>UP GOVT.|80G &amp; 12A Registered</p>
    <h4>
      We are one of the Biggest Student led NGO of India with its
      <br />
      operations extended in the city of Kanpur, Ghaziabad and
      <br />
      various other cities.
    </h4>
  </section>
  <section className="colored-section" id="testimonials">
    <div id="testimonial-carousel" className="carousel slide" data-ride="false">
      <div className="carousel-inner">
        <div className="carousel-item active container-fluid">
          <img
            className="testimonial-image"
            src={car1}
            alt="car1.jpg"
          />
          <p>
            "NayePankh Foundation promotes the culture of
            <br />
            kindness and wants to instill the sense of giving
            <br />
            back to the society amongst modern youth.."
          </p>
        </div>
        <div className="carousel-item container-fluid">
          <img
            className="testimonial-image"
            src={car2}
            alt="car2.jpg"
          />
          <p>
            "NayePankh Foundation works with a vision to create a<br />
            society where children can prosper to their complete
            <br />
            potential and enjoy equality in its true essence."
          </p>
        </div>
        <div className="carousel-item container-fluid">
          <img
            className="testimonial-image"
            src={car3}
            alt="car3.jpg"
          />
          <p>
            "NayePankh Foundation has been working since 2021 for
            <br />
            under and less priveleged people in the field of hunger,
            <br />
            sanitary, health, education, awareness and rights.."
          </p>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#testimonial-carousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </a>
      <a
        className="carousel-control-next"
        href="#testimonial-carousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </a>
    </div>
  </section>
  <section id="partt2">
    <div
      className="grid-container"
      id="part2"
      style={{ backgroundColor: "black" }}
    >
      <div className="left">
        <img className="team-img" src={ppl} alt="child" />
      </div>
      <div className="right">
        <h5>JOIN OUR</h5>
        <h1 style={{ fontWeight: 700 }}>TEAM</h1>
        <p>
          "Join our team and make a difference in the lives of those in need.
          <br />
          At NayePankh Foundation, we are committed to creating positive
          <br />
          change and empowering communities. By joining our team, you
          <br />
          will have the opportunity to contribute your time, skills, and ideas
          <br />
          to help make a real impact. Whether you are passionate about
          <br />
          education, health, or providing support during times of crisis,
          <br />
          there is a place for you on our team. Join us today and be a part
          <br />
          of an organization that is making a difference, one person at a time."
        </p>
        <button className="b1">JOIN US</button>
      </div>
    </div>
  </section>
  <section id="ceo">
    <div className="ceo1">
      <h1>
        "If we all do something, then
        <br />
        together there is no problem
        <br />
        that we cannot solve!"
      </h1>
      <h6>P R A S H A N T S H U K L A</h6>
      <p>Founder &amp; President, Nayepankh Foundation</p>
    </div>
    <div className="ceo2">
      <p>
        All our efforts are made possible only because of
        <br />
        your support
      </p>
      <p className="p22">
        Your donations are tax exempted under 80G of the
        <br />
        Indian Income Tax Act
      </p>
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
          <i className="social-icon fab fa-facebook-f" />
          <i className="social-icon fab fa-twitter" />
          <i className="social-icon fab fa-instagram" />
          <i className="social-icon fas fa-envelope" />
        </div>
      </div>
      <div className="left">
        <img className="team-img" src={grp} alt="child" />
      </div>
    </div>
  </section>
</>

  )
}

export default Home