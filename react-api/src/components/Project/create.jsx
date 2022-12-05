import '../../styles/main.css';
import axios from "axios";

function Create() {
    const title = document.getElementById('projectTitle').value;
    const start_date = document.getElementById('project_start_date').value;
    const end_date = document.getElementById('project_end_date').value;

    axios.post("http://localhost:8000/api/projects/store", {
        title: title,
        start_date: start_date,
        end_date: end_date,

    }) .then((response) => {
        console.log("Added");
        window.location.reload();
    }) .catch((error) => {
        console.log(error);
    })
}

function ProjectForm() {
    return (
        <div className="flex justify-center items-center h-screen w-full fixed">
            <form className="form justify-around primary-background-colour">
                <h2>Add Project</h2>
                <input className="text-center rounded-lg border-2 border-black bg-violet-300 w-52" type="text"
                       id="projectTitle" name="title" placeholder="Name"/>
                <p>Dropdown voor members</p>
                <div className="flex flex-col items-center rounded-lg border-2 border-black w-52 h-16 bg-violet-300">
                    <label htmlFor="start_date">Start Date</label>
                    <input type="date" id="project_start_date" className="bg-violet-300" name="start_date"
                           placeholder="Start Date"/>
                </div>
                <div className="flex flex-col items-center rounded-lg border-2 border-black w-52 h-16 bg-violet-300">
                    <label htmlFor="end_date">End Date</label>
                    <input type="date" id="project_end_date" className="bg-violet-300" name="end_date" placeholder="End Date"/>
                </div>
                <button className="text-center rounded-lg border-2 border-black w-32 bg-green-400" type="button"
                        onClick={Create}>Submit
                </button>
            </form>
        </div>
    );
}

export default ProjectForm