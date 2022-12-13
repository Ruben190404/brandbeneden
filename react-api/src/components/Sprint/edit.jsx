import '../../styles/main.css';

import React, {Component} from "react";
import {Link} from "react-router-dom";

import axios from "axios";

// TODO: Fix Cancel Button to Cancel
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
        const response = await axios.get(`http://127.0.0.1:8000/api/edit-sprint/1`)

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

        const response = await axios.put(`http://127.0.0.1:8000/api/update-sprint/1`, this.state)

        if (response.data.status === true) {

            console.log(response.data.message);

        }

    }

    render() {

        return (
            <div className="flex justify-center items-center h-screen">
                <form onSubmit={this.updateSprint} className="form justify-around primary-background-colour w-fit">
                    <div className="w-full flex justify-evenly items-center flex-row">
                        <button className="border border-gray-700 w-6 h-6">U</button>
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
                    <div>
                        <button className="text-center rounded-lg border-2 border-black w-32 bg-red-400">cancel
                        </button>
                        <button className="text-center rounded-lg border-2 border-black w-32 bg-green-400" type="submit">Update
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SprintEditForm;