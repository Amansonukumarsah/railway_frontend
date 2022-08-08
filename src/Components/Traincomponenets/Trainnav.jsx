import React from 'react'
import { NavLink } from 'react-router-dom';
const Trainnav = () => {
    return (
        <>
            <div className='my-3'>
                <div className='trainnav my-3'>
                    <NavLink style={{ textDecoration: 'none' }} to='/train/ts'>
                        <ul style={{ listStyleType: 'None' }}>
                            <li>
                                Train_Schedule
                            </li>
                        </ul>
                    </NavLink>
                </div>

                <div className="trainnav my-3">
                    <NavLink style={{ textDecoration: 'none' }} to='/train/pnr'>
                        <ul style={{ listStyleType: 'None' }}>
                            <li>
                                PNR_Status
                            </li>
                        </ul>
                    </NavLink>
                </div>

                <div className="trainnav my-3">
                    <NavLink style={{ textDecoration: 'none' }} to='/train/can'>
                        <ul style={{ listStyleType: 'None' }}>
                            <li>
                                Cancel_Ticket
                            </li>
                        </ul>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Trainnav;
