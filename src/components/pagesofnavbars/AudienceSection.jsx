import React from 'react'
import './pages.css';
import { imageslist } from "../../image"
import Navbar from '../banner/Navbar';

const AudienceSection = (props) => {
  return (
    <>
    <Navbar/>
      <div className="audiencecard">
        <div className="audiencecardinside">
        

          {
            imageslist.map((img, i) => {
              return <>
                <div className='audiencecard1'>
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

export default AudienceSection
