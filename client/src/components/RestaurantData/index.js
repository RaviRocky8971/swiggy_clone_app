import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './index.css';
import RestaurantDetails from "../RestaurantDetails";
import OfferComponent from "../OfferComponents";
import { FaCircle, FaArrowUp, FaCaretDown } from "react-icons/fa";

const RestaurantData = () => {
    const { city_name: cityFromRedux } = useSelector(state => state.location);
    const { city_name, _id } = useParams();
    const [restaurantName, setRestaurantName] = useState("");
    const [restaurantData, setrestaurantData] = useState([]);
    const [isVeg, setIsVeg] = useState(true);
    const [isNonVeg, setIsNonVeg] = useState(false);
    const [bestseller, setBestseller] = useState(false);

    useEffect(() => {
        const getRestaurantName = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/getRestaurantName?id=${_id}`);
                const data = await response.json();
                setrestaurantData(data);
                setRestaurantName(data.name || "Unknown");
            } catch (err) {
                console.error("Error fetching restaurant name:", err);
            }
        };

        getRestaurantName();
    }, [city_name, _id]);

    useEffect(()=>{
        const fetchRestaurantData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/getRestaurantItems?restaurantId=${_id}&type=Veg`);
                const data = await response.json();
                console.log("Fetched restaurant data:", data);
                setrestaurantData(data);
            } catch (err) {
                console.error("Error fetching restaurant data:", err);
            }
        };

        fetchRestaurantData();
    },[]);



    return (
        <div>
            <div>
                <p className="restaurant-name-styles">
                    <span className="home-styles">Home / {cityFromRedux || city_name}</span>
                    <span className="name-styles"> / {restaurantName}</span>
                </p>
                <h1 className="restaurant-name-styles">{restaurantName}</h1>
                <RestaurantDetails RestaurantData={restaurantData} />
            </div>

            <div>
                <h1 className="restaurant-name-styles">Deals for You</h1>
                <OfferComponent />
            </div>

            {/* Independent Veg and Non-Veg Toggle Switches */}
            <div className="veg-nonveg-toggle-switches">
                {/* Veg Switch */}
                <label className="toggle-switch">
                    <input type="checkbox" checked={isVeg} onChange={() => setIsVeg(!isVeg)} aria-checked={isVeg} aria-label="Veg toggle"/>
                    <span className="slider veg"></span>
                    <span className="switch-label"><span className="switch-dot veg"></span>Veg</span>
                </label>
                {/* Non-Veg Switch */}
                <label className="toggle-switch">
                    <input type="checkbox" checked={isNonVeg} onChange={() => setIsNonVeg(!isNonVeg)} aria-checked={isNonVeg} aria-label="Non-Veg toggle"/>
                    <span className="slider nonveg"></span>
                    <span className="switch-label"><span className="switch-dot nonveg"></span>Non-Veg</span>
                </label>
            </div>
        </div>
    );
};

export default RestaurantData;
