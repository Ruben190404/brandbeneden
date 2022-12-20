import Header from "../components/header";
import SprintForm from "../components/Sprint/create";
import SprintEditForm from "../components/Sprint/edit";
import Board from "../components/board";
import ProjectAddForm from "../components/Project/create";


function Home() {
    return (
        <div>
            <Header />
            <Board />
        </div>
    )
}

export default Home
