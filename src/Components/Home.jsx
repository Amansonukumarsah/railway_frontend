import React from 'react'
import Navbar from './Navbar'
import Front from './Front'
import Login from './Login'
import Registration from './Registration'
import Contact_us from './Contact_us'
import { Routes,Route } from 'react-router'
import Cancel from './Traincomponenets/Cancel'
import  Trainsechudle from './Traincomponenets/Trainsechudle'
import Pnr from './Traincomponenets/Pnr'
import Trainmain from './Traincomponenets/Trainmain'
import Search from './Searchcomponens/Search'
import Book from './Searchcomponens/Book'
import Finalbook from './Searchcomponens/Finalbook'
const Home = () => {
  return (
    <>
    <div>
        <div>
         <Navbar/>
        </div>
        <div>
         <Routes>
             <Route exact path='/' element={<Front/>} />
             <Route exact path='/login' element={<Login/>} />
             <Route exact path='/reg' element={<Registration/>} />
             <Route exact path='/con' element={<Contact_us/>} />
             <Route exact path='/can' element={<Cancel/>} />
             <Route exact path='/train' element={<Trainmain/>}>
               <Route exact path='pnr' element={<Pnr/>}/>
               <Route exact path='can' element={<Cancel/>}/>
               <Route exact path='Ts' element={<Trainsechudle/>}/>
             </Route>
             <Route exact path="/se" element={<Search/>}/>
             <Route exact path="/bk" element={<Book/>}/>
             <Route exact path="/fb" element={<Finalbook/>}/>
         </Routes>
        </div>
    </div>
    </>
  )
}

export default Home;