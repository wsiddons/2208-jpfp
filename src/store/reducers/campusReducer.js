
import axios from "axios"
const GET_CAMPUSES = 'GET_CAMPUSES'
const ADD_CAMPUS = 'ADD_CAMPUS'
const DELETE_CAMPUS = 'DELETE_CAMPUS'

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


const reducer = (state = [], action) => {
    switch (action.type) {
        case GET_CAMPUSES:
            return action.campuses
        case ADD_CAMPUS:
            return [...state, action.campus]
        case DELETE_CAMPUS:
            return state.filter((campus) => campus.id !== action.campus.id)
        default:
            return state
    }
}

export default reducer