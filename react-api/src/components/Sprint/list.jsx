import '../../styles/main.css';

import React, {Component} from "react";
import {BrowserRouter, Routes, Route,Link} from "react-router-dom";

import axios from "axios";
import SprintEditForm from "./edit";

// TODO: Fix Cancel Button to Cancel
// TODO: Maak zodat je de geselecteerde sprint te zien is
// TODO: Make U button trashcan and softdelete
// TODO: Als we groepen hebben moeten we checken of je niet vanaf hier een sprint kan veranderen van een andere groep

class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sprints: [],
            loading: true
        }

        this.timeout = [];
    }

    componentDidMount() {
        this.get()
    }

    async get() {
        const response = await axios.get('http://127.0.0.1:8000/api/sprints');

        if (response.data.status === true) {
            this.setState({
                sprints: response.data.sprints,
                loading: false,
            })
        }
    }

    render() {
        var sprintListDisplay = "";

        if (this.state.loading) {
            sprintListDisplay = <div><h1>Loading ...</h1></div>;

        } else {
            var i = 0;
            sprintListDisplay =
                this.state.sprints.map((row) => {
                    i++;
                    return (
                        <Link className="bg-violet-300 hover:bg-violet-400 active:bg-violet-500" key={row.id} to={"/sprint-edit/"+row.id} relative={"path"}>{i}. {row.title}</Link>
                    )
                })
        }

        return (
            <div className="w-48 h-fit border-2 border-black flex flex-col border-black border-2 bg-violet-300 rounded-lg pt-1 pb-1">
                <h4 className="font-bold">Sprint List:</h4>
                {sprintListDisplay}
            </div>
        );
    }
}

export default List;