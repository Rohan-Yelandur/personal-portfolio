import "../styles/Navbar.css"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;