import '../../styles/main.css';

import React, {Component} from "react";
import {Link} from "react-router-dom";

import axios from "axios";

class SprintForm extends Component {

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

    saveSprint = async (e) => {
        e.preventDefault();

        const response = await axios.post('http://127.0.0.1:8000/api/add-sprint', this.state)
            .then((response) => {
                window.location.reload();
            })

        // if (response.data.status === true) {
        //
        //     console.log(response.data.message);
        //
        //     this.setState({
        //         title: '',
        //         goal: '',
        //         start_date: '',
        //         end_date: '',
        //         project_id: '',
        //     })
        //
        // }
    }

    cancel() {
        document.getElementById("sprint-add-form").style.display = "none";
    }

    render() {
        return (
            <form onSubmit={this.saveSprint} className="form justify-around primary-background-colour w-fit">
                <div className="w-full flex justify-evenly items-center flex-row">
                    <div className="w-6 h-6"></div>
                    <h2>Add Sprint</h2>
                    <div className="w-6 h-6"></div>
                </div>
                <input onChange={this.handleInput} value={this.state.title}
                       className="text-center rounded-lg border-2 border-black bg-violet-300 w-52" type="text"
                       id="name" name="title" placeholder="Name"/>
                <input onChange={this.handleInput} value={this.state.goal}
                       className="text-center rounded-lg border-2 border-black bg-violet-300 w-52" type="text"
                       id="name" name="goal" placeholder="Goal"/>
                <div
                    className="flex flex-col items-center rounded-lg border-2 border-black w-52 h-16 bg-violet-300">
                    <label htmlFor="start_date">Start Date</label>
                    <input onChange={this.handleInput} value={this.state.start_date} type="date" id="start_date"
                           className="bg-violet-300" name="start_date"
                           placeholder="Start Date"/>
                </div>
                <div
                    className="flex flex-col items-center rounded-lg border-2 border-black w-52 h-16 bg-violet-300">
                    <label htmlFor="end_date">End Date</label>
                    <input onChange={this.handleInput} value={this.state.end_date} type="date" id="end_date"
                           className="bg-violet-300" name="end_date"
                           placeholder="End Date"/>
                </div>
                <select name="project_id" onChange={this.handleInput} value={this.state.project_id}
                        className="text-center rounded-lg border-2 border-black bg-violet-300 w-52">
                    <option value=''>No selected project</option>
                    <option value='1'>Placeholder project 1</option>
                    <option value='2'>Placeholder project 2</option>
                    <option value='3'>Placeholder project 3</option>
                </select>
                <div>
                    <button className="text-center rounded-lg border-2 border-black w-32 bg-red-400"
                            type="submit" onClick={this.cancel}>cancel
                    </button>
                    <button className="text-center rounded-lg border-2 border-black w-32 bg-green-400"
                            type="submit">Submit
                    </button>
                </div>
            </form>
        );
    }
}

export default SprintForm;