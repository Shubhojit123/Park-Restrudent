import React from "react";
import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* About Section */}
                <div className="footer-about">
                    <h3>MyRestaurant</h3>
                    <p>
                        Experience the best dining with our delicious dishes and warm hospitality.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p><i className="fas fa-map-marker-alt"></i> S.k nogor hoimonti bloke, Hatiberiya, Haldia</p>
                    <p><i className="fas fa-phone"></i> 7031944550 / 9647586466</p>
                    <p><i className="fas fa-envelope"></i> contact@myrestaurant.com</p>
                </div>

                {/* Social Media Links */}
                <div className="footer-socials">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>&copy; 🍽️ Park Hotel & Restaurant. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
