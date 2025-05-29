import React from "react";
import "../styles/Contact.css";

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                {/* Contact Info */}
                <div className="contact-info">
                    <h2>Contact <span>Us</span></h2>
                    <p>Have questions or want to book a table? Reach out to us!</p>

                    <div className="contact-details">
                        <p><i className="fas fa-map-marker-alt"></i> S.k nogor hoimonti bloke, Hatiberiya, Haldia</p>
                        <p><i className="fas fa-phone"></i> 7031944550 / 9647586466</p>
                        <p><i className="fas fa-envelope"></i> contact@myrestaurant.com</p>
                    </div>

                    {/* Google Map */}
                    <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3697.9945839838383!2d88.06158297528532!3d22.04980267986753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDAyJzU5LjMiTiA4OMKwMDMnNTEuMCJF!5e0!3m2!1sen!2sin!4v1748518650376!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form">
                    <h3>Send Us a Message</h3>
                    <form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
