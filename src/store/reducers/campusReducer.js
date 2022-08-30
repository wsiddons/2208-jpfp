
import axios from "axios"
const GET_CAMPUSES = 'GET_CAMPUSES'

export const showCampuses = (campuses) => {
    return {
        type: GET_CAMPUSES,
        campuses
    }
}

export function getCampuses() {
    return async function getCampusesThunk(dispatch, getState) {
        const response = await axios.get('/api/campuses')
        dispatch(showCampuses(response.data))
    }
}


const reducer = (state = [], action) => {
    switch (action.type) {
        case GET_CAMPUSES:
            return action.campuses
        default:
            return state
    }
}

export default reducer