import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";


export default class ShowSprints extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sprints: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/sprints`)
            .then(res => {
                const sprints = res.data;
                this.setState({sprints});
            })
    }

    render() {
        return (
                <div className={"sprint-nav-sprints"}>
                    {/*{*/}
                    {/*    this.state.sprints.sprints*/}
                    {/*        ? this.state.sprints.sprints.map(sprint =>*/}
                    {/*            <Link to={{*/}
                    {/*                pathname: "/sprint/" + sprint.id,*/}
                    {/*            }} className={'sprint-nav-sprints-item'} key={sprint.id} defaultValue={sprint.id}>*/}
                    {/*                {sprint.title}*/}
                    {/*            </Link>*/}
                    {/*        ) : ""*/}
                    {/*}*/}
                    {
                        this.state.sprints.sprints
                            ? this.state.sprints.sprints.map(sprint =>
                                <button className={'sprint-nav-sprints-item'} key={sprint.id} defaultValue={sprint.id}>
                                    {sprint.title}
                                </button>
                            ) : ""
                    }
                </div>
        )
    }
}