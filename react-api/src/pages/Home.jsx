import Header from "../components/header";
import Form from "../components/Project/create";

import Board from "../components/board";

function Home() {
    return (
        <div>
            <Header />
            <Board />
            <Form />
        </div>
    )
}

export default Home