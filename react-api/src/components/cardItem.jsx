import axios from "axios";
import React from "react";
import {useParams} from "react-router-dom";
import setConfig from "../adapters/axios"
import SimpleTrashCan from "../Images/SimpleTrashCan.png";


const config = setConfig();

export default class CardItem extends React.Component {

    constructor(props) {
        super(props);

        this.timeout = [];
    }

    handleInput = async (e) => {
        let id = parseInt(e.target.getAttribute('data-id'));
        var result = this.props.state.tasks.find(item => item.id === id);

        result[e.target.name] = e.target.value;
        clearTimeout(this.timeout[id]);
        this.timeout[id] = setTimeout(() => axios.put(`http://127.0.0.1:8000/api/update-task/${result.id}`,result , config), 1000)

        if (e.target.name === "sprint_id") {
            setTimeout(window.location.reload.bind(window.location), 50);
        }
    }


    SoftDelete(id) {
        var result = this.props.state.tasks.find(item => item.id === id);

        if (window.confirm("You Sure") === true) {
            axios.put(`http://127.0.0.1:8000/api/delete-task/${result.id}`, {soft_delete: new Date().toISOString().slice(0, 19).replace('T', ' ').replace('Z', '')}, config);
            document.getElementById(id).remove();
            alert("It is Deleted");
            setTimeout(window.location.reload.bind(window.location), 100);
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

    drop = async (e) => {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data));
        console.log(data + "dub");
        console.log(e.target.id);

        let id = parseInt(data);

        var result = this.props.state.tasks.find(item => item.id === id);

        result.task_id = e.target.id;
        console.log(result.id);
        // timer stuff
        clearTimeout(this.timeout[id]);
        this.timeout[id] = setTimeout(() => axios.put(`http://127.0.0.1:8000/api/update-task/${result.id}`, result, config).then(() => window.location.reload()),  200)

    }



    render() {
        const card = this.props.card
        const childCard = this.props.childCard
        const isChild = this.props.isChild

        return (
                        <div className="w-full flex flex-col justify-center">
                            <div key={card.id} id={card.id} className="card w-full bg-white"
                                 draggable={true}
                                 onDragStart={this.drag}>
                                {/*<div>*/}
                                {/*    <input type="checkbox"/>*/}
                                {/*</div>*/}
                                <div className="first-cell">
                                <textarea name="title" id="title" data-id={card.id} className="w-48 border-2 border-gray-400" defaultValue={card.title}
                                          onChange={this.handleInput} value={this.props.state.title} cols="30"
                                          rows="3">
                                </textarea>
                                </div>
                                <div className="table-cell">
                                    <select name="user_id" id="user" className="w-20 border-2 border-gray-400" data-id={card.id} defaultValue={card.user_id}
                                            onChange={this.handleInput} value={this.props.state.user_id}>
                                        <option value="1">Sjors</option>
                                        <option value="2">Ruben</option>
                                    </select>
                                </div>
                                <div className="table-cell">
                                    <select name="status" id="status" className={"w-14 border-2 border-gray-400"} data-id={card.id} defaultValue={card.status}
                                            onChange={this.handleInput} value={this.props.state.status}>
                                        <option value="1" className="bg-red-400">To Do</option>
                                        <option value="2" className="bg-orange-500">Open</option>
                                        <option value="3" className="bg-green-500">Done</option>
                                    </select>
                                </div>
                                <div className="table-cell">
                                    <select name="priority" id="priority" className="w-14 border-2 border-gray-400" data-id={card.id} defaultValue={card.priority}
                                            onChange={this.handleInput} value={this.props.state.priority}>
                                        <option value="1" className="bg-blue-300">Low</option>
                                        <option value="2" className="bg-blue-500">Medium</option>
                                        <option value="3" className="bg-blue-900">High</option>
                                    </select>
                                </div>
                                <div className="table-cell">
                                    <select name="sprint_id" id="sprint_id" className="w-30 border-2 border-gray-400" data-id={card.id}
                                            onChange={this.handleInput} defaultValue="0">
                                        <option value="0" disabled={true}>Select Sprint</option>
                                        {
                                            this.props.state.sprints ?
                                                this.props.state.sprints.map(sprint =>
                                                    <option key={sprint.id} value={sprint.id}>
                                                        {sprint.title}
                                                    </option>
                                                ) : ""
                                        }
                                    </select>
                                </div>
                                <div className="table-cell">
                                    <input name="estimated_time" type="number" className="w-10 border-2 border-gray-400" data-id={card.id}
                                           defaultValue={card.estimated_time} onChange={this.handleInput}
                                           value={this.props.state.estimated_time}/>
                                </div>
                                <div className="table-cell">
                                    <input name="spend_time" type="number" className="w-10 border-2 border-gray-400" data-id={card.id}
                                           defaultValue={card.spend_time}
                                           onChange={this.handleInput} value={this.props.state.spend_time}/>
                                </div>
                                <div className="table-cell last-cell">
                                    <p>Due date</p>
                                </div>
                                <button onClick={() => this.SoftDelete(card.id)} className={"h-16 bg-gray-300 text-white rounded-lg hover:border-2 hover:border-red-900 hover:bg-red-600 active:bg-red-800"}>
                                    <img src={SimpleTrashCan} alt={"Delete"}/>
                                </button>
                            </div>
                            {
                                !isChild ?
                            <div id={card.id} className={"w-full h-fit border-2 border-gray-300 border-dashed rounded-b-lg text-center bg-gray-50 mb-4"} onDrop={this.drop}
                                 onDragOver={this.allowDrop}>
                                {childCard}
                                 nest
                            </div>
                                : null
                            }
                        </div>
        )
    }
}
