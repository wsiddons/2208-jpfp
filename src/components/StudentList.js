import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { getCampuses } from '../store/reducers/campusReducer'
import { getStudents } from '../store/reducers/studentReducer'
import StudentSideView from './StudentSideView'
import { deleteStudentThunk } from '../store/reducers/studentReducer'

function StudentList() {
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
        <div className='student-page-container'>
            <h1 className='single-student-title'>Student List</h1>
            <div className='student-list'>
                <div className='student-container'>
                    {state.students.map((student, idx) =>
                        <div key={student.id} className='student-card'>
                            <h1>{`${student.firstName} ${student.lastName}`}</h1>
                            <Link to={`${idx + 1}`}>
                                <img src={student.imageUrl} width='200px' />
                            </Link>
                            {/* <h3>School: {student.campusId}</h3> */}
                            <h3>Email: {student.email}</h3>
                            <h3>GPA: {student.gpa}</h3>
                            <button onClick={() => deleteStudentThunk(student.id)(dispatch)}>Delete Student</button>
                        </div>
                    )}
                </div>
                <div className='add-container'>
                    <StudentSideView />
                </div>
            </div>
        </div>
    )
}

export default StudentList