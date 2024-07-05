import { useState } from "react";

function Navbar() {
    const navLinks = ["How it Works", "Cryptos", "Features", "Testimonial", "University"];
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top" id="nav">
            <div className="container-fluid mx-lg-5 mx-md-4">
                <a className="color-red fw-bold lead" style={{ textDecoration: "none" }} href="#">Crypto<span className="text-light">Ducklings</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? 'true' : 'false'} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        {navLinks.map((navLink, index) => (
                            <li key={index} className="nav-item">
                                <a className="nav-link text-light" aria-current="page" href="#">{navLink}</a>
                            </li>
                        ))}
                    </ul>
                    <button className="button-outline-red" type="button">Login</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;