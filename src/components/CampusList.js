import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getCampuses } from '../store/reducers/campusReducer'
import { getStudents } from '../store/reducers/studentReducer'

function CampusList() {

    const dispatch = useDispatch()
    const params = useParams()
    const state = useSelector(state => state)


    useEffect(() => {
        const awaitingData = async () => {
            await getStudents()(dispatch)
            await getCampuses()(dispatch)
        }
        awaitingData()

    }, [])


    return (
        <div className='campus-list'>
            <h1>Campus List</h1>
            <div className='campus-container'>
                {state.campuses.map((campus, idx) =>
                    <div key={campus.id} className='campus-card'>
                        <h1>{campus.name}</h1>
                        <Link to={`${idx + 1}`}>
                            <img src={campus.imageUrl} width='200px' />
                        </Link>
                        <h2>Address:</h2>
                        <h3>{campus.address}</h3>
                        <p>{campus.description}</p>
                    </div>
                )}
            </div>
        </div>

    )
}

export default CampusList