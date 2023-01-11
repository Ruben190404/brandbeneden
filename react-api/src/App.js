import Home from "./pages/Home";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {useContext, useState} from "react";


function App() {
    // const { currentUser  } = useContext();
    // const [currentUser, setCurrentUser] = useState(null);
    //
    // const ProtectedRoute = ({ children }) => {
    //     if (!currentUser) {
    //         window.location.href = 'https://laravel-api/login/azure';
    //     }
    //
    //     return children
    // };

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"}>
                    <Route
                        index
                        element={
                            // <ProtectedRoute>
                                <Home />
                            // </ProtectedRoute>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
