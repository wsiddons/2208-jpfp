import React from "react";
import { Routes, Route } from 'react-router-dom'
import CampusList from "./components/CampusList";
import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";
import Home from "./components/Home";


function App() {


    return (
        <>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path={'/campuses'} element={<CampusList />} />
                <Route path={'/students'} element={<StudentList />} />
            </Routes>

        </>

    )
}

export default App;