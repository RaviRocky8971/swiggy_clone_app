import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './index.css';
import RestaurantDetails from "../RestaurantDetails";
import OfferComponent from "../OfferComponents";
import ItemTypes from "../ItemTypes";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { setRestaurantName } from '../../slices/cartSlice';

const RestaurantData = () => {
    const { city_name: cityFromRedux } = useSelector(state => state.location);
    const { city_name, _id } = useParams();
    const [restaurantName, setRestaurantNameLocal] = useState("");
    const [restaurantData, setRestaurantData] = useState({});
    const [foodType, setFoodType] = useState("Veg");
    const cartData = useSelector((state) => state.cart.cartData);
    const dispatch = useDispatch();

    const totalItems = cartData.reduce((sum, item) => sum + item.count, 0);
    const totalPrice = cartData.reduce((sum, item) => sum + item.totalPrice, 0);

    useEffect(() => {
        const getRestaurantName = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/getRestaurantName?id=${_id}`);
                const data = await response.json();
                setRestaurantNameLocal(data.name || "Unknown");
                dispatch(setRestaurantName(data.name || "Unknown"));
            } catch (err) {
                console.error("Error fetching restaurant name:", err);
            }
        };
        getRestaurantName();
    }, [city_name, _id, dispatch]);

    useEffect(() => {
        const fetchRestaurantData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/getRestaurantItems?restaurantId=${_id}&type=${foodType}`);
                const data = await response.json();
                setRestaurantData(data);
            } catch (err) {
                console.error("Error fetching restaurant data:", err);
            }
        };
        fetchRestaurantData();
    }, [foodType, _id]);

    return (
        <div className="restaurant-data-wrapper">
            <p className="restaurant-name-styles">
                <span className="home-styles">Home / {cityFromRedux || city_name}</span>
                <span className="name-styles"> / {restaurantName}</span>
            </p>

            <h1 className="restaurant-name-styles">{restaurantName}</h1>
            <RestaurantDetails RestaurantData={{ name: restaurantName }} />

            <h2 className="restaurant-name-styles">Deals for You</h2>
            <OfferComponent />

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

            {totalItems > 0 && (
                <div className='cart-styles'>
                    <p className='cart-items-para'>{totalItems} Items Added</p>
                    <div className='cart-flex-styles'>
                        <p className='cart-heading-styles'>VIEW CART ₹{totalPrice}</p>
                        <Link to='/cart'>
                            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/ChatbotAssets/Checkout_Cart" className="image-styles" alt='cart-image'/>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RestaurantData;