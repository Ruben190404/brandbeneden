import Home from "./pages/Home";
import TokenStorage from "./pages/TokenStorage";
import ShowSprints from "./components/Sprint/show";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useContext, useState} from "react";
import Burndown from "./pages/Burndown";
import Dashboard from "./pages/Dashboard";
import SprintEditForm from "./components/Sprint/edit";
import {AuthContext} from "./contexts/AuthContext";
// import pop from "./sounds/pop.mp3";


function App() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('b');
    const { setUser } = useContext(AuthContext);

    const ProtectedRoute = ({ children }) => {
        if (setUser === false) {
            window.location.href = 'https://laravel-api/login/azure';
        }

        return children
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"}>
                    <Route index element={<ProtectedRoute><Home /></ProtectedRoute>}/>
                    <Route path={"/Burndown"}  element={<ProtectedRoute><Burndown /></ProtectedRoute>}/>
                    <Route path={"/sprint-edit/:id"} element={<ProtectedRoute><SprintEditForm /></ProtectedRoute>}/>
                </Route>
                <Route path={"/token_storage" + token}  element={<ProtectedRoute><TokenStorage /></ProtectedRoute>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
