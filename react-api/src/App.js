import Home from "./pages/Home";
import ShowSprints from "./components/Sprint/show";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useContext, useState} from "react";
import Burndown from "./pages/Burndown";
import Dashboard from "./pages/Dashboard";
import SprintEditForm from "./components/Sprint/edit";
// import pop from "./sounds/pop.mp3";


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
                    <Route path=":id" element={<Home/>}/>
                    <Route path={"/Brundown"}  element={<Burndown />}/>
                    <Route path={"/sprint-edit/:id"} element={<SprintEditForm />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
