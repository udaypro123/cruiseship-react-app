import React from 'react'
import { useSelector } from 'react-redux'
import BookForm from '../loginForm/BookForm'

const Popuppage = (props) => {

    const { popupitem } = useSelector((state) => state.capsul)

    

    return (
        <>
            <div className="cards">
                <div className='cards1'>
                    <img src={popupitem.image} alt="" />
                    <p >Rating : <span> {popupitem.rating}</span></p>
                    <p >Price: <span> {popupitem.price}</span></p>
                    <p >Category Name: <span>{popupitem.category}</span> </p>

                    <div onClick={() => { props.setShow(false) }} className="closebtn">
                        <img src="https://cdn.pixabay.com/photo/2023/01/20/19/54/close-7732468_1280.png" />
                    </div>
                </div>


                <div className='cards2'>
                    <BookForm/>
                </div>

            </div>

        </>
    )
}

export default Popuppage;
