import React from 'react'
import { Link } from 'react-router-dom';


import logo from "../sources/LOGO.jpg";
import about2 from "../sources/about2.jpg"
import grp from "../sources/grp.webp";
import YourComponent from "./YourComponent.jsx"

export const About = () => {
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
          <a className='active'>About</a>
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
    <section id="hero1">
      <div className="about">
        <h5>who we are</h5>
        <h1>About Us</h1>
        <span style={{ fontSize: 180 }}>↓</span>
      </div>
    </section>
    <section id="partt2">
      <div className="grid-container" id="part2">
        <div className="right about2">
          <h3>How it started?</h3>
          <p>
            As we all know 2020 was a year the world was striving to survive
            <br />
            the global pandemic of covid-19. During these dire times we felt an
            <br />
            urge to make an impact with whatever we had; and so we tried!! We
            <br />
            tried to uplift the underprivileged and help the needy with all our
            <br />
            resources and material we could arrange, it was tough but we didn't
            <br />
            lose our hope and kept going in order to bring a change everyone
            <br />
            was expecting the bigger authorities to bring in the societies on
            <br />
            smaller levels. We started off as a group of bunch of highschoolers
            <br />
            but now are a team of numerous people from different parts of the
            <br />
            city and state! 28th March 2021, the day we officially landed on the
            <br />
            ground to serve our duties as the youth of the most rapidly
            <br />
            progressing nation afterall, the main hope of a nation lies in the
            <br />
            arms of its youth.
          </p>
        </div>
        <div className="left about2">
          <img src={about2} alt="child" />
        </div>
      </div>
    </section>
    <section id="info">
      <div className="about">
        <h1 style={{ textAlign: "center" }}>What is Nayepankh?</h1>
        <p>
          Nayepankh foundation was initiated to bring a change and help people
          during the tough times of Covid. Later in the year, the NGO started to
          expand their operations
          <br />
          and provide help to a wider section of the society. With this revamped
          vision, the NGO acquired the name of NayePankh - giving wings to uplift
          the underprivileged
          <br />
          section of our society. NayePankh is one of the eminent NGOs espoused in
          providing food, sanitary napkins, clothes, educating underprivileged
          sectors of our
          <br />
          society for the better future. We make efforts to solve daily problems
          faced by people of India. Most of the young women feel humiliating in
          public places during
          <br />
          their menstrual cycle; to bring change we create awareness campaigns
          among woman and youths about personal hygiene, providing sanitary
          napkins. Also, in our
          <br />
          endeavour to fight hunger we distribute food not only to the
          underprivileged community but also to the stray animals. We are also
          providing clothes to the poor
          <br />
          families. Till date we have helped more than two lakhs of people.
          Although this seems quite a big achievement, but our goal is still not
          complete, therefore we're
          <br />
          continuing more with hustle. When lockdown was hitting hard, we took a
          decision and now we are a 124 and 80G certified NGO (that means if
          someone donates to
          <br />
          NayePankh they will get a relief of 50%in income tax). The most striking
          feature about us is that we are completely led by the youths of our
          country, many of whom
          <br />
          are still in their colleges and schools. We are on a mission to make
          this earth a better place to live for all creatures. We are here as
          BADALTE BHARAT KI NAYI
          <br />
          TASVEER'!!
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

export default About;