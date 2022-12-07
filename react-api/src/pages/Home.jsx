import Header from "../components/header";
import SprintForm from "../components/Sprint/create";
import SprintShow from "../components/Sprint/show";
import SprintEditForm from "../components/Sprint/edit";
import Board from "../components/board";
import ProjectAddForm from "../components/Project/create";
import SprintBurndown from "../components/SprintBurndown";


function Home() {
    return (
        <div>
            <Header />
            {/*<div className="flex flex-row">*/}
            {/*    <SprintShow why={"can't count"}/>*/}
            {/*    <SprintShow why={"sprint 69"}/>*/}
            {/*    <SprintShow why={"sprint 420"}/>*/}
            {/*</div>*/}
            <SprintBurndown/>

            {/*<SprintForm/>*/}
            {/*<SprintEditForm/>*/}
            {/*<ProjectAddForm />*/}
            {/*<ProjectEditForm />*/}
            <Board />
        </div>
    )
}

export default Home
