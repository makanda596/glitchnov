import React, { useEffect, useState } from 'react';
import './Hero.css'; // Import the CSS file for styling
import { images } from '../../assets/data'
import { Link } from 'react-router-dom'
function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup the interval on unmount
    }, []);

    return (
        <div className="hero">
            <div className="hero-image" style={{ backgroundImage: `url(${images[currentIndex]})` }} >
                <div className="hero-content">
                    <h1>Glitch Lifestile</h1>
                    <div className="hero-buttons">
                        <Link to="/gallery" ><button className="btn-gallery">View Gallery</button></Link>
                        <Link to="/Contact" ><button className="btn-book" >Book With Us</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
