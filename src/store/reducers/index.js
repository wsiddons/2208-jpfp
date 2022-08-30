import { combineReducers } from 'redux'
import studentReducer from './studentReducer'
import campusReducer from './campusReducer'

const reducers = combineReducers({
    students: studentReducer,
    campuses: campusReducer
})

export default reducers