import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Burndown from "./pages/Burndown";


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
                <Route
                    path={`/burndown`}
                    element={
                        <Burndown />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
