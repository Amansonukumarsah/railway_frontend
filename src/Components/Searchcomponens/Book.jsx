import React from 'react'
import { NavLink } from 'react-router-dom';
import railway from './Searchdataimage/railway.jpg'
const Book = () => {
  return (
    <>
      <div className='front'>
        <div className='railway'>
          <img src={railway} alt="" srcset="" />
        </div>
        <div className="container-fluid book " style={{ marginTop: '-1000px' }}>
          <div className="row">
            <div className="col-5 offset-4">
              <div className='form'>
                <div className="card" style={{ backgroundColor: 'pink' }}>
                  <div className="card-title text-center text-black">
                    Please Fill th Passenger Details....
                  </div>
                  <div className='d-flex'>
                   <small className='text-danger'>Ticket_fare:-</small>
                    <strong className='mx-2 text-success'>255</strong>
                  </div>
                  <div className="card-body">
                    <form>
                      <input type="text" placeholder='username' />
                      <input className='mx-5' type="text" placeholder='Name' />
                      <br /><br />
                      <input type="text" placeholder='Last_Name' />
                      <label className='mx-5' htmlFor="">
                        DOB: <input type="date" placeholder='' />
                      </label>
                      <br /><br />
                      <input type="email" placeholder='Email' />
                      <input className='mx-5' type="text" placeholder='Gender' />
                      <br /><br />
                      <select name="Number_of_Passenger" id="">
                        <option value="">Number_of_Passenger</option>
                        <option value="1">1</option>
                        <option value="3">2</option>
                        <option value="4">4</option>
                      </select>
                      <br /><br />
                      <div className='d-flex '>
                      <NavLink to='/'>
                        <button className='btn btn-danger'>Cancel</button>
                      </NavLink>
                      <NavLink className='mx-3' to='/fb'>
                        <button className='btn btn-success'>Submit</button>
                      </NavLink>
                      </div>
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

export default Book;
