import { useEffect, useState } from "react";
import Modal from 'bootstrap/js/dist/modal';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import FilterItems from "../filterItems";
import './index.css';
import { useDispatch, useSelector } from "react-redux";
import { setfilterData } from '../../slices/filterSlice';

const FilterPopup = ({ onClose }) => {
    const filterArray = [
        {
            "code": "SORT",
            "name": "Sort",
            "options": [
                {
                    "code": "RELEVANCE",
                    "name": "Relevance"
                },
                {
                    "code": "DELIVERYTIME",
                    "name": "Delivery Time"
                },
                {
                    "code": "RATING",
                    "name": "Rating"
                },
                {
                    "code": "LOWTOHIGH",
                    "name": "Low to High"
                },
                {
                    "code": "HIGHTOLOW",
                    "name": "High to Low"
                }
            ]
        },
        {
            "code": "DELIVERYTIME",
            "name": "Delivery Time",
            "options": [
                {
                    "code": "FASTDELIVERY",
                    "name": "Fast Delivery"
                }
            ]
        },
        {
            "code": "CUISINES",
            "name": "Cuisines",
            "options": [
                {
                    "code": "American",
                    "name": "American"
                },
                {
                    "code": "Andhra",
                    "name": "Andhra"
                },
                {
                    "code": "Arabian",
                    "name": "Arabian"
                },
                {
                    "code": "Asian",
                    "name": "Asian"
                },
                {
                    "code": "Bakery",
                    "name": "Bakery"
                },
                {
                    "code": "Barbecue",
                    "name": "Barbecue"
                },
                {
                    "code": "Bengali",
                    "name": "Bengali"
                },
                {
                    "code": "Beverages",
                    "name": "Beverages"
                },
                {
                    "code": "Biryani",
                    "name": "Biryani"
                },
                {
                    "code": "British",
                    "name": "British"
                },
                {
                    "code": "Burger",
                    "name": "Burger"
                },
                {
                    "code": "Burmese",
                    "name": "Burmese"
                },
                {
                    "code": "Cafe",
                    "name": "Cafe"
                },
                {
                    "code": "Cakes",
                    "name": "Cakes"
                },
                {
                    "code": "Chaat",
                    "name": "Chaat"
                },
                {
                    "code": "Chinese",
                    "name": "Chinese"
                },
                {
                    "code": "Coastal",
                    "name": "Coastal"
                },
                {
                    "code": "Continental",
                    "name": "Continental"
                },
                {
                    "code": "Desert",
                    "name": "Desert"
                },
                {
                    "code": "European",
                    "name": "European"
                },
                {
                    "code": "Fast Food",
                    "name": "Fast Food"
                },
                {
                    "code": "Grill",
                    "name": "Grill"
                },
                {
                    "code": "Haleem",
                    "name": "Haleem"
                },
                {
                    "code": "Healthy Food",
                    "name": "Healthy Food"
                },
                {
                    "code": "Home Food",
                    "name": "Home Food"
                },
                {
                    "code": "Hyderabadi",
                    "name": "Hyderabadi"
                },
                {
                    "code": "Ice Cream",
                    "name": "Ice Cream"
                },
                {
                    "code": "Indian",
                    "name": "Indian"
                },
                {
                    "code": "Italian",
                    "name": "Italian"
                },
                {
                    "code": "Jain",
                    "name": "Jain"
                },
                {
                    "code": "Juices",
                    "name": "Juices"
                },
                {
                    "code": "Kebabs",
                    "name": "Kebabs"
                },
                {
                    "code": "Kerala",
                    "name": "Kerala"
                },
                {
                    "code": "Korean",
                    "name": "Korean"
                },
                {
                    "code": "Mexican",
                    "name": "Mexican"
                },
                {
                    "code": "Milkshakes",
                    "name": "Milkshakes"
                },
                {
                    "code": "Momos",
                    "name": "Momos"
                },
                {
                    "code": "Mughlai",
                    "name": "Mughlai"
                },
                {
                    "code": "North Indian",
                    "name": "North Indian"
                },
                {
                    "code": "Oriya",
                    "name": "Oriya"
                },
                {
                    "code": "Paan",
                    "name": "Paan"
                },
                {
                    "code": "Pasta",
                    "name": "Pasta"
                },
                {
                    "code": "Pizzas",
                    "name": "Pizzas"
                },
                {
                    "code": "Punjabi",
                    "name": "Punjabi"
                },
                {
                    "code": "Rajasthani",
                    "name": "Rajasthani"
                },
                {
                    "code": "Rayalaseema",
                    "name": "Rayalaseema"
                },
                {
                    "code": "Rolls",
                    "name": "Rolls"
                },
                {
                    "code": "Salads",
                    "name": "Salads"
                },
                {
                    "code": "Seafood",
                    "name": "Seafood"
                },
                {
                    "code": "Snacks",
                    "name": "Snacks"
                },
                {
                    "code": "South Indian",
                    "name": "South Indian"
                },
                {
                    "code": "Street Food",
                    "name": "Street Food"
                },
                {
                    "code": "Sweets",
                    "name": "Sweets"
                },
                {
                    "code": "Telangana",
                    "name": "Telangana"
                },
                {
                    "code": "Thai",
                    "name": "Thai"
                },
                {
                    "code": "Thalis",
                    "name": "Thalis"
                },
                {
                    "code": "Tribal",
                    "name": "Tribal"
                },
                {
                    "code": "Dessert",
                    "name": "Dessert"
                },
                {
                    "code": "Paratha",
                    "name": "Paratha"
                },
                {
                    "code": "Pure Veg",
                    "name": "Pure Veg"
                },
                {
                    "code": "Sandwich",
                    "name": "Sandwich"
                },
                {
                    "code": "Shawarma",
                    "name": "Shawarma"
                },
                {
                    "code": "Snack",
                    "name": "Snack"
                }
            ]
        },
        {
            "code": "EXPLORE",
            "name": "Explore",
            "options": [
                {
                    "code": "NEWONSWIGGY",
                    "name": "New on Swiggy"
                }
            ]
        },
        {
            "code": "RATINGS",
            "name": "Ratings",
            "options": [
                {
                    "code": "4.5",
                    "name": "Rating 4.5+"
                },
                {
                    "code": "4.0",
                    "name": "Rating 4.0+"
                },
                {
                    "code": "3.5",
                    "name": "Rating 3.5+"
                }
            ]
        },
        {
            "code": "VEGANDNONVEG",
            "name": "Veg/Non Veg",
            "options": [
                {
                    "code": "Veg",
                    "name": "Pure Veg"
                },
                {
                    "code": "Non-Veg",
                    "name": "Non Veg"
                }
            ]
        }
    ];

    const dispatch = useDispatch();
    const persistedFilters = useSelector((state) => state.filter.filterData); // 👈 read from redux

    const [filterCodes, setFilterCodes] = useState(filterArray?.[0] || null);
    const [selectedFilters, setSelectedFilters] = useState(persistedFilters || {});
    const [applyFlag, setapplyFlag] = useState(false);

    const filterItems = (Item) => {
        const matchedItems = filterArray.find(eachItem => eachItem.code === Item);
        if (matchedItems) {
            setFilterCodes(matchedItems);
        }
    };

    const handleCheckboxChange = (filterCode, optionCode, isChecked) => {
        setapplyFlag(true);
        setSelectedFilters(prevFilters => {
            const prevSelected = prevFilters[filterCode] || [];
            const updatedSelected = isChecked
                ? [...prevSelected, optionCode]
                : prevSelected.filter(code => code !== optionCode);

            return {
                ...prevFilters,
                [filterCode]: updatedSelected
            };
        });
    };

    const handleApplyFilters = () => {
        dispatch(setfilterData({ filterData: selectedFilters }));

        const filterElement = document.getElementById('filterModalCenter');
        if (filterElement) {
            const modalInstance = Modal.getInstance(filterElement);
            modalInstance?.hide(); // ✅ close modal
        }
    };

    useEffect(() => {
        const filterElement = document.getElementById('filterModalCenter');
        if (filterElement) {
            const modal = new Modal(filterElement);
            modal.show();

            const handleHidden = () => {
                onClose();
            };

            filterElement.addEventListener('hidden.bs.modal', handleHidden);
            return () => {
                filterElement.removeEventListener('hidden.bs.modal', handleHidden);
            };
        }
    }, [onClose]);

    return (
        <div>
            <div className="modal fade" id="filterModalCenter" tabIndex="-1" aria-labelledby="filterModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="filterModalLabel">Filter</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="main-container">
                                <div>
                                    {filterArray.map((eachItem) => (
                                        <FilterItems
                                            filterData={eachItem}
                                            key={eachItem.code}
                                            filterOptionsData={filterItems}
                                        />
                                    ))}
                                </div>

                                <div className="checkbox-styles">
                                    {filterCodes?.options?.map((eachItem) => (
                                        <div key={eachItem.code} className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id={eachItem.code}
                                                checked={selectedFilters[filterCodes.code]?.includes(eachItem.code) || false}
                                                onChange={(e) =>
                                                    handleCheckboxChange(
                                                        filterCodes.code,
                                                        eachItem.code,
                                                        e.target.checked
                                                    )
                                                }
                                            />
                                            <label className="form-check-label" htmlFor={eachItem.code}>
                                                {eachItem.name}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {applyFlag === true && (
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleApplyFilters}>
                                    Apply Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterPopup;
