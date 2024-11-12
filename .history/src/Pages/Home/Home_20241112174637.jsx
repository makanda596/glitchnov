import React, { useRef, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Footer from '../../Components/Footer/Footer.jsx';
import "./Home.css";
import { Link } from 'react-router-dom'
// import pabrio3 from "../../assets/Events/cooperate events/pabiro-2.mp4";
import creative10 from '../../assets/concept & creativity/creative10.jpg'
import {//All the images imported from the data assets 
    clientImages,
    all_image,
    sliding,
    load_more,
    videos,
    creative_image,
    event_image,
    outdoor_image,
} from "../../assets/data"; // Import the images
function Home() {
    const [activeLink, setActiveLink] = useState("photos");
    const [search, setSearch] = useState("");
    const showRef = useRef();
    const hideRef = useRef(); //hide the more pictures
    const videoRef = useRef(); //for videos
    const eventRef = useRef(); //for events
    const allRef = useRef(); //SHOW all photos
    const outRef = useRef();
    const creativeRef = useRef(); // for creativity
    const [selectedImage, setSelectedImage] = useState(null);

    //  handle image click
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    //  close the popup/modal
    const handleCloseModal = () => {
        setSelectedImage(null);
    };
    function show() {
        showRef.current.style.display = "grid";
        hideRef.current.style.display = "none";
    }
    function video() {
        /// to add a video to display when clicked
        setActiveLink("videos");
        videoRef.current.style.display = "grid";
        allRef.current.style.display = "none";
        showRef.current.style.display = "none";
        hideRef.current.style.display = "none";
        eventRef.current.style.display = "none";
        creativeRef.current.style.display = "none";
    }
    function photos() {
        //to add all the images when photos clicked
        setActiveLink("photos");
        videoRef.current.style.display = "none";
        allRef.current.style.display = "grid";
        eventRef.current.style.display = "none";
        hideRef.current.style.display = "flex";
        outRef.current.style.display = "none";
        creativeRef.current.style.display = "none";
    }
    function events() {
        ///to add the events images
        setActiveLink("events");
        eventRef.current.style.display = "grid";
        videoRef.current.style.display = "none";
        allRef.current.style.display = "none";
        showRef.current.style.display = "none";
        hideRef.current.style.display = "none";
        creativeRef.current.style.display = "none";
        outRef.current.style.display = "none";
    }
    function outdoor() {
        //for the outdoor to dispalyed when clicked
        setActiveLink("indoors");
        outRef.current.style.display = "grid";
        eventRef.current.style.display = "none";
        videoRef.current.style.display = "none";
        allRef.current.style.display = "none";
        showRef.current.style.display = "none";
        hideRef.current.style.display = "none";
        creativeRef.current.style.display = "none";
    }
    function creative() {
        setActiveLink("creative");
        creativeRef.current.style.display = "grid";
        eventRef.current.style.display = "none";
        videoRef.current.style.display = "none";
        allRef.current.style.display = "none";
        outRef.current.style.display = "none";
        showRef.current.style.display = "none";
        hideRef.current.style.display = "none";
    }
    const [selectedVideo, setSelectedVideo] = useState(null);

    // Function to open the modal with the selected video
    const handlePlay = (videoSrc) => {
        setSelectedVideo(videoSrc);
    };

    // Function to close the modal
    const handleClose = () => {
        setSelectedVideo(null);
    };
    return (
        <>
            <div>
                <Navbar />
                <Hero />
                <div className="client-section">
                    <h2>OUR PREVIOUS CLIENTS</h2>
                    <div className="client-slider">
                        {clientImages.map((image, index) => (
                            <div className="client-image" key={index}>
                                <img src={image.image} alt="" loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="about">
                    <div className="about-left">
                        <h3>Welcome to Glitch Lifestyle Photography!</h3>
                        <p>
                            At Glitch Lifestyle, we believe that{" "}
                            <span>
                                while manners maketh a man, it's a smile that brightens him
                            </span>
                            . We’re passionate about capturing the moments that bring out your
                            best self, whether it’s a wedding,event an outdoor adventure,a
                            Video or a creative shoot. Our goal is to make every client feel
                            special, delivering timeless memories with warmth and
                            professionalism.
                        </p>
                        <div className="img-section">
                            {sliding.map((item, index) => {
                                return <div className="img-slide" key={index}>
                                    <img src={item.image} alt="" loading="lazy" />
                                </div>
                            })}

                        </div>
                    </div>
                    <div className="about-right">
                        <img className="img1" src={"https://res.cloudinary.com/db5pgr14l/image/upload/v1731421429/glitchwebsite/qhglma9r3oneykstpsgn.png"} alt="" loading="lazy" />
                        <img className="img2" src={creative10} alt="" loading="lazy" />
                    </div>
                </div>
                <div className="list">
                    <ul>
                        <li
                            className={activeLink === "photos" ? "active" : ""}
                            onClick={photos}
                        >
                            All photos
                        </li>
                        <li
                            className={activeLink === "videos" ? "active" : ""}
                            onClick={video}
                        >
                            Videos
                        </li>
                        <li
                            className={activeLink === "events" ? "active" : ""}
                            onClick={events}
                        >
                            Events
                        </li>
                        <li
                            className={activeLink === "indoors" ? "active" : ""}
                            onClick={outdoor}
                        >
                            Outdoors
                        </li>
                        <li
                            className={activeLink === "creative" ? "active" : ""}
                            onClick={creative}
                        >
                            Creativity
                        </li>
                    </ul>
                    <input
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by category......"
                    />
                </div>
                <div ref={allRef} className="photos">
                    {all_image
                        .filter((item) => item.name.toLowerCase().includes(search))
                        .map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="photosa">
                                        <img
                                            src={item.image}
                                            alt=""
                                            onClick={() => handleImageClick(item.image)}
                                            loading="lazy"
                                        />

                                        <p>{item.name}</p>
                                    </div>
                                </div>
                            );
                        })}
                    {selectedImage && (
                        <div className="modal-overlay" onClick={handleCloseModal}>
                            <div
                                className="modal-content"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedImage}
                                    alt="Selected"
                                    className="modal-image"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    )}
                </div>

                <div className="lode-more">
                    <button onClick={show} ref={hideRef}>
                        Load More
                    </button>
                    <div ref={showRef} className="more">
                        {load_more
                            .filter((item) => item.name.toLowerCase().includes(search))
                            .map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="photosa">
                                            <img
                                                src={item.image}
                                                alt=""
                                                onClick={() => handleImageClick(item.image)}
                                                loading="lazy"
                                            />
                                            <p>{item.name}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        {selectedImage && (
                            <div className="modal-overlay" onClick={handleCloseModal}>
                                <div
                                    className="modal-content"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <img
                                        src={selectedImage}
                                        alt="Selected"
                                        className="modal-image"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <div ref={videoRef} className="video-section">
                        {videos.map((video) => (
                            <div className="video-container" key={video.id}>
                                <video className="video-element" src={video.src} muted autoPlay />
                                <div
                                    className="play-button"
                                    onClick={() => handlePlay(video.src)}
                                >
                                    <span>▶</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Modal for video popup */}
                    {selectedVideo && (
                        <div className="video-modal">
                            <div className="video-modal-content">
                                <button className="close-modal" onClick={handleClose}>
                                    X
                                </button>
                                <video src={selectedVideo} controls autoPlay />
                            </div>
                        </div>
                    )}
                </div>
                <div ref={eventRef} className="photose">
                    {event_image.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="photosa">
                                    <img
                                        src={item.image}
                                        alt=""
                                        onClick={() => handleImageClick(item.image)}
                                    />
                                </div>
                            </div>
                        );
                    })}
                    {selectedImage && (
                        <div className="modal-overlay" onClick={handleCloseModal}>
                            <div
                                className="modal-content"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedImage}
                                    alt="Selected"
                                    className="modal-image"
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div ref={outRef} className="photose">
                    {outdoor_image.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="photosa">
                                    <img
                                        src={item.image}
                                        alt=""
                                        onClick={() => handleImageClick(item.image)}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        );
                    })}
                    {selectedImage && (
                        <div className="modal-overlay" onClick={handleCloseModal}>
                            <div
                                className="modal-content"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedImage}
                                    alt="Selected"
                                    className="modal-image"
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div ref={creativeRef} className="photose">
                    {creative_image.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="photosa">
                                    <img
                                        src={item.image}
                                        alt=""
                                        onClick={() => handleImageClick(item.image)}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        );
                    })}
                    {selectedImage && (
                        <div className="modal-overlay" onClick={handleCloseModal}>
                            <div
                                className="modal-content"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedImage}
                                    alt="Selected"
                                    className="modal-image"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div className="product-section">
                    <div className="product-left">
                        <video src={"https://res.cloudinary.com/db5pgr14l/video/upload/v1731394640/glitchwebsite/mnec90kzznoecrppajpz.mp4"} controls muted autoPlay />
                        <Link to="/gallery"><button>EXPLORE MORE</button></Link>
                    </div>
                    <div className="product-right">
                        <h5>Bring Your Vision to Life with Glitch Lifestyle</h5>
                        <p>
                            At Glitch Lifestyle, we understand the power of a well-crafted
                            story. Whether it's capturing the magic of your event or creating
                            promotional content that resonates, our creative team is committed
                            to delivering stunning visuals that reflect your brand’s unique
                            identity. With a passion for innovation and attention to detail,
                            we ensure every moment is captured flawlessly.
                        </p>
                    </div>
                </div>
                <div className="hire">
                    <h6>Capture the moments. Create lasting memories.</h6>
                    <Link to="/contact"><button>BOOK WITH US</button></Link>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Home;
