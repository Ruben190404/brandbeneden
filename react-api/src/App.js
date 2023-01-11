import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useContext, useState} from "react";
// import pop from "./sounds/pop.mp3";

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
