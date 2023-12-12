import React, { useEffect } from 'react'
import "../App.css"
import grp from "../sources/grp.webp";
import logo from "../sources/LOGO.jpg";
import part2 from "../sources/part2.jpg";
import ppl from "../sources/ppl.jpg";
import aboutLink from "./About.jsx";
import bot from "../sources/bot.jpeg";
import "./script.js"
import { Link } from 'react-router-dom';
import YourComponent from './YourComponent.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonials from './Testimonials.jsx';
import Modal from './Modal.jsx';
import { useState } from 'react';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import arjit from "../sources/arjit.jpg"
import p1 from "../sources/p1.jpeg"
import p3 from "../sources/p3.jpeg"
import p4 from "../sources/p4.jpeg"
import p5 from "../sources/p5.jpeg"
import p6 from "../sources/p6.jpeg"
import MessageForm from './MessageForm.jsx';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const Community = () => {

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

                        <Link to={"/home"} style={{textDecoration:"none"}}><li>
                            <a>Home</a>
                        </li></Link>

                        <Link to={"../About.jsx"} style={{textDecoration:"none"}}><li>
                            <a>About</a>
                        </li></Link>

                        <Link to={"../Certificates.jsx"} style={{textDecoration:"none"}}><li>
                            <a>Certificates</a>
                        </li></Link>

                        <Link to={"../NR.jsx"} style={{textDecoration:"none"}}><li>
                            <a><nobr>Newspaper-Recognition</nobr></a>
                        </li></Link>

                        <Link to={"../Donate.jsx"} style={{textDecoration:"none"}}><li>
                            <a>Donate</a>
                        </li></Link>

                        <Link to={"../Community.jsx"} style={{textDecoration:"none"}}><li>
                            <a className='active'>Community</a>
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

            <MessageForm />


            <section id='cglines'>
                <div class="community-guidelines">
                    <h2>Community Guidelines</h2>
                    <div className='marginblack'></div>
                    <p>Welcome to our community! To ensure a positive and respectful environment, please adhere to the following guidelines:</p>

                    <ul>
                        <li>Be kind and considerate to fellow community members.</li>
                        <li>Avoid sharing personal information in public discussions.</li>
                        <li>Respect diverse opinions and perspectives.</li>
                        <li>Contact us for large donations or if you have specific items in mind.</li>
                        <li>Financial donations are accepted through our secure online payment system.</li>
                        <li>Refrain from spamming or promoting unrelated content.</li>
                        <li>Report any inappropriate behavior to the community moderators.</li>
                    </ul>
                </div>
                <div class="bot-class">
            <a href="https://mediafiles.botpress.cloud/d02ab71e-7631-48f9-bfd7-61cf69ad3307/webchat/bot.html" 
            target="_blank" class="bot-button">
              <img src={bot} class="bot-img" />
              <br />HELLO,<br />I AM A BOT!
            </a>
          </div>
         
            </section>


            <div className='complete-test'>
                <h1 style={{ textAlign: "center", padding: "2%" }}>Here are the reviews from our past customers!</h1>
                <div className="App">
                    <Carousel breakPoints={breakPoints}>
                        <Item>
                            <div className='fpart'>
                                <img src={arjit} alt='something.png'></img>
                                <h5>Arjit A</h5>
                                <p>The content on your site is not only informative
                                    but also engaging. Your website consistently delivers
                                    quality content. Overall it is a beautiful website.</p>
                            </div>
                        </Item>
                        <Item>
                            <div className='fpart'>
                                <img src={p1} alt='something.png'></img>
                                <h5>Anirudh R</h5>
                                <p>Navigating your website is a breeze! The intuitive design makes it easy to find what I need quickly, enhancing the overall user experience.</p>
                            </div>
                        </Item>
                        <Item>
                            <div className='fpart'>
                                <img src={p5} alt='something.png'></img>
                                <h5>Riya J</h5>
                                <p>I appreciate the innovative features that set your website apart from the rest. It's evident that you're committed to staying ahead in the digital landscape.</p>
                            </div>
                        </Item>
                        <Item>
                            <div className='fpart'>
                                <img src={p4} alt='something.png'></img>
                                <h5>Suresh P</h5>
                                <p>The functionality of your site is top-notch. Everything works seamlessly, from the smooth checkout process to the responsive customer support.</p>
                            </div>
                        </Item>
                        <Item>
                            <div className='fpart'>
                                <img src={p3} alt='something.png'></img>
                                <h5>Kavya M</h5>
                                <p>The aesthetic appeal of your website is truly remarkable. The attention to detail and visually pleasing layout make browsing a delight.</p>
                            </div>

                        </Item>
                        <Item>
                            <div className='fpart'>
                                <img src={p6} alt='something.png'></img>
                                <h5>Ajay N</h5>
                                <p>In a world where we are always on the go, your website's mobile responsiveness is a game-changer. It's incredibly convenient and ensures a consistent experience across devices.</p>
                            </div>
                        </Item>
                    </Carousel>
                </div>
            </div>

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

export default Community;