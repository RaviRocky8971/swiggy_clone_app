import { FcRating } from "react-icons/fc";

const RestaurantDetails = ({ RestaurantData }) => {
    const { address, city, cuisine = [], deliveryTime, foodType, rating } = RestaurantData;
    const cuisineData = Array.isArray(cuisine) ? cuisine.join(', ') : "";

    return (
        <div>
            <FcRating />
            <h5>{rating} (34+ ratings)</h5>
            <h6>{cuisineData}</h6>
        </div>
    );
}

export default RestaurantDetails;
