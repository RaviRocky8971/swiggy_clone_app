import { Link } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PiSuitcaseSimple } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import { useState } from 'react';
import Location from '../../location';
import { FiChevronDown } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux';
import { setLocationData } from '../../locationSlice';

const Header = () => {
    const dispatch = useDispatch();
    // const location = useSelector(state =>state.location);

    const [clickLocation, setclickLocation] = useState(false);
    const [locationname, setlocationname] = useState("");
    const [lat, setlat] = useState('');
    const [lon, setlon] = useState('');
    const onClickLocation = () => {
        setclickLocation(true);
    }
    const closeElement = (Item) => {
        if (Item) {
            console.log(Item);
            setclickLocation(Item.flag);
            setlocationname(Item.location.name);
            setlat(Item.location.lat);
            setlon(Item.location.lon);
            dispatch(setLocationData({
                city_name: Item.location.name,
                latitude: Item.location.lat,
                longitude: Item.location.lon
            }));

        }
    }
    return (
        <>
            <nav className="nav-container px-4 py-3 bg-light">
                <div className='location-left-styles'>
                    <img src="/swiggy.png" alt="Swiggy logo" className="logo-styles" />
                    <div className='location-styles'>
                        <button className='button-styles' onClick={onClickLocation}>
                            <h5 className='location-header-styles'>Other</h5>
                        </button>
                    </div>
                    {locationname === "" ?
                        <div>
                            <FiChevronDown className="down-arrow" />
                        </div> :
                        <div></div>
                    }
                    <div className='location-styles'>
                        <h5 className='location-header-styles'>{locationname}</h5>
                    </div>
                    {locationname ?
                        <div>
                            <FiChevronDown className="down-arrow" />
                        </div> :
                        <div></div>
                    }
                </div>
                <div className="nav-links">
                    <Link to="/swiggycorporate" className="nav-item-styles">
                        <PiSuitcaseSimple className="nav-icon" />
                        Swiggy Corporate
                    </Link>
                    <Link to="/search" className="nav-item-styles">
                        <CiSearch className="nav-icon" />
                        Search
                    </Link>
                    <Link to="/offers" className="nav-item-styles">
                        <BiSolidOffer className="nav-icon" />
                        Offers
                    </Link>
                    <Link to="/help" className="nav-item-styles">
                        <IoIosHelpCircleOutline className="nav-icon" />
                        Help
                    </Link>
                    <Link to="/signin" className="nav-item-styles">
                        <CiLogin className="nav-icon" />
                        Sign In
                    </Link>
                    <Link to="/cart" className="nav-item-styles">
                        <FaCartArrowDown className="nav-icon" />
                        Cart
                    </Link>
                </div>
            </nav>
            {clickLocation === true && (
                <Location closePopup={closeElement} />
            )}
        </>
    );
};

export default Header;
