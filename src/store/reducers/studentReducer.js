

import axios from 'axios'
import { fetchStudents } from '../actions/studentActions'
let initialState = [{
    id: 1,
    firstName: 'Carl',
    lastName: 'Wheezer',
    imgUrl: 'https://lastfm.freetls.fastly.net/i/u/ar0/a771c29d9ee82c2e9455211bddcc5a84.jpg',
    email: 'carlWheezer420@gmail.com',
    gpa: 2.3
}, {
    id: 2,
    firstName: 'Jimmy',
    lastName: 'Neutron',
    imgUrl: 'https://www.looper.com/img/gallery/things-only-adults-notice-in-jimmy-neutron/intro-1602679825.jpg',
    email: 'jN00t69@gmail.com',
    gpa: 4.0
}, {
    id: 3,
    firstName: 'Sheen',
    lastName: 'Estevez',
    imgUrl: 'https://pbs.twimg.com/media/CtFNnScUAAEXdgQ.jpg',
    email: 'dummythickskull12@gmail.com',
    gpa: 1.2
}, {
    id: 4,
    firstName: 'Carl',
    lastName: 'Wheezer',
    imgUrl: 'https://lastfm.freetls.fastly.net/i/u/ar0/a771c29d9ee82c2e9455211bddcc5a84.jpg',
    email: 'carlWheezer420@gmail.com',
    gpa: 2.3
}, {
    id: 5,
    firstName: 'Bolbi',
    lastName: 'Stroganovski',
    imgUrl: 'https://static.wikia.nocookie.net/jimmyneutron/images/2/20/Bolbi.png/',
    email: 'bolbiking@gmail.com',
    gpa: 3.1
}]

// let initialState = fetchStudents()
const GET_STUDENTS = 'GET_STUDENTS'

export const showStudents = (students) => {
    return {
        type: GET_STUDENTS,
        students
    }
}

export function getStudents() {
    return async function getStudentsThunk(dispatch, getState) {
        const response = await axios.get('/api/students')
        // console.log(response)
        dispatch(showStudents(response.data))
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_STUDENTS':
            // console.log(action)
            return action.students
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

