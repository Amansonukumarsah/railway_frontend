import React from 'react'
import railway from './Imagedata/railway.jpg'

const Registration = () => {
    return (
        <>
            <div className='front'>
                <div className='railway'>
                    <img src={railway} alt="" srcset="" />
                </div>
                <div className="container-fluid book ">
                    <div className="row">
                        <div className="col-5 offset-4">
                            <div className='form'>
                                <div className="card" style={{backgroundColor:'green'}}>
                                    <div className="card-title text-center text-black">
                                        Registere_here
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <input type="text" placeholder='username' />
                                            <input className='mx-5' type="text" placeholder='Name' />
                                            <br /><br />
                                            <input  type="text" placeholder='Last_Name' />
                                            <label className='mx-5' htmlFor="">
                                                DOB: <input  type="date" placeholder='' />
                                            </label>
                                            <br /><br />
                                            <input type="email" placeholder='Email' />
                                            <input className='mx-5' type="text" placeholder='Gender' />
                                            <br /><br />
                                            <input type="password" placeholder='Conform_Password' />
                                            <input className='mx-5' type="password" placeholder='Password' />
                                            <br /><br />
                                            <button className='btn btn-success'>Register</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration;