import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

const BookForm = () => {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [startdate, setStartdate] = useState("")
    const [lastdate, setLastdate] = useState("")
    const [selectedOption, setSelectedOption] = useState(null);
    const [userdata, setUserdata] = useState(null);


    const userhandledata = (e) => {
        e.preventDefault();
        let data={
            to_name:firstname+lastname,
            to_email:email,
            to_date:startdate,
            to_from:lastdate,
        }
        let service_id="service_pceacux";
        let temlate_id="template_xhy3cxi";
        let user_id="AlGQPxs65dfmBQdoI";

        emailjs.send(service_id,temlate_id,data,user_id).then((response) => {
            alert('SUCCESS!');
         }, (err) => {
           alert('FAILED...', err);
         });
    }
    


   

    return (
        <>
            <div className="Bookform">
                <span>Booking Deatils </span>
                <form action="">

                    <input type="text" placeholder="FirstName" value={firstname} onChange={(e) => setFirstname(e.target.value)} /> <br />

                    <input type="text" placeholder="LastName" value={lastname} onChange={(e) => setLastname(e.target.value)} /> <br />

                    <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />

                    <input type="number" placeholder="Phone Number" value={mobile} onChange={(e) => setMobile(e.target.value)} /> <br />
                </form>
                <div className="checkboxdiv1">
                    <input type="radio" value="male" name="name" checked={selectedOption === "male"} onChange={(e) => setSelectedOption(e.target.value)} />
                    <label htmlFor="male">male</label>
                    <input type="radio" value="female" name="name" checked={selectedOption === "female"} onChange={(e) => setSelectedOption(e.target.value)} />
                    <label htmlFor="female">Female</label>
                    <input type="radio" value="lname" name="name" checked={selectedOption === "others"} onChange={(e) => setSelectedOption(e.target.value)} />
                    <label htmlFor="male">Others</label>
                </div>


                <div className='calender'>
                    <sapn htmlFor="male">To date</sapn>
                    <input type="date" placeholder="dd-mm-yyyy" value={startdate} onChange={(e) => setStartdate(e.target.value)} /> <br />
                    <sapn htmlFor="male">To from</sapn>
                    <input type="date" placeholder="dd-mm-yyyy" value={lastdate} onChange={(e) => setLastdate(e.target.value)} /> <br />
                </div>
                <button className='btn2' onClick={userhandledata}>Book Now</button>
            </div>
        </>
    )
}

export default BookForm
