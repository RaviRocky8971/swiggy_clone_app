// Home.js
import { useState, useEffect, useRef } from "react";
import MasterItems from "../masterItems";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BsFilterRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import TopRestaurants from "../TopRestaurants";
import FilterPopup from "../filterPopup";

import "./index.css";

const Home = () => {
    const { city_name, latitude, longitude } = useSelector(state => state.location);
    const {selectedfilterData} = useSelector(state=> state.filter)
    const [mainItemsData, setMainItemsData] = useState([]);
    const [topRestaurantsData, setTopRestaurantsData] = useState([]);
    const [filterFlag, setFilterFlag] = useState(false);
    const scrollRefMain = useRef(null);
    const scrollRefRestaurants = useRef(null);

    const onFilterClick = () => {
        setFilterFlag(true);
    };

    useEffect(() => {
        const fetchMasterItems = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/masterItems");
                const result = await response.json();
                const itemsMain = result.map(item => ({
                    _id: item._id,
                    itemCode: item.item_code,
                    image: item.image,
                }));
                setMainItemsData(itemsMain);
            } catch (error) {
                console.error("Error fetching master items:", error);
            }
        };
        fetchMasterItems();
    }, []);

    useEffect(() => {
        const getTopRestaurant = async () => {
            if (!city_name || !latitude || !longitude) return;
            try {
                const apiUrl = `http://localhost:5000/api/topRestaurants?city=${city_name}&latitude=${latitude}&longitude=${longitude}`;
                const response = await fetch(apiUrl);
                const data = await response.json();
                setTopRestaurantsData(data);
            } catch (error) {
                console.error("Error fetching top restaurants:", error);
            }
        };

        getTopRestaurant();
    }, [city_name, latitude, longitude]);

    useEffect(()=>{
        console.log(selectedfilterData);
    },[selectedfilterData])


    

    const scrollLeft = (ref) => {
        ref.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = (ref) => {
        ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div>
            <div className="home-container">
                <div className="arrow-styles">
                    <h3 className="section-heading">What's on your mind?</h3>
                    <div>
                        <button className="scroll-btn left" onClick={() => scrollLeft(scrollRefMain)}><FaArrowLeft /></button>
                        <button className="scroll-btn right" onClick={() => scrollRight(scrollRefMain)}><FaArrowRight /></button>
                    </div>
                </div>
                <div className="scroll-wrapper">
                    <div className="item-scroll-container" ref={scrollRefMain}>
                        {mainItemsData.map((eachItem) => (
                            <MasterItems ItemsData={eachItem} key={eachItem._id} />
                        ))}
                    </div>
                </div>
            </div>

            {city_name && <hr className="break-styles" />}

            <div className="home-container">
                <div className="arrow-styles">
                    {city_name && <h3 className="section-heading">Top restaurant chains in {city_name}</h3>}
                    {city_name &&
                        <div>
                            <button className="scroll-btn left" onClick={() => scrollLeft(scrollRefRestaurants)}><FaArrowLeft /></button>
                            <button className="scroll-btn right" onClick={() => scrollRight(scrollRefRestaurants)}><FaArrowRight /></button>
                        </div>
                    }
                </div>
                <div className="scroll-wrapper">
                    <div className="item-scroll-container" ref={scrollRefRestaurants}>
                        {topRestaurantsData.map((eachItem) => (
                            <TopRestaurants data={eachItem} key={eachItem._id} />
                        ))}
                    </div>
                </div>
            </div>

            {city_name && <hr className="break-styles" />}

            <div className="home-container">
                <div className="arrow-styles">
                    {city_name && <h3 className="section-heading">Restaurants with online food delivery in {city_name}</h3>}
                </div>

                <div>
                    <button className="filter-button-styles" onClick={onFilterClick}>
                        Filters 
                        <span className="filter-logo-styles ml-5" onClick={onFilterClick}>
                            <BsFilterRight />
                        </span>
                    </button>
                </div>

                <div className="scroll-wrapper">
                    <div className="item-scroll-container" ref={scrollRefRestaurants}>
                        {topRestaurantsData.map((eachItem) => (
                            <TopRestaurants data={eachItem} key={eachItem._id} />
                        ))}
                    </div>
                </div>
            </div>

            {filterFlag && <FilterPopup onClose={() => setFilterFlag(false)} />}
        </div>
    );
};

export default Home;
