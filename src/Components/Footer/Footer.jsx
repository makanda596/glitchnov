import React from 'react';
import './Footer.css'; // Importing the CSS file

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => { // for the footer part 
    const currentYear = new Date().getFullYear()
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>At Glitch Lifestyle, we believe that while manners maketh a man, it's a smile that brightens him</p>
                    <div className="footer-media">
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

                        <a
                            href="https://wa.me/+254796962375"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            < WhatsAppIcon fontSize="medium" />
                        </a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Services</h3>
                    <ul>
                        <li>videos Shooting</li>
                        <li>Event Shooting</li>
                        <li>Outdoor Shooting</li>
                        <li>Poster making</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p> <a href="mailto:murimiisaac8@gmail.com" target="_blank"
                        rel="noopener noreferrer">Email :murimiisaac8@gmail.com</a></p>
                    <p><a href="tel:+254796962375" target="_blank"
                        rel="noopener noreferrer">Phone: 0796962375</a></p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {currentYear} Created by <a href="https://wa.me/+254742149060" target="_blank" rel="noopener noreferrer"> Makanda Worksoft</a>. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
