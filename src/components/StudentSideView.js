import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStudentThunk } from '../store/reducers/studentReducer'

function StudentSideView() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [gpa, setGpa] = useState('')
    const [school, setSchool] = useState('')

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
        addStudentThunk({ firstName, lastName, email, imageUrl, gpa, school })(dispatch)
    }

    return (
        <>
            <div className='student-side-view-container'>
                <form onSubmit={handleSubmit}>
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

                                    <option key={campus.id}>{campus.name}</option>
                                </>
                            )}
                        </select>
                    </label> */}
                    <button type='submit'>Add Student</button>
                </form>
            </div>
        </>
    )
}

export default StudentSideView