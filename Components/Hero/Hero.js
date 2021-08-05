import Image from 'next/image'

import { useEffect } from 'react'


export default function Hero () {




    return(
        <section className="hero">
        <div className="overlay" />
        <div className="title">
          <h1>Your next great <span className="blue">move</span>  starts here.</h1>
        </div>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search By City, State, or ZIP" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </section>
    )
}