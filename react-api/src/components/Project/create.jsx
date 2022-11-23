import '../../styles/main.css';

function Form() {
    return (
        <div className="flex justify-center items-center h-screen">
            <form className="form justify-around primary-background-colour">
                <h2>Add Project</h2>
                <input className="text-center rounded-lg border-2 border-black bg-violet-300 w-52" type="text" id="name" name="name" placeholder="Name"/>
                <p>Dropdown voor members</p>
                <div className="flex flex-col items-center rounded-lg border-2 border-black w-52 h-16 bg-violet-300">
                    <label htmlFor="start_date">Start Date</label>
                    <input type="date" id="start_date" className="bg-violet-300" name="start_date" placeholder="Start Date"/>
                </div>
                <div className="flex flex-col items-center rounded-lg border-2 border-black w-52 h-16 bg-violet-300">
                    <label htmlFor="end_date">End Date</label>
                    <input type="date" id="end_date" className="bg-violet-300" name="end_date" placeholder="End Date"/>
                </div>
                <button className="text-center rounded-lg border-2 border-black w-32 bg-green-400" type="button" onClick={submit}>Submit</button>
            </form>
        </div>
    );
}

function submit() {
    console.log("Submitted");
}

export default Form