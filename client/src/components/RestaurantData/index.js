import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './index.css'
import RestaurantDetails from "../RestaurantDetails";

const RestaurantData = () => {
    const { city_name: cityFromRedux } = useSelector(state => state.location);
    const { city_name, _id } = useParams();
    const [restaurantName, setRestaurantName] = useState("");
    const [restaurantData,setrestaurantData] = useState([]);

    useEffect(() => {
        const getRestaurantName = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/getRestaurantName?id=${_id}`);
                const data = await response.json();
                setrestaurantData(data);
                setRestaurantName(data.name || "Unknown");
                console.log(data);
            } catch (err) {
                console.error("Error fetching restaurant name:", err);
            }
        };

        getRestaurantName();
    }, [city_name, _id]);

    return (
        <div>
            <p><span className="home-styles">Home / {cityFromRedux || city_name}</span><span className="name-styles">/ {restaurantName}</span></p>  
            <h1>{restaurantName}</h1>
            <div>
                <RestaurantDetails RestaurantData={restaurantData}/>
            </div>
        </div>
    );
};

export default RestaurantData;
