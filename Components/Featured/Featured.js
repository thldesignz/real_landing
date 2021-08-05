import Image from 'next/image'
import home from '../../public/home_1.jpg'
import { useEffect } from 'react'


export default function Featured () {




    return(
        <section className="featured">
        <div className="container">
          <h1>Featured Properties</h1>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <a href="#">
                  <Image src={ home } className="img-fluid" />
                </a>
                <span className="status">Avaliable Now</span>
                <div className="card-body">
                  <div className="top">
                    <a href="#" className="price">$256,000</a>
                    <div className="icons">
                      <a href="#"><i className="fas fa-heart" /></a>
                      <a href="#"><i className="fas fa-share-alt" /></a>
                    </div>
                  </div>
                  <a href="#" className="middle">
                    <p className="address">134 Whitehead Drive</p>
                    <p className="state">Cincinnati Ohio, 45239</p>
                  </a>
                  <a href="#" className="bottom">
                    <span><i className="fas fa-bed" /> Beds: 4</span>
                    <span><i className="fas fa-bath" />Baths: 3</span>
                    <span><i className="fas fa-ruler-combined" /> Sqft: 5,075</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <a href="#">
                  <Image src={ home }  />
                </a>
                <span className="status">Avaliable Now</span>
                <div className="card-body">
                  <div className="top">
                    <a href="#" className="price">$256,000</a>
                    <div className="icons">
                      <a href="#"><i className="fas fa-heart" /></a>
                      <a href="#"><i className="fas fa-share-alt" /></a>
                    </div>
                  </div>
                  <a href="#" className="middle">
                    <p className="address">134 Whitehead Drive</p>
                    <p className="state">Cincinnati Ohio, 45239</p>
                  </a>
                  <div href="#" className="bottom">
                    <span><i className="fas fa-bed" /> Beds: 4</span>
                    <span><i className="fas fa-bath" />Baths: 3</span>
                    <span><i className="fas fa-ruler-combined" /> Sqft: 5,075</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <a href="#">
                  <Image src={ home } className="img-fluid" />
                </a>
                <span className="status">Avaliable Now</span>
                <div className="card-body">
                  <div className="top">
                    <a href="#" className="price">$256,000</a>
                    <div className="icons">
                      <a href="#"><i className="fas fa-heart" /></a>
                      <a href="#"><i className="fas fa-share-alt" /></a>
                    </div>
                  </div>
                  <a href="#" className="middle">
                    <p className="address">134 Whitehead Drive</p>
                    <p className="state">Cincinnati Ohio, 45239</p>
                  </a>
                  <a href="#" className="bottom">
                    <span><i className="fas fa-bed" /> Beds: 4</span>
                    <span><i className="fas fa-bath" />Baths: 3</span>
                    <span><i className="fas fa-ruler-combined" /> Sqft: 5,075</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}