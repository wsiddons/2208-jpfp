
import axios from "axios"
const GET_CAMPUSES = 'GET_CAMPUSES'
const ADD_CAMPUS = 'ADD_CAMPUS'
const DELETE_CAMPUS = 'DELETE_CAMPUS'
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'

export const showCampuses = (campuses) => {
    return {
        type: GET_CAMPUSES,
        campuses
    }
}

export const addCampus = (campus) => {
    return {
        type: ADD_CAMPUS,
        campus
    }
}

export const deleteCampus = (campus) => {
    return {
        type: DELETE_CAMPUS,
        campus
    }
}

export const updateCampus = (campus) => {
    return {
        type: UPDATE_CAMPUS,
        campus
    }
}

export function getCampuses() {
    return async function getCampusesThunk(dispatch, getState) {
        const response = await axios.get('/api/campuses')
        dispatch(showCampuses(response.data))
    }
}

export const addCampusThunk = (campus) => {
    return async (dispatch) => {
        const data = await axios.post('/api/campuses', campus)
        console.log(data)
        dispatch(addCampus(data.data))
    }
}

export const deleteCampusThunk = (campusId) => {
    return async (dispatch) => {
        const data = await axios.delete(`/api/campuses/${campusId}`)
        dispatch(deleteCampus(data.data))
    }
}

export const updateCampusThunk = (campus) => {
    return async (dispatch) => {
        const data = await axios.put(`/api/campuses/${campus.id}`, campus)
        dispatch(updateCampus(data.data))
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case GET_CAMPUSES:
            return action.campuses
        case ADD_CAMPUS:
            return [...state, action.campus]
        case DELETE_CAMPUS:
            return state.filter((campus) => campus.id !== action.campus.id)
        case UPDATE_CAMPUS:
            return state.map((campus) =>
                campus.id === action.campus.id ? action.campus : campus
            )
        // return [...state, action.campus]
        default:
            return state
    }
}

export default reducer