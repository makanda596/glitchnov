import React, { useState } from 'react'
import { outdoors_image } from '../../assets/data'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

function Outdoor() {
    const [selectedImage, setSelectedImage] = useState(null);
    //  handle image click
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    //  close the popup/modal
    const handleCloseModal = () => {
        setSelectedImage(null);
    };
    return (
        <div>
            <Navbar />
            <div className="photos">
                {outdoors_image.map((item, index) => {
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
            <Footer />
        </div>
    )
}

export default Outdoor
