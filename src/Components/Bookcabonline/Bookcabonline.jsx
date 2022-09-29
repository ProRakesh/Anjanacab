import React from 'react'
import './Bookcabonline.css'

const Bookcabonline = () => {
    return (
        <>
                <div className="booktitle">
                    <span>Book Cab Online</span>
                    <span>Easy and Fast Booking</span>

                </div>
                <div className="formmenu">

                    <form action="/">

                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <input type="text" placeholder='Mobile' />
                        <input type="text" placeholder='Pickup' />
                        <input type="Date" placeholder='Date' />
                        <input type="time" placeholder='Time Select' />
                        <input type="number" placeholder='Total Passaenger' />
                        <select name="cars" id="cars">
                            <option value="select"> Select Car</option>
                            <option value="Swift Dzire">Swift Dzire</option>
                            <option value="Toyota Etios">Toyota Etios</option>

                            <option value="Innova">Innova</option>
                            <option value="Crysta">Crysta</option>
                            <option value="Tovera">Tovera</option>
                            <option value="Tempo Travellor">Tempo Travellor</option>



                        </select>






                        <select name="Required Car" id="Reqcar">

                            <option value="required Car">Required Car</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value=" More Then 5">More Then 5</option>

                        </select>


                        <select name="Trip" id="Trip">

                            <option value="Select Trip ">Select Trip</option>
                            <option value="one way ">one way</option>
                            <option value="two way  ">two way </option>
                            <option value="Tour Package ">Tour Package</option>

                        </select>

                        <input type="textarea" placeholder='Message' />

                        <button className="btn"type="submit">Book Now</button>
                    </form>
                </div>


          

        </>
    )
}

export default Bookcabonline