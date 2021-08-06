import Image from 'next/image'
import home from '../../public/home_1.jpg'
import { useEffect } from 'react'


export default function Email () {




    return(
        
        <div className="container-fluid emailc">
          <div className="email">
              <div className="email__info">
                  <h4 className="email__info-title">Lets stay in touch</h4>
                  <span className="email__info-coa">Enjoy updates on new properties and specials by joining our mailing list. </span>
                  <form className="form-inline">
                        <div className="form-group ">
                        <input type="email" className="form-control" id="inputemail" placeholder="Enter your email address" />
                        <button type="submit" className="btn btn-primary ">Subscribe</button>
                        </div>
                        
                    </form>
                    <span className="email__info-fine">We respect your privacy, so we never share your info.</span>

              </div>
          </div>
        </div>

    )
}