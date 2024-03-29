import React from "react";
import axios from "axios";
import {
    default as setConfig,
    apiUrl,
} from "../adapters/axios";

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

        const response = await axios.post(apiUrl+'/api/add-task', this.state, config)
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
        await axios.get(apiUrl+`/api/currentsprint`, config).then((res) => {
            const currentSprintId = res.data.currentsprint;
            if (res.data.status === true && window.location.pathname === "/") {
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
            const response = await axios.post(apiUrl+'/api/add-task', this.state, config)
            if (response.data.status === true) {
                window.location.reload();
            }
        });
    }

    render() {
        console.log("cutton");
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