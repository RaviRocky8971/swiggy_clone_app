import React, { useState, useEffect } from 'react';
import './index.css';

const Location = ({ closePopup }) => {
    const [search, setSearch] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [recent, setRecent] = useState(() =>
        JSON.parse(localStorage.getItem('recentLocations')) || []
    );

    const closePopupData = ()=>{
        const data = {
            "flag" : 'false',   
            "location" : ""
        }
        closePopup(data);
    }

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (search.length < 3) {
                setSuggestions([]);
                return;
            }

            try {
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                        search
                    )}`
                );
                const data = await response.json();
                setSuggestions(data);
            } catch (error) {
                console.error('Error fetching suggestions:', error);
            }
        };

        const debounceTimeout = setTimeout(fetchSuggestions, 300);
        return () => clearTimeout(debounceTimeout);
    }, [search]);

    const handleSelectLocation = (location) => {
        const updated = [location, ...recent.filter((item) => item.place_id !== location.place_id)];
        const sliced = updated.slice(0, 4); // Keep only 4 recent searches
        setRecent(sliced);
        localStorage.setItem('recentLocations', JSON.stringify(sliced));
        setSearch('');
        setSuggestions([]);
        const data = {
            "flag" : 'false',
            "location" : location
        }
        closePopup(data);
    };

    const getCurrentLocation = () => {
        if (!navigator.geolocation) {
            alert('Geolocation not supported');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const coords = `${position.coords.latitude}, ${position.coords.longitude}`;
                const current = { display_name: coords, place_id: 'current-location' };
                handleSelectLocation(current);
            },
            () => {
                alert('Failed to fetch location');
            }
        );
    };

    return (
        <div className="location-overlay">
            <div className="location-popup slide-in">
                <button className="close-btn" onClick={closePopupData}>
                    ✕
                </button>

                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search for area, street name.."
                    className="location-search"
                />

                <div className="get-current" onClick={getCurrentLocation}>
                    📍 <strong>Get current location</strong>
                    <div className="subtext">Using GPS</div>
                </div>

                {search && suggestions.length > 0 && (
                    <div className="suggestion-list">
                        {suggestions.map((item) => (
                            <div
                                key={item.place_id}
                                className="suggestion-item"
                                onClick={() => handleSelectLocation(item)}
                            >
                                <strong>{item.display_name.split(',')[0]}</strong>
                                <div className="subtext">
                                    {item.display_name.split(',').slice(1).join(',')}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {!search && recent.length > 0 && (
                    <>
                        <h5 className="recent-heading">RECENT SEARCHES</h5>
                        <div className="recent-list">
                            {recent.map((item) => (
                                <div
                                    key={item.place_id}
                                    className="suggestion-item"
                                    onClick={() => handleSelectLocation(item)}
                                >
                                    <strong>{item.display_name?.split(',')[0] || 'Unknown'}</strong>
                                    <div className="subtext">
                                        {item.display_name?.split(',').slice(1).join(',') || ''}
                                    </div>

                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Location;
