import Image from 'next/image'
import Logo from '../../../public/logowhite.png'
import { useEffect } from 'react'


export default function Header1 () {

    useEffect(() => {
        (function () {
            (document).scroll(function () {
              var nav = (".navbar");
              nav.toggleClass('scrolled', (this).scrollTop() > nav.height());
            });
          });
    })

    // let nav = document.getElementsByClassName('navbar');

    // window.onscroll = function () {
    //     if(document.bod)
    // }



    return(
      <nav className="navbar navbar-expand-lg scrolled  ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><Image src={Logo} alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><i className="fas fa-bars" /></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Open Houses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="agents.html">Agents</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
            {/* 
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> */}
          </ul>
          <form className="d-flex">
            <button href="/" className="btn btn-outline-success" type="submit">Sign Up / Login</button>
          </form>
        </div>
      </div>
    </nav>
    )
}