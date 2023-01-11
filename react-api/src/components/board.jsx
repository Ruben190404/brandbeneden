import Card from "./card";
import AddCardButton from "./AddCardButton";
import React from "react";
import axios from "axios";
import ProjectEditForm from "./Project/edit";
import ProjectAddForm from "./Project/create";
import List from "./Sprint/list";
import setConfig from "../adapters/axios"


const config = setConfig();


//TODO: verander data-id bij input velden van de task card met iets wat niet kan worden verandert door de gebruiker in de inspect!!!


class Board extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            loading: true,
            style: "hidden"
        }

        this.timeout = [];
    }

    sprintListDisplay = async (e) => {
        if (this.state.style === "hidden") {
            this.setState({style: "show"})
            console.log(this.state.style)
        } else {
            this.setState({style: "hidden"})
            console.log(this.state.style)
        }
    }

    handleInput = async (e) => {


        let id = parseInt(e.target.getAttribute('data-id'));

        const result = this.state.tasks.find(item => item.id === id);

        result[e.target.name] = e.target.value;

        // timer stuff
        clearTimeout(this.timeout[id]);
        this.timeout[id] = setTimeout(() => axios.put(`http://127.0.0.1:8000/api/update-task/${result.id}`, result), 1000)


    }

    SoftDelete(id) {
        var result = this.state.tasks.find(item => item.id === id);

        if (window.confirm("You Sure") == true) {
            axios.put(`http://127.0.0.1:8000/api/delete-task/${result.id}`,{soft_delete: new Date().toISOString().slice(0, 19).replace('T', ' ').replace('Z', '')});
            document.getElementById(id).remove();
            alert("It is Deleted");
        } else {
            alert("Not Deleted");
        }

    }

    allowDrop(e) {
        e.preventDefault();
    }

    drag(e) {
        e.dataTransfer.setData("text", e.target.id);
        console.log(e.target.id);
    }

    drop = async(e) => {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data));
        console.log(data + "dub");
        console.log(e.target.id);

        let id = parseInt(data);

        var result = this.state.tasks.find(item => item.id === id);

        result.task_id = e.target.id;

        // timer stuff
        clearTimeout(this.timeout[id]);
        this.timeout[id] = setTimeout(() => axios.put(`http://127.0.0.1:8000/api/update-task/${result.id}`, result).then(() => window.location.reload()), 1000)
    }

    componentDidMount() {
        this.get()
    }


    async get() {
        const response = await axios.get('http://127.0.0.1:8000/api/tasks', config);

        if (response.data.status === true) {
            this.setState({
                tasks: response.data.tasks,
                loading: false,
            })
        }
    }

    render() {

        let taskDisplay = "";

        if (this.state.loading) {
            taskDisplay = <div><h1>Loading ...</h1></div>;

        } else {

            taskDisplay =
                this.state.tasks.map((card) => {
                    if (card.task_id == 0) {
                        return (
                            <div key={card.id} className={"flex flex-col mt-2 mb-2"} id={card.id} draggable={true}
                                 onDragStart={this.drag}>
                                <div className="card">
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
                                        <input name="spend_time" type="number" data-id={card.id}
                                               defaultValue={card.spend_time}
                                               onChange={this.handleInput} value={this.state.spend_time}/>
                                    </div>
                                    <div className="table-cell last-cell">
                                        <p>Due date</p>
                                    </div>
                                    <button onClick={() => this.SoftDelete(card.id)} className={"bg-red-600 text-white"}>Delete</button>
                                </div>
                                <div id={card.id} className={"w-full bg-amber-600 h-fit"} onDrop={this.drop}
                                     onDragOver={this.allowDrop}>add
                                    {
                                        this.state.tasks.map((task) => {
                                            if (card.id == task.task_id) {
                                                return (
                                                    <div key={task.id} className={"bg-blue-700 flex flex-col mt-2 mb-2"} id={task.id} draggable={true}
                                                         onDragStart={this.drag}>
                                                        <div /*id={card.id}*/ className="card" /*draggable={true} onDragStart={this.drag}*/>
                                                            <div>
                                                                <input type="checkbox"/>
                                                            </div>
                                                            <div className="first-cell">
                                    <textarea name="title" id="title" data-id={task.id} defaultValue={task.title}
                                              onChange={this.handleInput} value={this.state.title} cols="30"
                                              rows="3"></textarea>
                                                            </div>
                                                            <div className="table-cell">
                                                                <select name="user_id" id="" data-id={task.id} defaultValue={task.user_id}
                                                                        onChange={this.handleInput} value={this.state.user_id}>
                                                                    <option value="1">Sjors</option>
                                                                    <option value="2">Ruben</option>
                                                                </select>
                                                            </div>
                                                            <div className="table-cell">
                                                                <select name="status" id="" data-id={task.id} defaultValue={task.status}
                                                                        onChange={this.handleInput} value={this.state.status}>
                                                                    <option value="1">To Do</option>
                                                                    <option value="2">Open</option>
                                                                    <option value="3">Done</option>
                                                                </select>
                                                            </div>
                                                            <div className="table-cell">
                                                                <select name="priority" id="" data-id={task.id} defaultValue={task.priority}
                                                                        onChange={this.handleInput} value={this.state.priority}>
                                                                    <option value="1">Low</option>
                                                                    <option value="2">Medium</option>
                                                                    <option value="3">High</option>
                                                                </select>
                                                            </div>
                                                            <div className="table-cell">
                                                                <input name="estimated_time" type="number" data-id={task.id}
                                                                       defaultValue={task.estimated_time} onChange={this.handleInput}
                                                                       value={this.state.estimated_time}/>
                                                            </div>
                                                            <div className="table-cell">
                                                                <input name="spend_time" type="number" data-id={task.id}
                                                                       defaultValue={task.spend_time}
                                                                       onChange={this.handleInput} value={this.state.spend_time}/>
                                                            </div>
                                                            <div className="table-cell last-cell">
                                                                <p>Due date</p>
                                                            </div>
                                                            <button onClick={() => this.SoftDelete(task.id)} className={"bg-red-600 text-white"}>Delete</button>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </div>

                        )
                    }
                })
        }
        return (
            <div className={"board"}>
                <div className={this.state.style}>
                    <List/>
                    <div onClick={()=>this.sprintListDisplay()} className="bg-red-400 w-48 p-1 m-1 text-center rounded-lg border-2 border-black block hover:bg-red-500 active:bg-red-600">Cancel</div>

function Board() {
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
                        <div onClick={()=>this.sprintListDisplay()} className={"sprint-nav-item"}>
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
                    <div className={"cards"} id="0" onDrop={this.drop} onDragOver={this.allowDrop}>
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