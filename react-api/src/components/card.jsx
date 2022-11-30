
function Card() {

    return (
    <div className="card">
        <div>
            <input type="checkbox"/>
        </div>
        <div className="first-cell">
            <textarea name="title" id="title" defaultValue={"peepeepoopoo"} cols="30" rows="3"></textarea>
        </div>
        <div className="table-cell">
            <select name="" id="">
                <option defaultValue="">Sjors</option>
                <option defaultValue="">Ruben</option>
            </select>
        </div>
        <div className="table-cell">
            <select name="" id="">
                <option defaultValue="">To Do</option>
                <option defaultValue="">Open</option>
                <option defaultValue="">Done</option>
            </select>
        </div>
        <div className="table-cell">
            <select name="" id="">
                <option defaultValue="">Low</option>
                <option defaultValue="">Medium</option>
                <option defaultValue="">High</option>
            </select>        
        </div>
        <div className="table-cell">
            <input type="text" defaultValue={"2d"}/>
        </div>
        <div className="table-cell">
            <input type="text" defaultValue={"1w"}/>
        </div>
        <div className="table-cell last-cell">
            <p>Due date</p>
        </div>
    </div>
    )
}

export default Card