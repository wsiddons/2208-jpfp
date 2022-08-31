import React from "react";
import { Routes, Route } from 'react-router-dom'
import CampusList from "./components/CampusList";
import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";
import Home from "./components/Home";
import CampusSideView from "./components/CampusSideView";
import SingleCampusView from "./components/SingleCampusView";
import SingleStudentView from "./components/SingleStudentView";


function App() {


    return (
        <>
            <Navbar />
            <Routes>
                {/* <Route index element={<CampusSideView />} /> */}
                <Route index element={<Home />} />
                <Route index path={'/campuses'} element={<CampusList />} />
                <Route path={'campuses/:id'} element={<SingleCampusView />} />
                <Route path={'students'} element={<StudentList />} />
                <Route path={'students/:id'} element={<SingleStudentView />} />
            </Routes>
        </>
    )
}

export default App;