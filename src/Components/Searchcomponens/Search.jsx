import React from 'react'
import { NavLink } from 'react-router-dom';
import search from './Searchdata';
const Search = () => {
  return (
    <>
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-12">
            {
              search.map((val, key) =>{
                return (
                <div className = "card my-3" >
                <div className="card-body">
                  <div className="card-title text-center" style={{backgroundColor:'rgba(0, 43, 80, 0.295)'}}>
                    <h4 >{val.Train_Name}</h4>
                  </div>
                  <div className="card-text d-flex my-3">
                    <h4>{val.DTime}</h4>
                    <small style={{marginLeft:'200px'}}>{val.between}</small>
                    <h4  style={{marginLeft:'500px'}}>{val.Atime}</h4>
                  </div>
                  
                </div>
                <div className="card-footer">
                     <div className='d-flex'>
                     <strong className='mx-4 text-danger'>{val.container}</strong>
                     <strong className='mx-4 text-success'>{val.weight}</strong>
                     </div>
                </div>
                <NavLink to='/login' className='my-3'>
                  <button className='btn btn-warning'>BOOK</button>
                </NavLink>
              </div>
                )
             })
           }
        </div>
      </div>
    </div>
    </>
  )
}


export default Search;