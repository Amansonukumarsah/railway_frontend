import React from 'react'
import railway from './Trainimage/railway.jpg'

const Cancel = () => {
    return (
        <>
            <div className='front'>
                <div className='railway'>
                    <img style={{height:'700px'}}src={railway} alt="" srcset="" />
                </div>
                <div className="container-fluid bookpnr ">
                    <div className="row">
                        <div className="col-4 offset-4">
                            <div className='form '>
                                <div className="card bg-danger">
                                    <div className="card-title text-center text-black">
                                       CANCEL_TICKETS
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <label htmlFor="">
                                                PNR:  <input type="number" />
                                            </label>
                                            <button className='btn btn-success mx-2'>CANCEL</button>
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

export default Cancel;
