import React, { useState } from "react";
import './Modal.css'
import ContactForm from "./ContactForm";
function Modal() {
  const [popup, setPop] = useState(false)
  const handleClickOpen = () => {
    setPop(!popup)
  }
  const closePopup = () => {
    setPop(false)
  }
  return (
    <div>
      <button onClick={handleClickOpen} style={{
        backgroundColor:"red",
        border:"2px solid black",
        fontWeight:"600",
        marginTop:"10%"
        }}>Give Us Feedback</button>
      <div>
        {
          popup ?
            <div className="main">
              <div className="popup">
                <div className="popup-header">
                  <h6 className="f1">Feedback Form</h6>
                  <h1 onClick={closePopup} style={{ cursor: "pointer", marginLeft:"3%", marginTop:"7%" }}>X</h1>
                </div>


                <div className="left22">
                  <div class="business-card">
                    <h6>Nayepankh</h6>
                    <h3 style={{padding:"5%"}}>Your Feedback is valuable!</h3>
                    <p>Phone Number: +91 9618825172</p>
                    <p>Address: 500 Terry Francine Street, San Francisco, CA 94158</p>
                    <p>Email: arjit.a21@iiits.in</p>
                  </div>
                </div>



                <div className="right22">
                  <ContactForm />
                </div>
              </div>
            </div> : ""
        }
      </div>
    </div>
  )
}
export default Modal;