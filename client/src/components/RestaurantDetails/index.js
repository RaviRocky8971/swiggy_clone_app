import { FcRating } from "react-icons/fc";
import "./index.css";
import TimelineIcon from "../CommonComponents/TimelineIcon";

const RestaurantDetails = ({ RestaurantData }) => {
    const {address,city,cuisine = [],deliveryTime,foodType,rating,costForTwo="400 for two",outlet} = RestaurantData;

    const cuisineData = Array.isArray(cuisine) ? cuisine.join(', ') : cuisine;

    return (
        <div className="restaurant-container">
            <div className="restaurant-box">
                <div className="rating-row">
                    <FcRating className="star-icon" />
                    <span className="rating-text">{rating} (34K+ ratings)</span>
                    <span className="dot-divider">•</span>
                    <span className="cost-text">{costForTwo}</span>
                </div>

                <div className="cuisine-text">
                    {cuisineData.split(',').map((item, index) => (
                        <span key={index} className="cuisine-item">
                            {item.trim()}
                            {index < cuisineData.split(',').length - 1 && ','}&nbsp;
                        </span>
                    ))}
                </div>

                <div className="outlet-section">
                    <TimelineIcon />
                    <div className="outlet-details">
                        <div>
                            <strong>Outlet</strong> <span className="outlet-name">{city}</span> <span style={{ color: "red" }}>▼</span>
                        </div>
                        <div className="delivery-time">{deliveryTime}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetails;
