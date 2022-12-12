import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import pop from "./sounds/pop.mp3";

document.addEventListener('keydown', function(event) {
    // Create an audio element with the specified sound file
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', pop);

    // Play the sound
    audioElement.play();
});

document.addEventListener('click', function(event) {
    // Create an audio element with the specified sound file
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', pop);

    // Play the sound
    audioElement.play();
})

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    element={
                        <Home />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
