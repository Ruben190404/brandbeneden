import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Burndown from "./pages/Burndown";
import Dashboard from "./pages/Dashboard";


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
                <Route
                    path={`/dashboard`}
                    element={
                        <Dashboard />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
