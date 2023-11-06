import React from 'react'
import { Link } from 'react-router-dom';

import child from "../sources/child.png"
import donate from "../sources/donate.png"
import logo from "../sources/LOGO.jpg";
import YourComponent from './YourComponent.jsx';

const Donate = () => {
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
       
      <Link to={"../home"}><li>
          <a>Home</a>
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
          <a className='active'>Donate</a>
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
  <section id="donate1">
    <div className="d1">
      <img src={donate} alt="d1.png" />
    </div>
    <div className="d2">
      <h1>
        "Together, Let's Make a<br />
        Difference!"
      </h1>
      <button>Donate Now</button>
      <p>Dear Supportes and Friends,</p>
      <p>
        NayePankh Foundation was founded with a simple yet powerful vision - to
        uplift the underprivileged and marginalized communities and provide them
        with
        <br />
        access to education, healthcare, and basic necessities that we often
        take for granted. We strongly believe that every child has the right to
        dream and achieve
        <br />
        their aspirations, irrespective of their socio-economic background. We
        have been working relentlessly towards this goal, but we need your
        support to continue
        <br />
        our efforts and make a lasting impact. As you read this, countless
        children and families are struggling to survive without the most basic
        necessities. They lack
        <br />
        access to clean water, sanitation, and proper healthcare facilities.
        Most of them are unable to attend school due to financial constraints or
        lack of infrastructure.
        <br />
        They are trapped in a cycle of poverty and hopelessness, and they need
        our help. We at Nayepankh Foundation strive to break this cycle and
        provide a ray of
        <br />
        hope to those in need. With your support, we can continue to provide
        education, healthcare, and other basic amenities to these communities.
        We can empower
        <br />
        them to lead better lives and realize their true potential. Every
        donation, no matter how small, can make a huge difference. Your support
        can provide a child with
        <br />
        a school uniform, a pair of shoes, or even a nutritious meal. It can
        provide a family with access to clean water, sanitation, and healthcare
        facilities. It can change
        <br />
        the trajectory of someone's life forever. We understand that times are
        tough, and everyone is going through their own struggles. But we urge
        you to think
        <br />
        of those who are less fortunate and extend a helping hand. Your
        generosity can make a world of difference to someone in need. We know
        that we can count on
        <br />
        your support to continue our mission. Your donations will help us reach
        more communities and make a meaningful impact in the lives of those who
        need it the
        <br />
        most. Let's come together and make a difference. Thank you for
        considering our cause and supporting Nayepankh Foundation. Your support
        means the world to
        <br />
        us and those we serve. Let's work together to create a better world for
        all.{" "}
      </p>
      <p>With heartfelt gratitude, </p>
      <p>Prashant Shukla, Founder &amp; President, NayePankh Foundation</p>
    </div>
    <section id="d3">
      <div className="grid-container donate3" id="d32">
        <div className="donate2 right">
          <h1>Donate Now</h1>
          <p>
            Imagine for a moment that you are struggling to make ends meet.
            You're
            <br />
            worried about how you'll pay for basic necessities like food,
            shelter, and
            <br />
            healthcare. Now, imagine that someone steps forward and offers a
            helping
            <br />
            hand - a small donation that can make all the difference in your
            life. That
            <br />
            feeling of relief and gratitude is immeasurable. By donating to a
            cause you
            <br />
            care about, you have the power to make that difference in someone's
            life.
            <br />
            You can provide hope and support to those who need it most, and
            create a<br />
            ripple effect of kindness and generosity in the world. So, if you
            have the
            <br />
            means to give, think about the impact you can make. Your donation
            may just
            <br />
            be the lifeline that someone desperately needs.
          </p>
          <p>Click on the button below to donate to Us</p>
          <button className="last">Donate Now</button>
        </div>
        <div className="left donate2">
          <img src={child} alt="child.png" />
        </div>
      </div>
    </section>
  </section>
</>

  )
}

export default Donate