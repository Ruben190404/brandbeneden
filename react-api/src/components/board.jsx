function Board() {
    return (
        <div className={"board"}>
            <div className={"sprint-nav"}>
                <div className={"sprint-nav-sprints"}>
                    <div className={"sprint-nav-sprints-item"}>Warming up</div>
                    <div className={"sprint-nav-sprints-item"}>Sprint 1</div>
                    <div className={"sprint-nav-sprints-item"}>Sprint 2</div>
                    <div className={"sprint-nav-sprints-item"}>Sprint 3</div>
                    <div className={"sprint-nav-sprints-item"}>Sprint 4</div>
                    <div className={"sprint-nav-sprints-item"}>Cooling down</div>
                </div>
                <div className={"sprint-nav-items-wrapper"}>
                    <div className={"sprint-nav-item"}>
                        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="30px" height="30px"><path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"/></svg>
                        <span>Add new sprint</span>
                    </div>
                    <div className={"sprint-nav-item"}>
                        <img src="https://img.icons8.com/ios/50/null/engineering.png" alt={"Gear icon"} className={"gear-icon"}/>
                        <span>Edit sprint</span>
                    </div>
                    <div className={"chart-icon-wrapper"}>
                        <img src="https://img.icons8.com/ios/50/null/combo-chart--v1.png" alt={"Chart icon"} className={"chart-icon"}/>
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
                        <li>Filter:</li>
                        <li>Assignee</li>
                        <li>Status</li>
                        <li>Priority</li>
                        <li>Estimated Time</li>
                        <li>Spent Time</li>
                        <li>Due Date</li>
                    </ul>
                    <div className={"add-card"}>
                        <img src="https://img.icons8.com/material-rounded/24/null/filled-plus-2-math.png" alt={"plus icon"}/>
                        Add card
                    </div>
                </div>
                <div>
                {/*  Cards  */}
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Board