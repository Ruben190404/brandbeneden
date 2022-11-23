import '../../styles/main.css';

function SprintEditForm() {

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="form justify-around primary-background-colour w-fit">
                <div className="w-full flex justify-evenly items-center flex-row">
                    <button className="border border-gray-700 w-6 h-6">U</button>
                    <h2>Edit Sprint</h2>
                    <div className="w-6 h-6"></div>
                </div>
                <input className="text-center rounded-lg border-2 border-black bg-violet-300 w-52" type="text" id="name" name="name" placeholder="Name"/>
                <div className="flex flex-col items-center rounded-lg border-2 border-black w-52 h-16 bg-violet-300">
                    <label htmlFor="start_date">Start Date</label>
                    <input type="date" id="start_date" className="bg-violet-300" name="start_date" placeholder="Start Date"/>
                </div>
                <div className="flex flex-col items-center rounded-lg border-2 border-black w-52 h-16 bg-violet-300">
                    <label htmlFor="end_date">End Date</label>
                    <input type="date" id="end_date" className="bg-violet-300" name="end_date" placeholder="End Date"/>
                </div>
                <div>
                    <button className="text-center rounded-lg border-2 border-black w-32 bg-red-400" type="submit">cancel</button>
                    <button className="text-center rounded-lg border-2 border-black w-32 bg-green-400" type="submit">Edit</button>
                </div>
            </form>
        </div>
    );
}

export default SprintEditForm