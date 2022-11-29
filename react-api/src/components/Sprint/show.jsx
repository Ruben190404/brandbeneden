import '../../styles/main.css';

function SprintShow(props) {

    return (

      <button className="flex flex-col items-center bg-violet-800 w-32 h-12 rounded-b-xl text-center hover:shadow hover:shadow-md hover:shadow-violet-400 hover:bg-violet-700 hover:h-14 active:bg-violet-600">
          <p className="w-fit font-bold text-base border-b">{props.why}</p>
          <p className=" font-thin text-sm">dd/mm/yyyy</p>
      </button>
    );
}

export default SprintShow