import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Use ScrollLink for smooth scrolling
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>MyPortfolio</h1>
            </div>
            <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
                <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
                <li><ScrollLink to="skills" smooth={true} duration={500}>Skills</ScrollLink></li>
                <li><ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink></li>
                <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
            </ul>
            <div className="navbar-toggle" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
        </nav>
    );
};

export default Navbar;