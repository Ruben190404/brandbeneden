import Card from "./card";
import AddCardButton from "./AddCardButton";
import {React, useState} from "react";
import axios from "axios";
import ProjectEditForm from "./Project/edit";
import ProjectAddForm from "./Project/create";
import ShowSprints from "./Sprint/show";
import {Routes, Route, useParams} from "react-router-dom";
import SprintForm from "./Sprint/create";
import setConfig from "../adapters/axios"


const config = setConfig();

function renderSprintForm() {
    document.getElementById('sprint-add-form').style.display = "block";
}

function SprintListDisplay(e) {
    const [style, setStyle] = useState("hidden");


    if (this.state.style === "hidden") {
        this.setState({style: "show"})
        console.log(this.state.style)
    } else {
        this.setState({style: "hidden"})
        console.log(this.state.style)
    }
}

function Board() {
    const [start, setStart] = useState();
    const [end, setEnd] = useState();

    let { id } = useParams();

    if(window.location.href === "http://localhost:3000/") {
        axios.get(`http://localhost:8000/api/currentsprint`, config).then(res => {
            const currentSprint = res.data.currentsprint;
            axios.get(`http://localhost:8000/api/sprintData/${currentSprint}`, config).then(res => {
                let start_date_data = new Date(res.data.sprint.start_date).toUTCString().slice(5, 16);
                let end_date_data = new Date(res.data.sprint.end_date).toUTCString().slice(5, 16);
                setStart(start_date_data);
                setEnd(end_date_data);
            })
        })
    } else {
        axios.get(`http://localhost:8000/api/sprintData/${id}`, config).then(res => {
            let start_date_data = new Date(res.data.sprint.start_date).toUTCString().slice(5, 16);
            let end_date_data = new Date(res.data.sprint.end_date).toUTCString().slice(5, 16);
            setStart(start_date_data);
            setEnd(end_date_data);
        })
    }

    return (
        <div className={"board"}>
            <div className={"sprint-nav"}>
                <ShowSprints/>
                <div className={"sprint-nav-items-wrapper mt-1"}>
                    <button onClick={renderSprintForm} className={"sprint-nav-item"}>
                        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px"
                             height="30px">
                            <path
                                d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"/>
                        </svg>
                        Add new sprint
                    </button>
                    <div className={"sprint-nav-item"} onClick={()=>SprintListDisplay()}>
                        <img src="https://img.icons8.com/ios/50/null/engineering.png" alt={"Gear icon"}
                             className={"gear-icon"}/>
                        <span>Edit sprint</span>
                    </div>
                </div>
            </div>
            <div className={"sprint-board"}>
                <div className={"card-nav"}>
                    <ul>
                        <li className={"sprint-name"}>
                            <span>Sprint name</span>
                            <span>{start} / {end}</span>
                        </li>
                        <li>Assignee</li>
                        <li>Status</li>
                        <li>Priority</li>
                        <li>Sprint</li>
                        <li>Est Time</li>
                        <li>Spent Time</li>
                        <li>Due Date</li>
                    </ul>
                    <AddCardButton path={id}/>
                </div>
                <div className={"cards"}>
                    <Card path={id}/>
                </div>
            </div>
            <div id="project-add-form" style={{display: "none"}}><ProjectAddForm/></div>
            <div id="sprint-add-form" style={{display: "none"}}><SprintForm/></div>
        </div>
    )
}

export default Board
