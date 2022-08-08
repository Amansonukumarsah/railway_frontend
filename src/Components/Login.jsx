import React from 'react'
import railway from './Imagedata/railway.jpg'
import { NavLink } from 'react-router-dom'
const Login = () => {
    return (
        <>
            <div className='front'>
                <div className='railway'>
                    <img src={railway} alt="" srcset="" />
                </div>
                <div className="container-fluid book ">
                    <div className="row">
                        <div className="col-3 offset-4">
                            <div className='form'>
                                <div className="card" style={{backgroundColor:'red'}}>
                                    <div className="card-title text-center text-black">
                                       Login_here
                                    </div>
                                    <div className="card-body">
                                    <form>
                                        <input type="text" placeholder='Username' />
                                        <br /><br />
                                        <input type="text" placeholder='Password' />
                                        <br /><br />
                                        <NavLink to='/bk'>
                                            <button className='btn btn-success'>Login</button>
                                        </NavLink>
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

export default Login;


