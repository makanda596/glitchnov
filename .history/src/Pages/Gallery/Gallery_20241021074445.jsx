import React, { useState, useRef } from 'react'
import {
    all_image,
    loading_more,
    videos,
    creative_image,
    event_image,
    outdoor_image,
} from "../../assets/data"; // Import the images
import './Gallery.css'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
function Gallery() {

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
        videoRef.current.style.display = "flex";
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
        <div>
            <Navbar />
            <div className="gallery">
                <h1>GALLERY SECTION</h1>
                <p>Step into our world of creativity. Explore moments captured in their finest form.</p>
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
                    {loading_more
                        .filter((item) => item.name.toLowerCase().includes(search))
                        .map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="photosa">
                                        <img
                                            src={item.image}
                                            alt=""
                                            onClick={() => handleImageClick(item.image)}
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
            <Footer />
        </div>
    )
}

export default Gallery
