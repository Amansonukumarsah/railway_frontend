import React from 'react'
import railway from './Trainimage/railway.jpg'

const Trainsechudle = () => {
    return (
        <>
            <div className='front'>
                <div className='railway'>
                    <img style={{ height: '700px' }} src={railway} alt="" srcset="" />
                </div>
                <div className="container-fluid bookpnr ">
                    <div className="row">
                        <div className="col-3 offset-4">
                            <div className='form'>
                                <table className="table text-white">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trainsechudle;