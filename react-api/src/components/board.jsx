import Card from "./card";
import AddCardButton from "./AddCardButton";
import React from "react";
import axios from "axios";

class Board extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            loading: true
        }
    }


    async componentDidMount() {

        const response = await axios.get('http://127.0.0.1:8000/api/tasks');

        if (response.data.status === true) {
            this.setState({
                tasks: response.data.tasks,
                loading: false,
            })
        }
    }

    render() {

        var taskDisplay = "";

        if (this.state.loading) {
            taskDisplay = <div><h1>Loading ...</h1></div>;

        } else {
            taskDisplay =
                this.state.tasks.map((card) => {
                    return (
                        <div key={card.id} className="card">
                            <div>
                                <input type="checkbox"/>
                            </div>
                            <div className="first-cell">
                                <textarea name="title" id="title" defaultValue={card.title} cols="30" rows="3"></textarea>
                            </div>
                            <div className="table-cell">
                                <select defaultValue={card.user_id} name="" id="">
                                    <option value="1">Sjors</option>
                                    <option value="2">Ruben</option>
                                </select>
                            </div>
                            <div className="table-cell">
                                <select defaultValue={card.status} name="" id="">
                                    <option value="1">To Do</option>
                                    <option value="2">Open</option>
                                    <option value="3">Done</option>
                                </select>
                            </div>
                            <div className="table-cell">
                                <select defaultValue={card.priority} name="" id="">
                                    <option value="1">Low</option>
                                    <option value="2">Medium</option>
                                    <option value="3">High</option>
                                </select>
                            </div>
                            <div className="table-cell">
                                <input type="number" defaultValue={card.estimated_time}/>
                            </div>
                            <div className="table-cell">
                                <input type="number" defaultValue={card.spend_time}/>
                            </div>
                            <div className="table-cell last-cell">
                                <p>Due date</p>
                            </div>
                        </div>

                    )
                })
        }
        return (
            <div className={"board"}>
                <div className={"sprint-nav"}>
                    <div className={"sprint-nav-sprints"}>
                        <div className={"sprint-nav-sprints-item"}>Warming up</div>
                        <div className={"sprint-nav-sprints-item"}>Sprint 1</div>
                        <div className={"sprint-nav-sprints-item"}>Sprint 2</div>
                        <div className={"sprint-nav-sprints-item"}>Sprint 3</div>
                        <div className={"sprint-nav-sprints-item"}>Sprint 4</div>
                        <div className={"sprint-nav-sprints-item"}>Cooling down</div>
                    </div>
                    <div className={"sprint-nav-items-wrapper"}>
                        <div className={"sprint-nav-item"}>
                            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px"
                                 height="30px">
                                <path
                                    d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"/>
                            </svg>
                            <span>Add new sprint</span>
                        </div>
                        <div className={"sprint-nav-item"}>
                            <img src="https://img.icons8.com/ios/50/null/engineering.png" alt={"Gear icon"}
                                 className={"gear-icon"}/>
                            <span>Edit sprint</span>
                        </div>
                        <div className={"chart-icon-wrapper"}>
                            <img src="https://img.icons8.com/ios/50/null/combo-chart--v1.png" alt={"Chart icon"}
                                 className={"chart-icon"}/>
                        </div>
                    </div>
                </div>
                <div className={"sprint-board"}>
                    <div className={"card-nav"}>
                        <ul>
                            <li className={"sprint-name"}>
                                <span>Sprint name</span>
                                <span>sprint_start/end_date</span>
                            </li>
                            <li>Assignee</li>
                            <li>Status</li>
                            <li>Priority</li>
                            <li>Est Time</li>
                            <li>Spent Time</li>
                            <li>Due Date</li>
                        </ul>
                        {/*<div className={"add-card"}>*/}
                        {/*    <img src="https://img.icons8.com/material-rounded/24/null/filled-plus-2-math.png" alt={"plus icon"}/>*/}
                        {/*    Add card*/}
                        {/*</div>*/}
                        <AddCardButton/>
                    </div>
                    <div className={"cards"}>
                        {taskDisplay}
                        {/*<Card/>*/}
                        {/*<Card/>*/}
                        {/*<Card/>*/}
                        {/*<Card/>*/}
                        {/*<Card/>*/}
                        {/*<Card/>*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default Board