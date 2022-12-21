import Header from "../components/header";
import Board from "../components/board";
import {useParams} from "react-router-dom";

function Home() {
    let { id } = useParams();
    return (
        <div>
            <Header />
            <Board path={id}/>
        </div>
    )
}

export default Home
