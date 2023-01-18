import React from 'react';
import axios from 'axios';
import ProjectEditForm from "./edit";
import {
    default as setConfig,
    apiUrl,
} from "../../adapters/axios";

const config = setConfig();

export default class Projects extends React.Component {

    RenderEditForm() {
        document.getElementById('edit-form').style.display = "block";
    }

    constructor(props) {
        super(props);

        this.state = {
            projects: []
        }

    }

    componentDidMount() {
        axios.get(apiUrl+`/api/projects`, config)
            .then(res => {
                const projects = res.data;
                this.setState({projects});
            })
    }

    render() {
        console.log("phow");
        return (
            <ul>
                {
                    this.state.projects.projects
                        ? this.state.projects.projects.map(project =>
                            <div>
                                <li key={project.id}>{project.title}</li>
                                <button onClick={this.RenderEditForm}>Edit</button>
                                <div id="edit-form" style={{display: "none"}}><ProjectEditForm/></div>
                            </div>
                        ) : ""
                }
            </ul>
        )
    }
}