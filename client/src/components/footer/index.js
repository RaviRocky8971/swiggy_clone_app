import './index.css';

const Footer = () => {
    return (
        <div className="footer-sections">
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
                <p>Ride with us</p>
            </div>

            <div className="footer-column">
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
                <p>Snackables</p>
            </div>

            <div className="footer-column">
                <h4>Social Links</h4>
                <div className="social-icons">
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-pinterest"></i>
                    <i className="fab fa-twitter"></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;
