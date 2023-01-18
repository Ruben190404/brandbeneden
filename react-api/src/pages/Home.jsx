import Header from "../components/header";
import Board from "../components/board";
import {useParams} from "react-router-dom";
import List from "../components/Sprint/list";


function Home() {
    
    let { id } = useParams();
    console.log("home render");
    return (
        <div>
            <Header />
            <Board path={id}/>
        </div>
    )
}

export default Home
