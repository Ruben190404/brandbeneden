import '../../styles/main.css';

import React, {Component} from "react";
import {Link} from "react-router-dom";
import SimpleTrashCan from "../../Images/SimpleTrashCan.png";

import axios from "axios";
import Header from "../header";

// TODO: Maak zodat je de geselecteerde sprint te zien is
// TODO: Make U button trashcan and softdelete
// TODO: Als we groepen hebben moeten we checken of je niet vanaf hier een sprint kan veranderen van een andere groep

class SprintEditForm extends Component {

    state = {
        title: '',
        goal: '',
        start_date: '',
        end_date: '',
        project_id: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async componentDidMount() {
        //Get URL and take the id value
        const sprintId = window.location.pathname;
        const result = sprintId.replace("/sprint-edit/", "")
        console.log(result)

        //Get selected sprint
        const response = await axios.get(`http://127.0.0.1:8000/api/edit-sprint/${result}`);

        if (response.data.status === true) {
            this.setState({
                title: response.data.sprint.title,
                goal: response.data.sprint.goal,
                start_date: new Date(response.data.sprint.start_date + "Z").toISOString().slice(0, 10),
                end_date: new Date(response.data.sprint.end_date + "Z").toISOString().slice(0, 10),
                project_id: response.data.sprint.project_id,
            })
        }
    }

    updateSprint = async (e) => {
        e.preventDefault();

        //Get URL and take the id value
        const sprintId = window.location.pathname;
        const result = sprintId.replace("/sprint-edit/", "")
        console.log(result)

        //Update selected sprint
        const response = await axios.put(`http://127.0.0.1:8000/api/update-sprint/${result}`, this.state)

        if (response.data.status === true) {

            console.log(response.data.message);

        }

    }

    SoftDelete() {
        //Get URL and take the id value
        const sprintId = window.location.pathname;
        const result = sprintId.replace("/sprint-edit/", "")
        console.log(result)

        if (window.confirm("You Sure") == true) {
            axios.put(`http://127.0.0.1:8000/api/delete-sprint/${result}`,{soft_delete: new Date().toISOString().slice(0, 19).replace('T', ' ').replace('Z', '')});
            alert("It is Deleted");
        } else {
            alert("Not Deleted");
        }

    }

    render() {

        return (
            <div>
                <Header />
                <div className="flex justify-center items-center">
                    <form onSubmit={this.updateSprint} className="form justify-around primary-background-colour w-fit">
                        <div className="w-full flex justify-evenly items-center flex-row">
                            <button className="border border-gray-700 w-6 h-6" onClick={() => this.SoftDelete()}>
                                <img src={SimpleTrashCan}/>
                            </button>
                            <h2>Edit Sprint</h2>
                            <div className="w-6 h-6"></div>
                        </div>
                        <input onChange={this.handleInput} value={this.state.title} className="text-center rounded-lg border-2 border-black bg-violet-300 w-52" type="text"
                               id="name" name="title" placeholder="Name"/>
                        <input onChange={this.handleInput} value={this.state.goal} className="text-center rounded-lg border-2 border-black bg-violet-300 w-52" type="text"
                               id="name" name="goal" placeholder="Goal"/>
                        <div
                            className="flex flex-col items-center rounded-lg border-2 border-black w-52 h-16 bg-violet-300">
                            <label htmlFor="start_date">Start Date</label>
                            <input onChange={this.handleInput} value={this.state.start_date} type="date" id="start_date" className="bg-violet-300" name="start_date"
                                   placeholder="Start Date"/>
                        </div>
                        <div
                            className="flex flex-col items-center rounded-lg border-2 border-black w-52 h-16 bg-violet-300">
                            <label htmlFor="end_date">End Date</label>
                            <input onChange={this.handleInput} value={this.state.end_date} type="date" id="end_date" className="bg-violet-300" name="end_date"
                                   placeholder="End Date"/>
                        </div>
                        <select name="project_id" onChange={this.handleInput} value={this.state.project_id} className="text-center rounded-lg border-2 border-black bg-violet-300 w-52" >
                            <option value=''>No selected project</option>
                            <option value='1'>Placeholder project 1</option>
                            <option value='2'>Placeholder project 2</option>
                            <option value='3'>Placeholder project 3</option>
                        </select>
                        <div className="flex flex-row">
                            <Link to={"/"} className="text-center rounded-lg border-2 border-black block w-32 bg-red-400 hover:bg-red-500 active:bg-red-600">cancel
                            </Link>
                            <button className="text-center rounded-lg border-2 border-black w-32 bg-green-400" type="submit">Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SprintEditForm;