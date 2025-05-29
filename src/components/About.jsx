import React from "react";
import "../styles/About.css";

function About() {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="about-image">
                    <img src="/images/about.jpg" alt="Restaurant Interior" />
                </div>
                <div className="about-content">
                    <h2>About <span>Us</span></h2>
                    <p>
                        At <strong>🍽️ Park Hotel & Restaurant</strong>, we serve delicious and fresh cuisine made with the finest ingredients.
                        Our chefs craft each dish with love, bringing you an unforgettable dining experience.
                        Come and enjoy a warm, inviting ambiance with top-quality service.
                    </p>
                    <button className="about-btn">Learn More</button>
                </div>
            </div>
        </section>
    );
}

export default About;
