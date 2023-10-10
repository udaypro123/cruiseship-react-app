import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import Login from '../loginForm/Login'
import Offers1 from '../loginForm/Offers1';

const Banner = () => {

  const [showcom, setShowcomp]=useState(false);
  const [showcom1, setShowcomp1]=useState(false);

  useEffect(()=>{
    let timer=setTimeout(() => {
      setShowcomp(true)
    }, 3000);

    return ()=>{
      clearInterval(timer)
    }
  },[])

  useEffect(()=>{
    let timer2=setTimeout(() => {
      setShowcomp1(true)
    }, 6000);
    return ()=>{
      clearInterval(timer2)
    }
  },[])






  return (
    <>

      <Navbar />
      <div id="carouselExampleInterval sliderdiv" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active activeimg" data-bs-interval="3000">
            <img src="https://images.unsplash.com/photo-1548574505-12caf0050b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item activeimg" data-bs-interval="3000">
            <img src="https://images.unsplash.com/photo-1580698543091-88c76b323ff1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item activeimg" data-bs-interval="3000">
            <img src="https://images.unsplash.com/photo-1548574505-9021fc5226cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        {showcom && <> 
          <Login/>
          </>}

        {showcom1 && <> 
          <Offers1/>
          </>}
        
      </div>

    </>
  )
}

export default Banner
