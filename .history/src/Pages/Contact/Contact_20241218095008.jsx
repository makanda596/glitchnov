import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import './contact.css'
import Navbar from "../../Components/Navbar/Navbar";

function Contact() {
    // Form state
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        additionalInfo: "",
        date: "",
    });

    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission to Web3Forms
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = new FormData();
        form.append("access_key", "321c6722-643e-4413-83fe-684ab77d92b8"); // Replace with your Web3Forms API key
        form.append("name", formData.name);
        form.append("phone", formData.phone);
        form.append("email", formData.email);
        form.append("service", formData.service);
        form.append("additionalInfo", formData.additionalInfo);
        form.append("date", formData.date);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: form,
            });

            const json = await res.json();
            if (json.success) {
                setMessage("Your booking request has been sent successfully.");
                setFormSuccess(true);
            } else {
                setMessage("There was a problem sending your request.");
            }
        } catch (error) {
            alert("There was an error submitting the form.");
        }

        setIsSubmitting(false);
    };

    // Add the script for ElfSight after the component is mounted
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup the script
        };
    }, []);

    return (
        <div>
            <Navbar />
            <div className="contact-section">
                <div className="contact-form-container">
                    <div className="form-left">
                        <h2>Book Your Shoot</h2>
                        {formSuccess ? (
                            <div className="success-message">{message}</div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your name"
                                        required
                                        className="text"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tel">Phone Number:</label>
                                    <input
                                        type="number"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="service">Select Service:</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select a service</option>
                                        <option value="event-shooting">Events Shooting</option>
                                        <option value="video-shooting">Video Shooting</option>
                                        <option value="portraits">Portraits</option>
                                        <option value="outdoor">Outdoor</option>
                                        <option value="indoor">Indoor</option>
                                        <option value="poster-making">Poster Making Services</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="date">Preferred Shoot Date:</label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="additionalInfo">Additional Information:</label>
                                    <textarea
                                        id="additionalInfo"
                                        name="additionalInfo"
                                        value={formData.additionalInfo}
                                        onChange={handleInputChange}
                                        placeholder="Any specific requests or details?"
                                    ></textarea>
                                </div>

                                <button type="submit" className="submit-button" disabled={isSubmitting}>
                                    {isSubmitting ? "Submitting..." : "Submit Booking"}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Right Side: Date and Photo */}
                    <div className="form-right">
                        {/* ElfSight widget integration */}
                        <div className="elfsight-app-1552705b-cfc2-43a1-8c52-a2f88696bc8e" data-elfsight-app-lazy></div>
                    </div>
                </div>

                {message && <div className="message">{message}</div>}
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
