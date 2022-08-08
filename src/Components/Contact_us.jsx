import React from 'react'
import railway from './Imagedata/railway.jpg'
import { useEffect,useState } from 'react'
import axios from 'axios';

const Contact_us = () => {
    const [data,setdata]=useState({
        email:'',
        contact:'',
        feed_back:''
    })

    const change=(e)=>{
        const arr={...data}
        arr[e.target.id]=e.target.value
        setdata(arr)
    } 

   
    const submit=(e)=>{
        e.preventDefault();
        async function postdata()
        {
            try {
                const postdata=await axios.post("http://127.0.0.1:8000/api/stu/create/",{
                    email:data.email,
                    contact:data.contact,
                    feed_back:data.feed_back
                })
            } catch (error) {
                console.log(error)
            }
        }
        postdata()
    }

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
                                <div className="card" style={{backgroundColor:'pink'}}>
                                    <div className="card-title text-center text-black">
                                        Contact_Us
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={submit}>

                                            <label htmlFor="">
                                                Email: <input 
                                                type="email" 
                                                placeholder='Email' 
                                                id='email'
                                                value={data.email}
                                                onChange={change}
                                                />
                                            </label>

                                            <br /><br />

                                            <label htmlFor="">
                                                Contact_Number:<input 
                                                type="number" 
                                                placeholder='Contact_Number'
                                                id='contact'
                                                value={data.number}
                                                onChange={change}
                                                 />
                                            </label>

                                            <br /><br />
                                            <label htmlFor="">
                                                Fedd_Back: <textarea 
                                                name="feed_back" 
                                                cols="30" 
                                                rows="10"
                                                id='feed_back'
                                                value={data.feed_back}
                                                onChange={change}
                                                />
                                            </label>
                                            <br /><br />
                                            <div className='text-center'>
                                                <button className='btn btn-success'>Submit</button>
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

export default Contact_us;