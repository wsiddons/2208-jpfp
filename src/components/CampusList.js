import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getCampuses } from '../store/reducers/campusReducer'
import { getStudents } from '../store/reducers/studentReducer'
import { deleteCampusThunk } from '../store/reducers/campusReducer'
import CampusSideView from './CampusSideView'

function CampusList() {

    const dispatch = useDispatch()
    const params = useParams()
    const state = useSelector(state => state)
    const [torf, setTorf] = useState(true)


    useEffect(() => {
        const awaitingData = async () => {
            await getStudents()(dispatch)
            await getCampuses()(dispatch)
        }
        awaitingData()

    }, [])

    let renderCampusList = (
        <>
            <div className='header-container'>
                <h1 >Campus List</h1>
                <button onClick={() => setTorf(!torf)}>Add Campus</button>
            </div>
            <div className='campus-list'>
                <div className='campus-container'>
                    {state.campuses.map((campus, idx) =>
                        <div key={campus.id} className='campus-card'>
                            <h1>{campus.name}</h1>
                            <Link to={`${campus.id}`}>
                                <img src={campus.imageUrl} width='200px' />
                            </Link>
                            <h2>Address:</h2>
                            <h3>{campus.address}</h3>
                            <p>{campus.description}</p>
                            <button onClick={() => deleteCampusThunk(campus.id)(dispatch)}>Delete Campus</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )

    console.log(torf)
    return (
        <>
            {torf ? renderCampusList : <CampusSideView torf={torf} setTorf={setTorf} />}
        </>
    )



}

export default CampusList