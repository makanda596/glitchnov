import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/product shoot/glitch.png';
import './Navbar.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const [activeLink, setActiveLink] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <img src={logo} className="logo" alt="Logo" />

            <ul className={`nav-links nav-links-mobile ${mobileMenuOpen ? 'open' : ''}`}>
                <li className='link'>
                    <Link
                        to="/"
                        className={activeLink === "home" ? "active" : ""}
                        onClick={() => {
                            setActiveLink("home");
                            setMobileMenuOpen(false);
                        }}
                    >
                        Home
                    </Link>
                </li>

                <li className='link'>
                    <Link
                        to="/gallery"
                        className={activeLink === "gallery" ? "active" : ""}
                        onClick={() => {
                            setActiveLink("gallery");
                            setMobileMenuOpen(false);
                        }}
                    >
                        Gallery
                    </Link>
                </li>

                <li className='link'>
                    <Link
                        to="/events"
                        className={activeLink === "events" ? "active" : ""}
                        onClick={() => {
                            setActiveLink("events");
                            setMobileMenuOpen(false);
                        }}
                    >
                        Events
                    </Link>
                </li>


                <li>
                    <Link
                        to="/outdoor"
                        className={activeLink === '/outdoor' ? 'active' : ''}
                        onClick={() => {
                            setActiveLink('/outdoor');
                            setMobileMenuOpen(false);
                        }}
                    >
                        Outdoor/Indoor
                    </Link>
                </li>


                <li className='link'>
                    <Link
                        to="/services"
                        className={activeLink === "services" ? "active" : ""}
                        onClick={() => {
                            setActiveLink("services");
                            setMobileMenuOpen(false);
                        }}
                    >
                        Poster Making
                    </Link>
                </li>

                <li className='link'>
                    <Link
                        to="/contact"
                        className={activeLink === "contact" ? "active" : ""}
                        onClick={() => {
                            setActiveLink("contact");
                            setMobileMenuOpen(false);
                        }}
                    >
                        Book A Shoot
                    </Link>
                </li>
            </ul>

            <div className="media">
                <a
                    href="https://www.instagram.com/glitch_lifestyle/profilecard/?igsh=Nzg1Z3hub2JuZmpp"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InstagramIcon fontSize="medium" />

                </a>
                <a
                    href="https://www.facebook.com/glitchphotography"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FacebookIcon fontSize="medium" />
                </a>
            </div>

            <div className="mobile-menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <MenuIcon />
            </div>
        </nav>
    );
}

export default Navbar;
