// import React from "react";
// import ContactForm from "../pages/ContactForm.jsx";

// function FeedbackPage() {
//   return (
//     <div className="main">
//       <div className="popup">
//         {/* Your feedback page content */}
//         <h6 className="f1">Feedback Form</h6>
//         <h1>X</h1>

//         <div className="left22">
//           {/* Business card content */}
//         </div>

//         <div className="right22">
//           <ContactForm />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FeedbackPage;
import React, { useState } from "react";
import ContactForm from "../pages/ContactForm.jsx";
import '../App.css'
function FeedbackPage() {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    
    <div className="main">
     
      <div className="popup">
        {/* Your feedback page content */}
        <h6 className="f1">Feedback Form</h6>
        <h1>X</h1>

        <div className="left22">
          {/* Business card content */}
        </div>

        <div className="right22">
          <ContactForm />
          
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;
