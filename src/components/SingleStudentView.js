import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCampuses } from '../store/reducers/campusReducer'
import { getStudents } from '../store/reducers/studentReducer'


function SingleStudentView() {

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

    const singleStudent = state.students.filter(student => {
        if (idNum === student.id) {
            return true
        }
    })
    // console.log(singleStudent)
    const singleCollege = state.campuses.filter(college => {
        if (singleStudent[0].campusId === college.id) {
            return true
        }
    })

    const noSchool = (
        <h3>Not attending a school</h3>
    )

    return (
        <div>
            <h1 className='single-student-title'>Single Student View</h1>
            <div className='single-student-container'>
                {singleStudent.map((student, idx) =>
                    <div key={student.id} className='single-student-card'>
                        <h1>{`${student.firstName} ${student.lastName}`}</h1>
                        <img src={student.imageUrl} width='200px' />
                        {singleCollege.length > 0 ? <Link to={`/campuses/${singleCollege[0].id}`}><h3>College: {singleCollege[0].name}</h3></Link> : noSchool}
                        <h3>Email: {student.email}</h3>
                        <h3>GPA: {student.gpa}</h3>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SingleStudentView