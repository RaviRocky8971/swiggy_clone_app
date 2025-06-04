import './index.css';

const TopRestaurants = ({ data }) => {
    const {address,city,cuisine,deliveryTime,image,name,rating} = data;
    const cuisineString = cuisine?.join(", ") || "N/A";
    return (
        <div className="restaurant-card">
            <div className="restaurant-image-wrapper">
                <img src={image} alt={`${name} restaurant`} className="restaurant-image" loading="lazy"
                    onError={(e) => {
                        e.target.src = "/images/placeholder.png";
                    }}
                />
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
