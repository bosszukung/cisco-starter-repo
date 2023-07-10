import React from "react"
import { Link } from "react-router-dom";
import './banner.css'

function Banner() {
    return (
      <>
        <div className='container'>
          <h1 color="darkslategrey">Sextant Service</h1>
          <h4>Welcome to the Website</h4>
          <div className="form">
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </>
    )
}

export default Banner