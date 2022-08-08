import React from 'react'
import Trainnav from './Trainnav'
import { Outlet } from 'react-router'
const Trainmain = () => {
  return (
   <>
   <div className="container-fluid">
       <div className="row">
           <div className="col-2" style={{height:'700px',backgroundColor:'pink'}}>
               <Trainnav/>
           </div>
           <div className="col-10">
             <Outlet/>
           </div>
       </div>
   </div>
   </>
  )
}

export default Trainmain;
