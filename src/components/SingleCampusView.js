import React, { useEffect, useState } from 'react'
import { useParams, Link, Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCampuses } from '../store/reducers/campusReducer'
import { getStudents } from '../store/reducers/studentReducer'

function SingleCampusView() {

    const params = useParams()
    const idNum = Number(params.id)
    const state = useSelector(state => state)
    const dispatch = useDispatch()


    useEffect(() => {
        const awaitingData = async () => {
            await getStudents()(dispatch)
            await getCampuses()(dispatch)
        }
        awaitingData()
    }, [])

    const singleCampus = state.campuses.filter(campus => {
        if (idNum === campus.id) {
            return true
        }
    })

    const studentList = state.students.filter(student => {
        if (student.campusId === singleCampus[0].id) {
            return true
        }
    })
    //link appends rather than replaces
    const studentAttendingList = (
        <>
            <h1>Students Attending {singleCampus[0].name}:</h1>
            {studentList.map(student =>
                <Link to={`/students/${student.id}`}>
                    <h3 key={student.id}>{student.firstName} {student.lastName}</h3>
                </Link>

            )}
        </>
    )
    const noStudentsAttending = (
        <>
            <h1>No students currently attending {singleCampus[0].name}</h1>
        </>
    )


    return (
        <div>
            <h1 className='single-campus-title'>Single Campus View</h1>

            <div className='single-campus-container'>
                {singleCampus.map((campus) =>
                    <div key={campus.id} className='single-campus-card'>
                        <h1>{campus.name}</h1>
                        <img src={campus.imgUrl} />
                        {studentList.length > 0 ? studentAttendingList : noStudentsAttending}
                        <h2>Address:</h2>
                        <h3>{campus.address}</h3>
                        <h2>Description:</h2>
                        <p>{campus.description}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SingleCampusView