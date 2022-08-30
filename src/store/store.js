
import { createStore } from 'redux'
import reducers from './reducers/index'

export const store = createStore(
    reducers,
    {}
)




// import { configureStore } from "@reduxjs/toolkit";
// import studentReducer from "./reducers/studentReducer";

// export const store = configureStore({
//     reducer: {
//         student: studentReducer
//     }
// })


