import React from "react";
import logo from "../Images/logo.png";
import pfp from "../Images/testpfp.png";
import '../styles/main.css';
import ProjectEditForm from "./Project/edit";
import axios from "axios";
import ProjectAddForm from "./Project/create";
import {
    default as setConfig,
    apiUrl,
} from "../adapters/axios";

const config = setConfig();

export default class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: [],
            projectId: ''
        }
    }

    renderProjectEditForm = (event) => {
        const projectId = event.target.dataset.default;
        this.setState({projectId: projectId});
        document.getElementById('project-edit-form').style.display = "block";
    }

    renderProjectAddForm() {
        document.getElementById('project-add-form').style.display = "block";
    }

    componentDidMount() {
        axios.get(apiUrl+`/api/projects`, config)
            .then(res => {
                const projects = res.data;
                this.setState({projects});
            })
    }

    render() {
        console.log("header render");
        return (
            <div>
                <header className="flex justify-between primary-background-colour h-20 drop-shadow w-full">
                    <div className="nav-center-items w-[850px] pl-6">
                        <a href="/">
                            <img src={logo} className="w-16 h-16 border-4 border-purple-300 rounded-full shadow"/>
                        </a>
                        <p className="title">Brandbeneden</p>
                        <a href="/dashboard" className="purple-button">Dashboard</a>
                        <div className="dropdown purple-button">
                            <button className="dropbtn">Projects</button>
                            <div className="dropdown-content">
                                {
                                    this.state.projects.projects
                                        ? this.state.projects.projects.map(project =>
                                            <div key={project.id} className="flex justify-between" id={project.id}>
                                                <p>{project.title}</p>
                                                <button onClick={this.renderProjectEditForm}
                                                        data-default={project.id}>Edit
                                                </button>
                                            </div>
                                        ) : ""
                                }
                                <button onClick={this.renderProjectAddForm}>Add</button>
                            </div>
                        </div>
                        <div id="project-edit-form" style={{display: "none"}}><ProjectEditForm id={this.state.projectId}/></div>
                        <div id="project-add-form" style={{display: "none"}}><ProjectAddForm/></div>
                        <a href="/Burndown" className="purple-button">Burn-down</a>
                    </div>

                    <div className="nav-center-items pr-6">
                        <img src={pfp} className="center-items w-14 h-16 border-4 border-purple-300 rounded-xl shadow"/>
                    </div>
                </header>
            </div>
        )
    }
}

// function Header() {
    // return (
       // <div>
          //  <header className="flex justify-between primary-background-colour h-20 drop-shadow z-50 absolute w-full">
              //  <div className="nav-center-items w-[700px] pl-6">
              //      <a href="/"><img src={logo} className="w-16 h-16 border-4 border-purple-300 rounded-full shadow"/></a>
              //      <p className="title">Brandbeneden</p>
              //      <a href="/" className="purple-button w-48 h-12">Sprints</a>
              //      <a href="/pages/burndown" className="purple-button w-48 h-12">Burndown</a>
              //  </div>
             //   <div className="nav-center-items pr-6">
              //      <img src={pfp} className="center-items w-14 h-16 border-4 border-purple-300 rounded-xl shadow"/>
              //  </div>
          //  </header>
      //  </div>
  //  )
//
// }
