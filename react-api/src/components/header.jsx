import logo from "../Images/logo.png";
import pfp from "../Images/testpfp.png";
import '../styles/main.css';

function Header() {
    return (
        <div>
            <header className="flex justify-between primary-background-colour h-20 drop-shadow w-full">
                <div className="nav-center-items w-[700px] pl-6">
                    <a href="/"><img src={logo} className="w-16 h-16 border-4 border-purple-300 rounded-full shadow"/></a>
                    <p className="title">Brandbeneden</p>
                    <div className="dropdown purple-button">
                        <button className="dropbtn">Projects</button>
                        <div className="dropdown-content">
                            <a href="#">Project 1</a>
                            <a href="#">Project 2</a>
                            <a href="#">Project 3</a>
                        </div>
                    </div>
                    <a href="/" className="purple-button">Burn-down</a>
                </div>
                <div className="nav-center-items pr-6">
                    <img src={pfp} className="center-items w-14 h-16 border-4 border-purple-300 rounded-xl shadow"/>
                </div>
            </header>
        </div>
    )
}

export default Header