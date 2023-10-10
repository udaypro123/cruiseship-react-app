import React from 'react'
import './pages.css';
import { feature } from "../../feature"
import Navbar from '../banner/Navbar';

const Features = () => {
  return (
    
    <>
    <Navbar/>
      <div className="audiencecard">
        <div className="audiencecardinside">
          {
            feature.map((img, i) => {
              return <>
                <div className='featurecard'>
                  <img src={img.image} alt="" />
                  <p > {img.name}</p>
                </div>
              </>
            })
          }
        </div>
      </div>


    </>
 

  )
}

export default Features
