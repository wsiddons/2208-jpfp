import React from "react";
import { Routes, Route } from 'react-router-dom'
import CampusList from "./components/CampusList";
import Home from "./components/Home";
import StudentList from "./components/StudentList";


function App() {


    return (
        <>
            <Routes>
                {/* <Route index element={<Home />} /> */}
                {/* <Route index element={<CampusList />} /> */}
                <Route index element={<StudentList />} />
            </Routes>

        </>

    )
}

export default App;