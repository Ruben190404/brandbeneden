import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SprintEditForm from "./components/Sprint/edit";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} index element={<Home />}/>
                <Route path={"/sprint-edit/:id"} element={<SprintEditForm />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
