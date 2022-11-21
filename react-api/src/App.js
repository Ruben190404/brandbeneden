import './styles/App.css';
import logo from './Images/favicon.png';

function App() {
    return (
        <div>
            <header className="flex justify-between primary-background-colour h-20 drop-shadow">
                <div className="nav-center-items w-[500px] pl-6">
                    <a href="/"><img src={logo} className="w-16 h-16 border-4 border-purple-300 rounded-full shadow"/></a>
                    <a href="/" className="purple-button w-48 h-12">Sprints</a>
                    <a href="/" className="purple-button w-48 h-12">Burndown</a>
                </div>
                <div className="nav-center-items w-[300px] pr-6">
                    <a href="/" className="purple-button w-44 h-12">Register</a>
                    <img src="khjhgiu.png" className="center-items w-14 h-16 border-4 border-purple-300 rounded-xl shadow"/>
                </div>
            </header>
        </div>
    );
}

export default App;
