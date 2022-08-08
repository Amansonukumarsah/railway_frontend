import React from 'react'
import railway from './Imagedata/railway.jpg'
import { NavLink } from 'react-router-dom'
const Front = () => {
    return (
        <>
            <div className='front'>
                <div className='railway'>
                    <img src={railway} alt="" srcset="" />
                </div>
                <div className="container-fluid book ">
                    <div className="row ">
                        <div className="col-5 offset-1 ">
                            <div className='form '>
                                <div className="card bg-primary">
                                    <div className="card-title text-center text-black">
                                        BOOKING_TICKETS
                                    </div>
                                    <div className="card-body">
                                        <form className='bg-primary'>
                                            <input type="text" placeholder='From' />
                                            <input className='mx-5' type="date" placeholder='' />
                                            <br /><br />
                                            <input type="text" placeholder='To' />
                                            <input className='mx-5'type="text" placeholder='classes' />
                                            <br /><br />
                                            
                                            <select name="Gender" id="">
                                                <option value="">
                                                    GENDERS
                                                </option>
                                                <option value="">
                                                    Male
                                                </option>
                                                <option value="">
                                                    Female
                                                </option>
                                                <option value="">
                                                   Others
                                                </option>
                                            </select>
                                           
                                            <br /><br />
                                           <NavLink to='/se'>
                                             <button className='btn btn-success'>Search</button>
                                           </NavLink>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <footer className='bg-black text-center'>
                    <h1>Developed_by:- AMAN KUMAR SAH</h1>
                </footer>
            </div>
        </>
    )
}


export default Front;
