import React from 'react'
import { NavLink } from "react-router-dom";
import tik from './Searchdataimage/tik.jpg'
import axios from 'axios';
import { useState, useEffect } from 'react';

const Finalbook = () => {
  const [students, setstudents] = useState([])

  useEffect(() => {
    async function getdata() {
      try {
        const students = await axios.get("http://127.0.0.1:8000/api/stu/")
        console.log(students.data)
        setstudents(students.data)
      } catch (error) {
        console.log(error)
      }
    }
    getdata()
  }, [])

  return (
    <>
      <div className='bg-success' style={{ height: '645px', width: '1520px' }}>
        <div className="contaner-fluid">
          <div className="row">
            {
              students.map((val,key)=>{
                 return (
                   <h1 id={key}>{val.Train_No}</h1>
                 )
              })
            }
            <div className="col-4 offset-4">
              <div className="card" style={{ marginTop: '100px' }}>
                <div className='text-center'>
                  <h4 className='text-success'>.......CONFORM.......</h4>
                </div>
                <div className='text-center'>
                  <img src={tik} alt="" srcset="" />
                </div>
                <div className='text-center'>               
                <div className='d-flex text-center'>
                  <p>Nmae</p>
                  <strong className='mx-2'>Aman Kumar Sah</strong>
                </div>
                <div className='d-flex'>
                  <p>Laugage_Number</p>
                  <strong  className='mx-2'>4</strong>
                </div>
                <div className='d-flex'>
                  <p>Fare</p>
                  <strong  className='mx-2'>255</strong>
                </div>
                </div>
                <div className='my-3 text-center'>
                  <NavLink to='/'>
                    <button className='btn btn-warning'>Go_To_Home_Page</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div>
    </div>
    </>
  )
}


export default Finalbook;