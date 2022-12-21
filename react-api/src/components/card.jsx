import axios from "axios";
import React from "react";
import {useParams} from "react-router-dom";

export default class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sprint: {},
            tasks: [],
            loading: true
        }
    }

    handleInput = (e) => {

        let id = parseInt(e.target.getAttribute('data-id'));

        var result = this.state.tasks.find(item => item.id === id);

        result[e.target.name] = e.target.value;
    }

    componentDidMount() {
        this.get()
    }

    async get() {
        if (window.location.href === "http://localhost:3000/") {
            const currentSprint = await axios.get(`http://localhost:8000/api/currentsprint`);
            const currentSprintId = currentSprint.data.currentsprint;
            const response = await axios.get(`http://localhost:8000/api/sprint/${currentSprintId}`);

            if (response.data.status === true) {
                this.setState({
                    tasks: response.data.tasks,
                    loading: false,
                })
            }
        } else {
            const id = this.props.path;

            const response = await axios.get(`http://localhost:8000/api/sprint/${id}`);
            // console.log(response.data.tasks);
            if (response.data.status === true) {
                this.setState({
                    tasks: response.data.tasks,
                    loading: false,
                })
            }
        }
    }

    updateTask = async (id) => {
        const task_id = id;

        const don = this.state.tasks.find(obj => {
            return obj.id === task_id;
        });

        const response = await axios.put(`http://127.0.0.1:8000/api/update-task/${task_id}`, don);
    }

    render() {
        return (
            <div>
                {
                    this.state.tasks ? this.state.tasks.map(card =>
                        <div key={card.id} className="card" onChange={() => this.updateTask(card.id)}>
                            <div>
                                <input type="checkbox"/>
                            </div>
                            <div className="first-cell">
                                <textarea name="title" id="title" data-id={card.id} defaultValue={card.title}
                                          onChange={this.handleInput} value={this.state.title} cols="30"
                                          rows="3"></textarea>
                            </div>
                            <div className="table-cell">
                                <select name="user_id" id="" data-id={card.id} defaultValue={card.user_id}
                                        onChange={this.handleInput} value={this.state.user_id}>
                                    <option value="1">Sjors</option>
                                    <option value="2">Ruben</option>
                                </select>
                            </div>
                            <div className="table-cell">
                                <select name="status" id="" data-id={card.id} defaultValue={card.status}
                                        onChange={this.handleInput} value={this.state.status}>
                                    <option value="1">To Do</option>
                                    <option value="2">Open</option>
                                    <option value="3">Done</option>
                                </select>
                            </div>
                            <div className="table-cell">
                                <select name="priority" id="" data-id={card.id} defaultValue={card.priority}
                                        onChange={this.handleInput} value={this.state.priority}>
                                    <option value="1">Low</option>
                                    <option value="2">Medium</option>
                                    <option value="3">High</option>
                                </select>
                            </div>
                            <div className="table-cell">
                                <input name="estimated_time" type="number" data-id={card.id}
                                       defaultValue={card.estimated_time} onChange={this.handleInput}
                                       value={this.state.estimated_time}/>
                            </div>
                            <div className="table-cell">
                                <input name="spend_time" type="number" data-id={card.id} defaultValue={card.spend_time}
                                       onChange={this.handleInput} value={this.state.spend_time}/>
                            </div>
                            <div className="table-cell last-cell">
                                <p>Due date</p>
                            </div>
                        </div>
                    ) : ""
                }
            </div>
        )
    }
}