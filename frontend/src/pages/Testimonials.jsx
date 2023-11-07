import car1 from "../sources/car1.jpg";
import car2 from "../sources/car2.webp";
import car3 from "../sources/car3.jpg";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you import the Bootstrap CSS file
import { Carousel } from 'react-bootstrap';

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="colored-section" id="testimonials">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="testimonial-image" src={car1} alt="car1.jpg" />
          <Carousel.Caption>
            <p>
              "NayePankh Foundation promotes the culture of
              kindness and wants to instill the sense of giving
              back to the society amongst modern youth.."
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="testimonial-image" src={car2} alt="car2.jpg" />
          <Carousel.Caption>
            <p>
              "NayePankh Foundation works with a vision to
              society where children can prosper to their complete
              potential and enjoy equality in its true essence."
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="testimonial-image" src={car3} alt="car3.jpg" />
          <Carousel.Caption>
            <p>
              "NayePankh Foundation has been working since 2021 for
              under and less privileged people in the field of hunger,
              sanitary, health, education, awareness, and rights.."
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Testimonials;
