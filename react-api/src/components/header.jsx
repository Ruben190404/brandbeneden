import logo from "../Images/favicon.png";
import pfp from "../Images/testpfp.png";
import '../styles/main.css';

function Header() {
    return (
        <div>
            <header className="flex justify-between primary-background-colour h-20 drop-shadow">
                <div className="nav-center-items w-[500px] pl-6">
                    <a href="/"><img src={logo} className="w-16 h-16 border-4 border-purple-300 rounded-full shadow"/></a>
                    <a href="/" className="purple-button w-48 h-12">Sprints</a>
                    <a href="/pages/burndown" className="purple-button w-48 h-12">Burndown</a>
                </div>
                <div className="nav-center-items pr-6">
                    <img src={pfp} className="center-items w-14 h-16 border-4 border-purple-300 rounded-xl shadow"/>
                </div>
            </header>
        </div>
    )
}

export default Header