import React from "react";
import axios from "axios";
import {
    default as setConfig,
    apiUrl,
} from "../../adapters/axios";


const config = setConfig();

export default class ShowSprints extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sprints: []
        }
    }

    componentDidMount() {
        axios.get(apiUrl+`/api/sprints`, config)
            .then(res => {
                const sprints = res.data;
                this.setState({sprints});
            })
    }


    render() {
        console.log("spow");
        return (
                <div className={"sprint-nav-sprints"}>
                    {
                        this.state.sprints.sprints
                            ? this.state.sprints.sprints.map(sprint =>
                                <button className={'sprint-nav-sprints-item'} key={sprint.id} defaultValue={sprint.id}>
                                    <a href={`/${sprint.id}`}>{sprint.title}</a>
                                </button>
                            ) : null
                    }
                </div>
        )
    }
}