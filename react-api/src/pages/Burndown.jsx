import Header from "../components/header";
import SprintBurndown from "../components/SprintBurndown";
import axios from "axios";

function Burndownpage() {
    return (
        <div>
            <Header />
            <SprintBurndown/>
        </div>
    )
}

export default Burndownpage