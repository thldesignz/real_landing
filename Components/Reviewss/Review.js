import Image from 'next/image';



export default function Review() {




    return(
        <>
        <div className="review">
        <div className="container">
          <div className="row">
            <h1>What Our Customers Say</h1>
            <div className="col-md-8 mx-auto ">
              <div id="testimonial-slider" className="owl-carousel">
                <div className="testimonial">
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin, sapien lorem dictum lacus, non consequat odio ipsum nec est. Sed mattis egestas elementum. Nulla facilisi. Quisque placerat risus ac nunc ornare tincidunt. Sed quis faucibus nunc. Pellentesque accumsan arcu mi, eget venenatis mauris.
                  </p>
                  <h3 className="title">williamson</h3>
                  <span className="post">Web Developer</span>
                </div>
                <div className="testimonial">
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin, sapien lorem dictum lacus, non consequat odio ipsum nec est. Sed mattis egestas elementum. Nulla facilisi. Quisque placerat risus ac nunc ornare tincidunt. Sed quis faucibus nunc. Pellentesque accumsan arcu mi, eget venenatis mauris.
                  </p>
                  <h3 className="title">Kristina</h3>
                  <span className="post">Web Designer</span>
                </div>
                <div className="testimonial">
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin, sapien lorem dictum lacus, non consequat odio ipsum nec est. Sed mattis egestas elementum. Nulla facilisi. Quisque placerat risus ac nunc ornare tincidunt. Sed quis faucibus nunc. Pellentesque accumsan arcu mi, eget venenatis mauris.
                  </p>
                  <h3 className="title">Miranda Joy</h3>
                  <span className="post">Web Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



</>
    )
}