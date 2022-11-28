
function Card() {

    return (
    <div className="card">
        <div>
            <input type="checkbox"/>
        </div>
        <div className="first-cell">
            <textarea name="title" id="title" value={"peepeepoopoo"} cols="30" rows="3"></textarea>
        </div>
        <div className="table-cell">
            <select name="" id="">
                <option value="">Sjors</option>
                <option value="">Ruben</option>
            </select>
        </div>
        <div className="table-cell">
            <select name="" id="">
                <option value="">To Do</option>
                <option value="">Open</option>
                <option value="">Done</option>
            </select>
        </div>
        <div className="table-cell">
            <select name="" id="">
                <option value="">Low</option>
                <option value="">Medium</option>
                <option value="">High</option>
            </select>        
        </div>
        <div className="table-cell">
            <input type="text" value={"2d"}/>
        </div>
        <div className="table-cell">
            <input type="text" value={"1w"}/>
        </div>
        <div className="table-cell last-cell">
            <p>Due date</p>
        </div>
    </div>
    )
}

export default Card