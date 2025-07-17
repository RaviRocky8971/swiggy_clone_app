import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './index.css';
import RestaurantDetails from "../RestaurantDetails";
import OfferComponent from "../OfferComponents";
import ItemTypes from "../ItemTypes";
import { useSelector } from 'react-redux';

const RestaurantData = () => {
    const { city_name: cityFromRedux } = useSelector(state => state.location);
    const { city_name, _id } = useParams();
    // const data = useSelector((state) => state.cart.cartData);

    // console.log(data);

    const [restaurantName, setRestaurantName] = useState("");
    const [restaurantData, setRestaurantData] = useState({}); // object, not array
    const [foodType, setFoodType] = useState("Veg");

    useEffect(() => {
        const getRestaurantName = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/getRestaurantName?id=${_id}`);
                const data = await response.json();
                setRestaurantName(data.name || "Unknown");
            } catch (err) {
                console.error("Error fetching restaurant name:", err);
            }
        };
        getRestaurantName();
    }, [city_name, _id]);

    useEffect(() => {
        const fetchRestaurantData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/getRestaurantItems?restaurantId=${_id}&type=${foodType}`);
                const data = await response.json();
                console.log("Fetched menu:", data);
                setRestaurantData(data); // it's grouped by category
            } catch (err) {
                console.error("Error fetching restaurant data:", err);
            }
        };
        fetchRestaurantData();
    }, [foodType, _id]);

    return (
        <div>
            <p className="restaurant-name-styles">
                <span className="home-styles">Home / {cityFromRedux || city_name}</span>
                <span className="name-styles"> / {restaurantName}</span>
            </p>

            <h1 className="restaurant-name-styles">{restaurantName}</h1>
            <RestaurantDetails RestaurantData={{ name: restaurantName }} />

            <h2 className="restaurant-name-styles">Deals for You</h2>
            <OfferComponent />

            {/* Veg / Non-Veg Toggle */}
            <div className="veg-nonveg-toggle-switches">
                <label className="toggle-switch">
                    <input
                        type="checkbox"
                        checked={foodType === "Veg"}
                        onChange={() => setFoodType("Veg")}
                        disabled={foodType === "Veg"}
                    />
                    <span className="slider veg"></span>
                    <span className="switch-label">
                        <span className="switch-dot veg"></span>Veg
                    </span>
                </label>
                <label className="toggle-switch">
                    <input
                        type="checkbox"
                        checked={foodType === "Non-Veg"}
                        onChange={() => setFoodType("Non-Veg")}
                        disabled={foodType === "Non-Veg"}
                    />
                    <span className="slider nonveg"></span>
                    <span className="switch-label">
                        <span className="switch-dot nonveg"></span>Non-Veg
                    </span>
                </label>
            </div>

            <hr className="break-styles" />

            {Object.entries(restaurantData).map(([category, items]) => (
                <ItemTypes key={category} category={category} items={items} />
            ))}

            <div className='cart-styles'>
                <p className='cart-items-para'>{}Items Added</p>
                <div className='cart-flex-styles'>
                    <p className='cart-heading-styles'>VIEW CART</p>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/ChatbotAssets/Checkout_Cart" className="image-styles" alt='cart-image'/>
                </div>
            </div>
        </div>
    );
};

export default RestaurantData;
