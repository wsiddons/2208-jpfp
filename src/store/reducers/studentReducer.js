

import axios from 'axios'
import { fetchStudents } from '../actions/studentActions'


// let initialState = fetchStudents()
const GET_STUDENTS = 'GET_STUDENTS'
const ADD_STUDENTS = 'ADD_STUDENTS'

export const showStudents = (students) => {
    return {
        type: GET_STUDENTS,
        students
    }
}

export const addStudent = (student) => {
    return {
        type: ADD_STUDENTS,
        student
    }
}

export function getStudents() {
    return async function getStudentsThunk(dispatch, getState) {
        const response = await axios.get('/api/students')
        // console.log(response)
        dispatch(showStudents(response.data))
    }
}

export const addStudentThunk = (student) => {
    return async (dispatch) => {
        const data = await axios.post('api/students', student)
        console.log(data)
        dispatch(addStudent(data.data))
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_STUDENTS':
            // console.log(action)
            return action.students
        case 'ADD_STUDENTS':
            return [...state, action.student]
        default:
            return state
    }
}

export default reducer



// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// // import { fetchStudents } from "../actions/studentActions";

// const fetchUsers = createAsyncThunk(
//     'api/students',
//     async()
// )

// const initialState = []

// export const studentSlice = createSlice({
//     name: 'student',
//     initialState,
//     reducers: {
//         getStudents: (state) => {
//             return state
//         }
//     }
// })

// export const { getStudents } = studentSlice.actions

// export default studentSlice.reducer

