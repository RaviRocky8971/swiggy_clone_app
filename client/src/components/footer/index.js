import './index.css';
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer-container">
            {/* <div className="footer-logo-section">
                <img src="/swiggy-logo.png" alt="Swiggy Logo" className="footer-logo" />
                <p>© 2025 Swiggy Limited</p>
            </div> */}

            <div className="footer-columns">
                <div className="footer-column">
                    <h4>Company</h4>
                    <p>About Us</p>
                    <p>Swiggy Corporate</p>
                    <p>Careers</p>
                    <p>Team</p>
                    <p>Swiggy One</p>
                    <p>Swiggy Instamart</p>
                    <p>Swiggy Dineout</p>
                    <p>Swiggy Genie</p>
                    <p>Minis</p>
                    <p>Pyng</p>
                </div>

                <div className="footer-column">
                    <h4>Contact us</h4>
                    <p>Help & Support</p>
                    <p>Partner with us</p>
                    <p className='mb-5'>Ride with us</p>

                    <h4>Legal</h4>
                    <p>Terms & Conditions</p>
                    <p>Cookie Policy</p>
                    <p>Privacy Policy</p>
                    <p>Investor Relations</p>
                </div>

                <div className="footer-column">
                    <h4>Available in:</h4>
                    <p>Bangalore</p>
                    <p>Gurgaon</p>
                    <p>Hyderabad</p>
                    <p>Delhi</p>
                    <p>Mumbai</p>
                    <p>Pune</p>
                    <select className="footer-dropdown">
                        <option>679 cities</option>
                    </select>
                </div>

                <div className="footer-column">
                    <h4>Life at Swiggy</h4>
                    <p>Explore with Swiggy</p>
                    <p>Swiggy News</p>
                    <p className='mb-5'>Snackables</p>

                    <h4>Social Links</h4>
                    <div className="social-icons">
                        <FaLinkedinIn />
                        <FaInstagram />
                        <FaFacebookF />
                        <FaPinterestP />
                        <FaTwitter />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
