import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from "./pages/Login/index";

export default function RoutesFunction(){

    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>} />
        </Routes>
        </BrowserRouter>
    )

}