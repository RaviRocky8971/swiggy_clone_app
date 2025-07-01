import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import "./index.css";

const offers = [
    {
        id: 1,
        tag: "DEAL OF DAY",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/deal-of-day",
        title: "Items At ₹59",
        subTitle: "ON SELECT ITEMS |"
    },
    {
        id: 2,
        tag: "%",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic",
        title: "Buy 2 Get 1 Free",
        subTitle: "USE BUY2GET1"
    },
    {
        id: 3,
        tag: "%",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/deal-of-day",
        title: "50% Off",
        subTitle: "USE FOODIE50"
    },
    {
        id: 4,
        tag: "%",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/merch_bau/locked-badge.png",
        title: "Free Delivery",
        subTitle: "ON ORDERS ABOVE ₹149"
    }
];

const OfferComponent = () => {
    const scrollRef = useRef(null);

    const handleScroll = (direction) => {
        const scrollContainer = scrollRef.current;
        const scrollAmount = 300;
        if (scrollContainer) {
            scrollContainer.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="offers-wrapper">
            <div className="offers-header">
                <h3>Deals for you</h3>
                <div className="arrow-controls">
                    <button className="arrow-btn" onClick={() => handleScroll("left")}><FaArrowLeft /></button>
                    <button className="arrow-btn" onClick={() => handleScroll("right")}><FaArrowRight /></button>
                </div>
            </div>
            <div className="offers-scroll" ref={scrollRef}>
                {offers.map((offer) => (
                    <div className="offer-card" key={offer.id}>
                        <img className="offer-image" src={offer.img} alt="deal_image" />
                        <div className="offer-details">
                            <div className="offer-title">{offer.title}</div>
                            <div className="offer-subtitle">{offer.subTitle}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OfferComponent;
