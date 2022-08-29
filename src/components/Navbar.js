import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='nav-container'>
            {/* <div>
                <h1>2208 JPFP: </h1>
            </div>
            <div>
                <h1>Campuses</h1>
            </div>
            <div>
                <h1>Students</h1>
            </div> */}
            <h1>2208 JPFP: </h1>
            <Link to='/'>
                <h1>Home</h1>
            </Link>
            <Link to='campuses'>
                <h1 className='link'>Campuses</h1>
            </Link>
            <Link to='students'>
                <h1 className='link'>Students</h1>
            </Link>

        </div>
    )
}

export default Navbar