import React, { useEffect, useState } from 'react';
import './Hero.css';
import { images } from '../../assets/data';
import { Link } from 'react-router-dom';

function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isMobile) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isMobile]);

    return (
        <div className="hero">
            <div
                className="hero-image"
                style={{ backgroundImage: `url(${images[isMobile ? 0 : currentIndex]})` }}
            >
                <div className="hero-content">
                    <h1>Glitch Lifestyle</h1>
                    <div className="hero-buttons">
                        <Link to="/gallery">
                            <button className="btn-gallery">View Gallery</button>
                        </Link>
                        <Link to="/Contact">
                            <button className="btn-book">Book With Us</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
