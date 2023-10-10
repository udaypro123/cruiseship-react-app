import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
 
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbarback" data-bs-theme="dark">
        <div className="container-fluid ">
          <div className="navbar-text">
           <span>CruiseShip</span>
          </div>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/audience" className="nav-link active" aria-current="page" >Audience</Link>
              </li>
              <li className="nav-item">
                <Link to="/gallary" className="nav-link">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link to="/ships" className="nav-link">Ships</Link>
              </li>
              <li className="nav-item">
                <Link to="/features" className="nav-link">Best Features</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
