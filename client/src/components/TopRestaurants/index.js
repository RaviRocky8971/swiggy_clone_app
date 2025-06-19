import './index.css';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TopRestaurants = ({ data, onClickRestaurant }) => { 
    const {address,city,cuisine,deliveryTime,image,name,rating,_id} = data;
    const cuisineString = cuisine?.join(", ") || "N/A";
    const onClickElement = ()=>{
        onClickRestaurant(_id)
    }
    const { city_name } = useSelector(state => state.location);
    return (
        <div className="restaurant-card mb-3 mt-3">
            <div className="restaurant-image-wrapper">
                <Link to={`/RestaurantData/${city_name}/${_id}`}>
                    <img src={image} alt={`${name} restaurant`} className="restaurant-image" loading="lazy"
                        onError={(e) => {
                            e.target.src = "/images/placeholder.png";
                        }}
                        onClick={onClickElement}
                    />
                </Link>
                <div className="discount-tag">50% OFF UPTO ₹100</div>
            </div>
            <h4 className="restaurant-name">{name}</h4>
            <div className="restaurant-rating">
                <span className="rating-star">★</span>
                <span>{rating}</span>
                <span>&nbsp;·&nbsp;</span>
                <span>{deliveryTime} mins</span>
            </div>
            <p className="restaurant-cuisines">{cuisineString}</p>
            <p className="restaurant-location">{city}</p>
        </div>
    );
};

export default TopRestaurants;
