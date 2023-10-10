import React, { useEffect, Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcapsuldata } from '../resduxToolkit/capsulSlice'
import { additem } from '../resduxToolkit/capsulSlice'
import Popuppage from './Popuppage'
import SearchForm from '../searchform/SearchForm'
import { data } from '../../data'

const DataGrid = () => {


  const [option, setOption] = useState("capsules")
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()

  const popupdata = (ele) => {
    dispatch(additem(ele))
  }

  let filterdata = data.filter((ele) => {
    if (ele.category === " ") {
      return ele
    } 
    
    if (ele.category === option) {
      return ele
    } 
    

  })




  return (
    <>
    <SearchForm setOption={setOption}/>

      <div className='datagrid'>
        {
          filterdata.length > 0 ? <> {
            filterdata && filterdata.map((item, i) => {
            return (
              <Fragment key={ i }>
                <div className="card" >
                <img src={item.image} alt=""/>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Rating: <span> { item.rating}</span>
                    </li>
                    <li className="list-group-item">Price: <span> { item.price }</span></li>
                    <li className="list-group-item">Category: <span>{ item.category }</span> </li>
                  </ul>

                  <button type="button" className="btn btn-primary btn3" onClick={ () => {
                    popupdata(item)
                    setShow(true)
                  } }>
                    View details && Book here
                  </button>
                </div>
              </Fragment>
            )
          })
          }
          </> : <>
            {
              data && data.map((item, i) => {
            return (
              <Fragment key={ i }>
                <div className="card" >
                <img src={item.image} alt=""/>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Rating : <span>{ item.rating}</span>
                    </li>
                    <li className="list-group-item">Price: <span>  { item.price }</span></li>
                    <li className="list-group-item">Category: <span>{ item.category }</span> </li>
                  </ul>

                  <button type="button" className="btn btn-primary btn3" onClick={ () => {
                    popupdata(item)
                    setShow(true)
                  } }>
                  View details && Book here
                  </button>
                </div>
              </Fragment>
            )
          })
            }
          </>
        }
      </div>

      { show && <Popuppage show={ show } setShow={ setShow } /> }

    </>
  )
}

export default DataGrid;
