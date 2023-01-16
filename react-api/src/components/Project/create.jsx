import '../../styles/main.css';
import axios from "axios";
import React, {useState, useEffect, createRef} from "react";
import {Multiselect} from "multiselect-react-dropdown";
import {useParams} from "react-router-dom";
import setConfig from "../../adapters/axios"

const config = setConfig();

export default class Create extends React.Component {

    constructor(props) {
        super(props);

        this.multiselectRef = createRef();

        this.state = {
            users: [],
            selectedUsers: []
        }
    }

    create() {
        // console.log(this.multiselectRef.current.getSelectedItems());
        const title = document.getElementById('projectTitle').value;
        const users = this.multiselectRef.current.getSelectedItems();
        const start_date = document.getElementById('project_start_date').value;
        const end_date = document.getElementById('project_end_date').value;
        axios.post("http://localhost:8000/api/projects/store", {
            title: title,
            start_date: start_date,
            end_date: end_date,

        }, config).then((response) => {
            window.location.reload();
            // console.log(users);
            console.log(this.multiselectRef.current.getSelectedItems());
        }).catch((error) => {
            console.log(error);
        })
    }

    onSelect(selectedList) {
        console.log(selectedList);
        const selectedUsers = selectedList;
        this.state.selectedUsers = ([selectedUsers]);
        // this.state.selectedUsers = selectedUsers;
        // console.log(this.state.selectedUsers);
    }

    onRemove(selectedList, removedItem) {

    }

    cancel() {
        document.getElementById("project-add-form").style.display = "none";
        const title = document.getElementById('projectTitle');
        const start_date = document.getElementById('project_start_date');
        const end_date = document.getElementById('project_end_date');

        this.multiselectRef.current.resetSelectedValues();

        title.value = '';
        start_date.value = '';
        end_date.value = '';
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/users`, config).then(res => {
            const users = res.data;
            // this.setState([users]);
            this.state.users = users;
            console.log(this.state);
        })
    }

    render() {
        return (
            <div className="flex justify-center items-center h-screen w-full fixed">
                <form className="form justify-around primary-background-colour">
                    <h2>Add Project</h2>
                    <input className="text-center rounded-lg border-2 border-black bg-violet-300 w-52" type="text"
                           id="projectTitle" name="title" placeholder="Name"/>
                    <Multiselect
                        options={this.state.users.users}
                        displayValue="name"
                        placeholder={"Select Users"}
                        ref={this.multiselectRef}
                        selectionLimit={10}
                        onSelect={this.onSelect}
                        className="bg-violet-300 rounded-lg border-2 border-black w-52"
                        id="projectUsers"
                    />
                    <div
                        className="flex flex-col items-center rounded-lg border-2 border-black w-52 h-16 bg-violet-300">
                        <label htmlFor="start_date">Start Date</label>
                        <input type="date" id="project_start_date" className="bg-violet-300" name="start_date"
                               placeholder="Start Date"/>
                    </div>
                    <div
                        className="flex flex-col items-center rounded-lg border-2 border-black w-52 h-16 bg-violet-300">
                        <label htmlFor="end_date">End Date</label>
                        <input type="date" id="project_end_date" className="bg-violet-300" name="end_date"
                               placeholder="End Date"/>
                    </div>
                    <button className="text-center rounded-lg border-2 border-black w-32 bg-green-400" type="button"
                            onClick={this.create}>Submit
                    </button>
                    <button className="text-center rounded-lg border-2 border-black w-32 bg-red-400" type="button"
                            onClick={this.cancel}>Cancel
                    </button>
                </form>
            </div>
        );
    }
}