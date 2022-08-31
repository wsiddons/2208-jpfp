import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updateStudentThunk } from '../store/reducers/studentReducer'

function UpdateStudent() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [gpa, setGpa] = useState('')
    const [school, setSchool] = useState('')
    const [id, setId] = useState(0)
    const params = Number(useParams().id)

    const studentFilter = state.students.filter(student => student.id === params)
    useEffect(() => {
        setId(studentFilter[0].id)
    }, [])



    const handleFirstName = (event) => {
        setFirstName(event.target.value)
    }
    const handleLastName = (event) => {
        setlastName(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleProfilePic = (event) => {
        setImageUrl(event.target.value)
    }
    const handleGpa = (event) => {
        setGpa(event.target.value)
    }
    const handleSchool = (event) => {
        setSchool(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        updateStudentThunk({ firstName, lastName, email, imageUrl, gpa, school, id })(dispatch)
    }
    return (
        <>
            <div className='student-update-container'>
                <form onSubmit={handleSubmit}>
                    <h2>Edit Student</h2>

                    <label>
                        First Name:
                        <input onChange={handleFirstName} type='text' name='firstName' placeholder='First Name' />
                    </label>
                    <label>
                        Last Name:
                        <input onChange={handleLastName} type='text' name='lastName' placeholder='Last Name' />
                    </label>
                    <label>
                        Email:
                        <input onChange={handleEmail} type='text' name='email' placeholder='Email' />
                    </label>
                    <label>
                        Profile Pic:
                        <input onChange={handleProfilePic} type='text' name='imageUrl' placeholder='Profile Picture' />
                    </label>
                    <label>
                        GPA:
                        <input onChange={handleGpa} type='text' name='gpa' placeholder='GPA' />
                    </label>
                    {/* <label>
                        School:
                        <select onChange={handleSchool}>
                            {state.campuses.map((campus, idx) =>
                                <>
                                    <option key={campus.id} value={campus.id}>{campus.name}</option>
                                </>
                            )}
                        </select>
                    </label> */}
                    <button type='submit'>Edit Student</button>
                </form>
            </div>
        </>
    )
}

export default UpdateStudent