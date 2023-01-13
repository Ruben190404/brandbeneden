import Header from "../components/header";
import Board from "../components/board";
import {useParams} from "react-router-dom";
import List from "../components/Sprint/list";


function Home() {
    const handleLogin = () => {
        return window.location.href = 'https://laravel-api.test/login/azure';
    }
    
    let { id } = useParams();
    
    return (
        <div>
            <Header />
            <Board path={id}/>
            <button onClick={handleLogin}>login</button>
        </div>
    )
}

export default Home
