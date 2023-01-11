import React from 'react';
import '../styles/main.css';

function Task() {
    return (
        <div>
                <div className="table-row">
                    <div className="table-cell first-cell">
                        <p>Tasks</p>
                    </div>
                    <div className="table-cell">
                        <p>Assigne</p>
                    </div>
                    <div className="table-cell">
                        <p>Status</p>
                    </div>
                    <div className="table-cell">
                        <p>Priority</p>
                    </div>
                    <div className="table-cell">
                        <p>Worked time</p>
                    </div>
                    <div className="table-cell">
                        <p>Est time</p>
                    </div>
                    <div className="table-cell last-cell">
                        <p>Due date</p>
                    </div>
                </div>
        </div>
    );
}

export default Task;