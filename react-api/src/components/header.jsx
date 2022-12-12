import React from "react";
import logo from "../Images/logo.png";
import pfp from "../Images/testpfp.png";
import '../styles/main.css';
import ProjectEditForm from "./Project/edit";
import axios from "axios";


export default class Header extends React.Component {

    renderProjectEditForm() {
        document.getElementById('project-edit-form').style.display = "block";
    }

    renderProjectAddForm() {
        document.getElementById('project-add-form').style.display = "block";
    }

    constructor(props) {
        super(props);

        this.state = {
            projects: []
        }

    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/projects`)
            .then(res => {
                const projects = res.data;
                this.setState({projects});
            })
    }

    render() {
        return (
            <div>
                <header className="flex justify-between primary-background-colour h-20 drop-shadow w-full">
                    <div className="nav-center-items w-[850px] pl-6">
                        <a href="/"><img src={logo}
                                         className="w-16 h-16 border-4 border-purple-300 rounded-full shadow"/></a>
                        <p className="title">Brandbeneden</p>
                        <div className="dropdown purple-button">
                            <button className="dropbtn">Projects</button>
                            <div className="dropdown-content">
                                {
                                    this.state.projects.projects
                                        ? this.state.projects.projects.map(project =>
                                            <div key={project.id} className="flex justify-between">
                                                <p>{project.title}</p>
                                                <button onClick={this.renderProjectEditForm}>Edit</button>

                                            </div>
                                        ) : ""
                                }
                                <button onClick={this.renderProjectAddForm}>Add</button>
                            </div>
                        </div>
                        <a href="/burndown" className="purple-button">Burn-down</a>
                    </div>
                    <div className="nav-center-items pr-6">
                        <img src={pfp} className="center-items w-14 h-16 border-4 border-purple-300 rounded-xl shadow"/>
                    </div>
                </header>
            </div>
        )
    }
}
