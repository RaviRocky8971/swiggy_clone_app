// Home.js
import { useState, useEffect, useRef } from "react";
import MasterItems from "../masterItems";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BsFilterRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import TopRestaurants from "../TopRestaurants";
import FilterPopup from "../filterPopup";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { RxCross2 } from "react-icons/rx";
import Footer from "../footer";

const Home = () => {
    const { city_name, latitude, longitude } = useSelector(state => state.location);
    const { selectedfilterData } = useSelector(state => state.filter)
    const [mainItemsData, setMainItemsData] = useState([]);
    const [topRestaurantsData, setTopRestaurantsData] = useState([]);
    const [filterFlag, setFilterFlag] = useState(false);
    const [selectFilterData, setSelectFilterData] = useState([]);
    const scrollRefMain = useRef(null);
    const scrollRefRestaurants = useRef(null);
    const [cuisines, setcuisines] = useState("");
    const [sort, setsort] = useState("");
    const [rating, setrating] = useState("");
    const [type, settype] = useState("");
    const [priceBetween, setpriceBetween] = useState("");
    const [priceLow, setpriceLow] = useState("");

    const onFilterClick = () => {
        setFilterFlag(true);
    };

    const onRating = () => {
        setrating(prev => (prev === "4.0" ? "" : "4.0"))
    }

    const onType = () => {
        settype(prev => (prev === "Veg" ? "" : "Veg"))
    }

    const onPriceBetween = () => {
        setpriceBetween(prev => (prev === "300-600" ? "" : "300-600"))
    }

    const onPriceLow = () => {
        setpriceLow(prev => (prev === "299" ? "" : "299"))
    }

    useEffect(() => {
        if (selectedfilterData) {
            if (selectedfilterData.CUISINES?.length > 0) {
                const cuisinesString = selectedfilterData.CUISINES.join(',');
                setcuisines(cuisinesString);
            }
            const sortData = selectedfilterData.SORT?.[0] || "";
            const ratingData = selectedfilterData.RATINGS?.[0] || "";
            const typeData = selectedfilterData.VEGANDNONVEG?.[0] || "";
            setsort(sortData);
            setrating(ratingData);
            settype(typeData);
        }
    }, [selectedfilterData]);

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
                const apiUrl = `http://localhost:5000/api/topRestaurants?city=${city_name}&latitude=${latitude}&longitude=${longitude}&price=${priceBetween}&pricelow=${priceLow}`;
                const response = await fetch(apiUrl);
                const data = await response.json();
                setTopRestaurantsData(data);
            } catch (error) {
                console.error("Error fetching top restaurants:", error);
            }
        };
        getTopRestaurant();
    }, [city_name, latitude, longitude]);

    useEffect(() => {
        const fetchFilterData = async () => {
            try {
                const apiUrl = `http://localhost:5000/api/getFilterData?sort=${sort}&cuisine=${cuisines}&rating=${rating}&type=${type}&city=${city_name}&latitude=${latitude}&longitude=${longitude}`;
                const response = await fetch(apiUrl);
                const data = await response.json();
                setSelectFilterData(data);
            } catch (error) {
                console.error('Error fetching filter data:', error);
            }
        };
        fetchFilterData();
    }, [selectedfilterData, city_name, latitude, longitude, sort, cuisines, rating, type, priceBetween, priceLow]);

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

                <div className="filterButtons">
                    <button className="filter-button-styles" onClick={onFilterClick}>
                        Filters
                        <span className="filter-logo-styles ml-5"><BsFilterRight /></span>
                    </button>

                    <button className="filter-button-styles margin-styles">Fast Delivery</button>

                    <button className={`filter-button-styles margin-styles ${rating !== "" ? "active" : ""}`} id="foodRating" onClick={onRating}>
                        Ratings 4.0+ {rating !== "" && <RxCross2 />}
                    </button>
                    <button className={`filter-button-styles margin-styles ${type !== "" ? "active" : ""}`} id="foodType" onClick={onType}>
                        Pure Veg {type !== "" && <RxCross2 />}
                    </button>
                    <button className={`filter-button-styles margin-styles ${priceBetween === "300-600" ? "active" : ""}`} id="foodPriceBetween" onClick={onPriceBetween}>
                        Rs.300-Rs.600 {priceBetween === "300-600" && <RxCross2 />}
                    </button>
                    <button className={`filter-button-styles margin-styles ${priceLow === "299" ? "active" : ""}`} id="foodPriceLow" onClick={onPriceLow}>
                        Less than Rs.300 {priceLow === "299" && <RxCross2 />}
                    </button>
                </div>

                <div className="filter-restaurant">
                    {(selectFilterData && selectFilterData.length > 0 ? selectFilterData : topRestaurantsData).map((eachItem) => (
                        <TopRestaurants data={eachItem} key={eachItem._id} />
                    ))}
                </div>
            </div>

            {city_name && <hr className="break-styles" />}


            <div>
                <div className="footer-styles">
                    {<h3 className="section-heading-footer mr-3">For Better experience,download the Swiggy app now</h3>}
                    {<img className="logo-styles-app" src="/play_store.avif" alt="playstore-image"/>}
                    {<img className="logo-styles-app" src="/app_store.avif" alt="appstore-image" />}
                </div>

                <div className="footer-styles-footer">
                    <div>
                        <img src="/swiggy.png" alt="footer-swiggy-logo" className="logo-styles"/>
                        <p>2025 Swiggy Limited</p>
                    </div>
                    <Footer />
                </div>
            </div>

            {filterFlag && <FilterPopup onClose={() => setFilterFlag(false)} />}
        </div>
    );
};

export default Home;
