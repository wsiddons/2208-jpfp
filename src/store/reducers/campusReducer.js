
import axios from "axios"
const GET_CAMPUSES = 'GET_CAMPUSES'
const ADD_CAMPUS = 'ADD_CAMPUS'

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

export function getCampuses() {
    return async function getCampusesThunk(dispatch, getState) {
        const response = await axios.get('/api/campuses')
        dispatch(showCampuses(response.data))
    }
}

export const addCampusThunk = (campus) => {
    return async (dispatch) => {
        const data = await axios.post('api/campuses', campus)
        console.log(data)
        dispatch(addCampus(data.data))
        // history.push('/')
    }
}


const reducer = (state = [], action) => {
    switch (action.type) {
        case GET_CAMPUSES:
            return action.campuses
        case ADD_CAMPUS:
            console.log(action.campus)
            console.log(state)
            return [...state, action.campus]
        default:
            return state
    }
}

export default reducer