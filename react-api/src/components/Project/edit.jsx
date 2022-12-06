import '../../styles/main.css';
import {useState} from "react";
import axios from "axios";


function Update() {
    const title = document.getElementById('projectUpdateTitle').value;
    const start_date = document.getElementById('project_update_start_date').value;
    const end_date = document.getElementById('project_update_end_date').value;

    axios.put("http://localhost:8000/api/projects/update/1", {
        title: title,
        start_date: start_date,
        end_date: end_date,
    }).then((response) => {
        console.log("Updated");
        window.location.reload();
    }).catch((error) => {
        console.log(error);
    })
}

function SoftDelete() {
    axios.put("http://localhost:8000/api/projects/delete/1",{
        soft_delete: new Date().toISOString().slice(0, 19).replace('T', ' ').replace('Z', '')
    }).then((response) => {
        console.log("Soft deleted");
        window.location.reload();
    }).catch((error) => {
        console.log(error);
    })
}

function ProjectEditForm() {
    const [title, setTitle] = useState('');
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');

    axios.get("http://localhost:8000/api/projects/1").then((response) => {
        let start_date_data = new Date(response.data.project.start_date).toISOString().slice(0, 10);
        let end_date_data = new Date(response.data.project.end_date).toISOString().slice(0, 10);
        setTitle(response.data.project.title);
        setStart_date(start_date_data);
        setEnd_date(end_date_data);
    }).catch((error) => {
        console.log(error);
    })

    return (
        <div className="flex justify-center items-center h-screen w-full fixed">
            <form className="form justify-around primary-background-colour">
                <h2>Edit Project</h2>
                <input className="text-center rounded-lg border-2 border-black bg-violet-300 w-52" type="text"
                       id="projectUpdateTitle" name="title" placeholder="Title" defaultValue={title}/>
                <p>Dropdown voor members</p>
                <div className="flex flex-col items-center rounded-lg border-2 border-black w-52 h-16 bg-violet-300">
                    <label htmlFor="start_date">Start Date</label>
                    <input type="date" id="project_update_start_date" className="bg-violet-300" name="start_date"
                           placeholder="Start Date" defaultValue={start_date}/>
                </div>
                <div className="flex flex-col items-center rounded-lg border-2 border-black w-52 h-16 bg-violet-300">
                    <label htmlFor="end_date">End Date</label>
                    <input type="date" id="project_update_end_date" className="bg-violet-300" name="end_date" placeholder="End Date" defaultValue={end_date}/>
                </div>
                <button className="text-center rounded-lg border-2 border-black w-32 bg-green-400" type="button"
                        onClick={Update}>Submit/Cancel
                </button>
                <button className="text-center rounded-lg border-2 border-black w-32 bg-red-400" type="button" onClick={SoftDelete}>
                    Delete
                </button>
            </form>
        </div>
    );
}

export default ProjectEditForm