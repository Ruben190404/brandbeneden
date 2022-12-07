import React, {Component} from "react";
import axios from "axios";

class TaskAdd extends Component{

    state = {
        title: 'display U',
        description: 'derp',
        user_id: 1,
        priority: 1,
        status: 1,
        spend_time: 1,
        estimated_time: 1,
        task_id: 1,
    }

    saveTask = async (e) => {
        e.preventDefault();

        const response = await axios.post('http://127.0.0.1:8000/api/add-task', this.state)

        if (response.data.status === true) {

            console.log(response.data.message);

            window.location.reload();
        }

    }

    render() {

        return(
                <form className={"add-card"} onSubmit={this.saveTask}>
                    <button type="submit">
                            <img src="https://img.icons8.com/material-rounded/24/null/filled-plus-2-math.png" alt={"plus icon"}/>
                            Add card
                    </button>
                </form>
        );
    }
}

export default TaskAdd;