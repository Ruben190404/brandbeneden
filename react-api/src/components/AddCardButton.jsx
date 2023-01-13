import React from "react";
import axios from "axios";
import setConfig from "../adapters/axios"

const config = setConfig();


export default class TaskAdd extends React.Component {
    state = {
        title: 'display U',
        description: 'derp',
        user_id: 1,
        priority: 1,
        status: 1,
        spend_time: 1,
        estimated_time: 1,
        task_id: 0,
    }

    saveTask = async (e) => {
        e.preventDefault();

        const response = await axios.post('http://127.0.0.1:8000/api/add-task', this.state, config)
    }
    constructor(props) {
        super(props);

        this.state = {
            title: 'display U',
            description: 'derp',
            user_id: 1,
            priority: 1,
            status: 1,
            spend_time: 1,
            estimated_time: 1,
            sprint_id: '',
            task_id: 0,
        }
    }

    async setCurrentSprint() {
        await axios.get(`http://localhost:8000/api/currentsprint`, config).then((res) => {
            const currentSprintId = res.data.currentsprint;
            if (res.data.status === true && window.location.href === "http://localhost:3000/") {
                this.state.sprint_id = currentSprintId;
            } else {
                this.state.sprint_id = this.props.path;
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    saveTask = async (e) => {
        e.preventDefault();
        await this.setCurrentSprint().then( async () => {
            const response = await axios.post('http://127.0.0.1:8000/api/add-task', this.state, config)
            if (response.data.status === true) {
                window.location.reload();
            }
        });
    }

    render() {
        return (
            <form className={"add-card"} onSubmit={this.saveTask}>
                <button type="submit">
                    <img src="https://img.icons8.com/material-rounded/24/null/filled-plus-2-math.png"
                         alt={"plus icon"}/>
                    Add card
                </button>
            </form>
        );
    }
}