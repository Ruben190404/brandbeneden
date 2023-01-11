import Header from "../components/header";
import SprintForm from "../components/Sprint/create";
import SprintShow from "../components/Sprint/show";
import SprintEditForm from "../components/Sprint/edit";
import Board from "../components/board";
import ProjectAddForm from "../components/Project/create";

function Home() {
    const handleLogin = () => {
        return window.location.href = 'https://laravel-api.test/login/azure';
    }

    return (
        <div>
            <Header />
            {/*<div className="flex flex-row">*/}
            {/*    <SprintShow why={"can't count"}/>*/}
            {/*    <SprintShow why={"sprint 69"}/>*/}
            {/*    <SprintShow why={"sprint 420"}/>*/}
            {/*</div>*/}

            {/*<SprintForm/>*/}
            {/*<SprintEditForm/>*/}
            {/*<Form />*/}
            {/*<ProjectAddForm />*/}
            {/*<ProjectEditForm />*/}
            <Board />
            <button onClick={handleLogin}>login</button>
        </div>
    )
}

export default Home
