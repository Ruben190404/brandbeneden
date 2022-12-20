import Card from "./card";
import AddCardButton from "./AddCardButton";
import React from "react";
import axios from "axios";
import ProjectEditForm from "./Project/edit";
import ProjectAddForm from "./Project/create";
import ShowSprints from "./Sprint/show";
import {Routes, Route, useParams} from "react-router-dom";
import SprintForm from "./Sprint/create";

function renderSprintForm() {
    document.getElementById('sprint-add-form').style.display = "block";
}

function Board() {
    return (
        <div className={"board"}>
            <div className={"sprint-nav"}>
                <ShowSprints/>
                <div className={"sprint-nav-items-wrapper"}>
                    <div className={"sprint-nav-item"}>
                        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px"
                             height="30px">
                            <path
                                d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"/>
                        </svg>
                        <button onClick={renderSprintForm}>Add new sprint</button>

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
                    <AddCardButton/>
                </div>
                <div className={"cards"}>
                    <Card/>
                </div>
            </div>
            <div id="project-edit-form" style={{display: "none"}}><ProjectEditForm/></div>
            <div id="project-add-form" style={{display: "none"}}><ProjectAddForm/></div>
            <div id="sprint-add-form" style={{display: "none"}}><SprintForm/></div>
        </div>
    )
}

export default Board
