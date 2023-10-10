import React from 'react'
import './pages.css';
import { ships } from "../../feature"
import Navbar from '../banner/Navbar';

const Ships = () => {
  return (
    <>
    <Navbar/>
      <div className="audiencecard">
        <div className="audiencecardinside">
          {
            ships.map((img, i) => {
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

export default Ships
