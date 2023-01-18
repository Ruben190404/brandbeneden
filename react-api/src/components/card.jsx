import axios from "axios";
import React from "react";
import CardItem from "./cardItem";
import {useParams} from "react-router-dom";
import {
    default as setConfig,
    apiUrl,
} from "../adapters/axios";


const config = setConfig();

export default class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sprints: [],
            tasks: [],
            loading: true

        }

        this.timeout = [];
    }


    componentDidMount() {
        this.get()
        this.sprintData()
    }

    async get() {
        if (window.location.pathname === "/") {
            const currentSprint = await axios.get(apiUrl+`/api/currentsprint`, config);
            const currentSprintId = currentSprint.data.currentsprint;
            const response = await axios.get(apiUrl+`/api/sprint/${currentSprintId}`, config);

            if (response.data.status === true) {
                this.setState({
                    tasks: response.data.tasks,
                    loading: false,
                })
            }
        } else {
            const id = this.props.path;
            const response = await axios.get(apiUrl+`/api/sprint/${id}`, config);
            // console.log(response.data.tasks);
            if (response.data.status === true) {
                this.setState({
                    tasks: response.data.tasks,
                    loading: false,
                })
            }
        }
    }

    async sprintData() {
        const response = await axios.get(apiUrl+`/api/sprints`, config);
        // console.log(response.data.sprints);
        if (response.data.status === true) {
            this.setState({
                sprints: response.data.sprints,
            })
        }
    }



    render() {
        console.log("card render")
        return (
            <div>
                {this.state.tasks ? this.state.tasks.map(card => {
                    if (!card.task_id) {


                    let childCardItem;
                        if (this.state.tasks){
                            this.state.tasks.map((childCard) => {
                                if (card.id === childCard.task_id) {
                                    let item = <CardItem key={childCard.id} card={childCard} childCard={null} isChild={true} state={this.state}/>
                                    if (childCardItem === undefined) {
                                        childCardItem = item
                                    } else {
                                        childCardItem += item
                                    }
                                }
                        })}

                    return (<CardItem card={card} childCard={childCardItem} key={card.id} state={this.state}/>);
                    }}) : null}
            </div>
            // <div>
            //     {
            //         this.state.tasks ? this.state.tasks.map(card =>
            //             <div>
            //                 <div key={card.id} id={card.id} className="card" onChange={() => this.updateTask(card.id)}
            //                      draggable={true}
            //                      onDragStart={this.drag}>
            //                     <div>
            //                         <input type="checkbox"/>
            //                     </div>
            //                     <div className="first-cell">
            //                     <textarea name="title" id="title" data-id={card.id} defaultValue={card.title}
            //                               onChange={this.handleInput} value={this.state.title} cols="30"
            //                               rows="3">
            //                     </textarea>
            //                     </div>
            //                     <div className="table-cell">
            //                         <select name="user_id" id="user" data-id={card.id} defaultValue={card.user_id}
            //                                 onChange={this.handleInput} value={this.state.user_id}>
            //                             <option value="1">Sjors</option>
            //                             <option value="2">Ruben</option>
            //                         </select>
            //                     </div>
            //                     <div className="table-cell">
            //                         <select name="status" id="status" data-id={card.id} defaultValue={card.status}
            //                                 onChange={this.handleInput} value={this.state.status}>
            //                             <option value="1">To Do</option>
            //                             <option value="2">Open</option>
            //                             <option value="3">Done</option>
            //                         </select>
            //                     </div>
            //                     <div className="table-cell">
            //                         <select name="priority" id="priority" data-id={card.id} defaultValue={card.priority}
            //                                 onChange={this.handleInput} value={this.state.priority}>
            //                             <option value="1">Low</option>
            //                             <option value="2">Medium</option>
            //                             <option value="3">High</option>
            //                         </select>
            //                     </div>
            //                     <div className="table-cell">
            //                         <select name="sprint_id" id="sprint_id" data-id={card.id}
            //                                 onChange={this.handleInput}>
            //                             {
            //                                 this.state.sprints ?
            //                                     this.state.sprints.map(sprint =>
            //                                         <option key={sprint.id} defaultValue={sprint.id}
            //                                                 selected={sprint.id === card.sprint_id ? "selected" : null}>
            //                                             {sprint.title}
            //                                         </option>
            //                                     ) : ""
            //                             }
            //                         </select>
            //                     </div>
            //                     <div className="table-cell">
            //                         <input name="estimated_time" type="number" data-id={card.id}
            //                                defaultValue={card.estimated_time} onChange={this.handleInput}
            //                                value={this.state.estimated_time}/>
            //                     </div>
            //                     <div className="table-cell">
            //                         <input name="spend_time" type="number" data-id={card.id}
            //                                defaultValue={card.spend_time}
            //                                onChange={this.handleInput} value={this.state.spend_time}/>
            //                     </div>
            //                     <div className="table-cell last-cell">
            //                         <p>Due date</p>
            //                     </div>
            //                     <button onClick={() => this.SoftDelete(card.id)}
            //                             className={"bg-red-600 text-white"}>Delete
            //                     </button>
            //                 </div>
            //                 <div id={card.id} className={"w-full bg-amber-600 h-fit"} onDrop={this.drop}
            //                      onDragOver={this.allowDrop}>add
            //                     {
            //                         this.state.tasks ? this.state.tasks.map((childCard) => {
            //                         if (card.id === childCard.task_id) {
            //                             <div key={childCard.id} id={childCard.id} className="card"
            //                                  onChange={() => this.updateTask(card.id)} draggable={true}
            //                                  onDragStart={this.drag}>
            //                                 <div>
            //                                     <input type="checkbox"/>
            //                                 </div>
            //                                 <div className="first-cell">
            //                                         <textarea name="title" id="title" data-id={card.id}
            //                                                   defaultValue={childCard.title}
            //                                                   onChange={this.handleInput} value={this.state.title}
            //                                                   cols="30"
            //                                                   rows="3">
            //                                         </textarea>
            //                                 </div>
            //                                 <div className="table-cell">
            //                                     <select name="user_id" id="user" data-id={childCard.id}
            //                                             defaultValue={childCard.user_id}
            //                                             onChange={this.handleInput} value={this.state.user_id}>
            //                                         <option value="1">Sjors</option>
            //                                         <option value="2">Ruben</option>
            //                                     </select>
            //                                 </div>
            //                                 <div className="table-cell">
            //                                     <select name="status" id="status" data-id={childCard.id}
            //                                             defaultValue={childCard.status}
            //                                             onChange={this.handleInput} value={this.state.status}>
            //                                         <option value="1">To Do</option>
            //                                         <option value="2">Open</option>
            //                                         <option value="3">Done</option>
            //                                     </select>
            //                                 </div>
            //                                 <div className="table-cell">
            //                                     <select name="priority" id="priority" data-id={childCard.id}
            //                                             defaultValue={childCard.priority}
            //                                             onChange={this.handleInput} value={this.state.priority}>
            //                                         <option value="1">Low</option>
            //                                         <option value="2">Medium</option>
            //                                         <option value="3">High</option>
            //                                     </select>
            //                                 </div>
            //                                 <div className="table-cell">
            //                                     <select name="sprint_id" id="sprint_id" data-id={childCard.id}
            //                                             onChange={this.handleInput}>
            //                                         {
            //                                             this.state.sprints ?
            //                                                 this.state.sprints.map(sprint =>
            //                                                     <option key={sprint.id} defaultValue={sprint.id}
            //                                                             selected={sprint.id === card.sprint_id ? "selected" : null}>
            //                                                         {sprint.title}
            //                                                     </option>
            //                                                 ) : ""
            //                                         }
            //                                     </select>
            //                                 </div>
            //                                 <div className="table-cell">
            //                                     <input name="estimated_time" type="number" data-id={card.id}
            //                                            defaultValue={card.estimated_time}
            //                                            onChange={this.handleInput}
            //                                            value={this.state.estimated_time}/>
            //                                 </div>
            //                                 <div className="table-cell">
            //                                     <input name="spend_time" type="number" data-id={card.id}
            //                                            defaultValue={card.spend_time}
            //                                            onChange={this.handleInput}
            //                                            value={this.state.spend_time}/>
            //                                 </div>
            //                                 <div className="table-cell last-cell">
            //                                     <p>Due date</p>
            //                                 </div>
            //                                 <button onClick={() => this.SoftDelete(card.id)}
            //                                         className={"bg-red-600 text-white"}>Delete
            //                                 </button>
            //                             </div>
            //                         }}) : ""
            //                     }
            //                 </div>
            //             </div>
            //         ) : ""
            //     }
            // </div>
        )
    }
}