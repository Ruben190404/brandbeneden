import Home from "./pages/Home";
import TokenStorage from "./pages/TokenStorage";
import ShowSprints from "./components/Sprint/show";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useContext, useState} from "react";
import Burndown from "./pages/Burndown";
import Dashboard from "./pages/Dashboard";
import SprintEditForm from "./components/Sprint/edit";

// import pop from "./sounds/pop.mp3";
//
// document.addEventListener('keydown', function(event) {
//     // Create an audio element with the specified sound file
//     var audioElement = document.createElement('audio');
//     audioElement.setAttribute('src', pop);
//
//     // Play the sound
//     audioElement.play();
// });
//
// document.addEventListener('click', function(event) {
//     // Create an audio element with the specified sound file
//     var audioElement = document.createElement('audio');
//     audioElement.setAttribute('src', pop);
//
//     // Play the sound
//     audioElement.play();
// })

function App() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('b');
    // localStorage.setItem('token', token);
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
                {/*<ProtectedRoute>*/}
                    <Route path={"/"}>
                        <Route index element={<Home />}/>
                        <Route path={"/Burndown"}  element={<Burndown />}/>
                        <Route path={"/sprint-edit/:id"} element={<SprintEditForm />}/>
                    </Route>
                    <Route path={"/token_storage" + token}  element={<TokenStorage />}/>
                {/*</ProtectedRoute>*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
