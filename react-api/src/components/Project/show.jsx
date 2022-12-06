import React from 'react';
import axios from 'axios';
import ProjectEditForm from "./edit";


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
        axios.get(`http://localhost:8000/api/projects`)
            .then(res => {
                const projects = res.data;
                this.setState({projects});
            })
    }

    render() {
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