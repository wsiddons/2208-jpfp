import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to={'/campuses'}>
                <button>CAMPUSES</button>
            </Link>

            <button>STUDENTS</button>

        </div>
    )
}

export default Home