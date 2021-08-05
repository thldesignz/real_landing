import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/dist/client/image";
import Photo1 from '../../public/1.jpg'
import Photo2 from '../../public/2.jpg'
import Photo3 from '../../public/3.jpg'

export default class Testimonials extends Component {
  render() {
    return (
        <div className="testimonials">
            <h1>What Our Customers Say</h1>
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <Image src={ Photo1} />
          <div className="myCarousel">
            <h3>Shane Fultz</h3>
            <h4>New Home Owner</h4>
            <p>
              Ive been in the property for a month and all my needs have been met.I would suggest the company.
            </p>
          </div>
        </div>

        <div>
        <Image src={ Photo2 } />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
            Ive been in the property for a month and all my needs have been met.I would suggest the company.
            </p>
          </div>
        </div>

        <div>
        <Image src={ Photo3} />
          <div className="myCarousel">
            <h3>Theona Sorel</h3>
            <p>
            Ive been in the property for a month and all my needs have been met.I would suggest the company.
            </p>
          </div>
        </div>
      </Carousel>
      </div>
    );
  }
}
