import Image from 'next/image'
import sidePic from '../../public/h2house.jpg'
import { useEffect } from 'react'


export default function COA () {




    return(
        <div className="container next">
        <div className="row sec-row">
          <div className="col-md-6 info">
            <h2>find your</h2>
            <h2 className="blue">perfect home</h2>
            <h2>right now</h2>
            <p className="top"> Scheduling an appointment and viewing your new home is now a click of the button or just one quick phone call away.</p>
            <p>Call us at (555) 737-2640 to schedule a showing. Our new automated lockbox system will send you the combination and just like that you’re walking into your new home!​ Thank you for considering us!</p>
            <button href="/" className="btn btn-outline-success btn-inner" type="submit">Get Started</button>
          </div>
          <div className="col-md-6 side-pic" style={{ 
              position: 'relative',
              maxWidth: '652px',
              height: '800px',
              maxHeight: '800px'
           }}>
            <Image 
            src={ sidePic } 
            // className="img-fluid" 
            alt="house"
            layout="fill"
            objectFit="cover"
           
            />
          </div>
        </div>
      </div>
    )
}