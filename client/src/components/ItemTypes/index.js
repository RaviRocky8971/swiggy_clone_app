import { useState, useEffect } from 'react';
import './index.css';
import { IoStarSharp } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, updateCartItem } from '../../slices/cartSlice';

const ItemTypes = ({ category, items }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleOpen = () => setIsOpen(prev => !prev);

    const dispatch = useDispatch();
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({});
    const cartData = useSelector((state) => state.cart.cartData);

    const updatedPrice = selectedItem
        ? selectedItem.price + Object.values(selectedOptions).reduce((sum, price) => sum + price, 0)
        : 0;

    // Function to get cart count for an item
    const getCartCount = (itemId) => {
        const cartItem = cartData.find(item => item.id === itemId);
        return cartItem ? cartItem.count : 0;
    };

    const handleOptionChange = (optionGroupName, option, checked) => {
        const optionKey = `${optionGroupName}-${option.name}`;
        setSelectedOptions(prev => {
            const newOptions = { ...prev };
            if (checked) {
                newOptions[optionKey] = option.price;
            } else {
                delete newOptions[optionKey];
            }
            return newOptions;
        });
    };

    const openCustomization = (item) => {
        setSelectedItem(item);
        console.log(item);
        setSelectedOptions({});
    };

    const onAddItemData = () => {
        if (!selectedItem) return;

        const selectedOptionsArray = Object.entries(selectedOptions).map(([key, price]) => ({
            optionKey: key,
            price,
        }));

        const item = {
            name: selectedItem.name,
            basePrice: selectedItem.price,
            customOptions: selectedOptionsArray,
            id: selectedItem._id,
            totalPrice: updatedPrice,
            count: 1,
        };

        dispatch(addToCart(item));
        setSelectedItem(null);
        setSelectedOptions({});
    };

    const incrementItem = (item) => {
        const currentCount = getCartCount(item._id);
        dispatch(updateCartItem({ id: item._id, count: currentCount + 1 }));
    };

    const decrementItem = (item) => {
        const currentCount = getCartCount(item._id);
        if (currentCount <= 0) return;
        dispatch(updateCartItem({ id: item._id, count: currentCount - 1 }));
    };

    return (
        <div>
            <div className="category-section">
                <div className='category-styles' onClick={toggleOpen} style={{ cursor: "pointer" }}>
                    <h2>{category}</h2>
                    <span className="collapse-icon">{isOpen ? '▲' : '▼'}</span>
                </div>

                {isOpen && (
                    <div className="items-list">
                        {items.map(item => {
                            const cartCount = getCartCount(item._id);
                            return (
                                <div key={item._id}>
                                    <div className="menu-item">
                                        <div>
                                            <img src={item.type_image} alt='type' className='image-type-styles' />
                                            <h5 className='heading-styles'>{item.name}</h5>
                                            <p>{item.description}</p>
                                            <p className='price-styles'>₹{item.price}</p>
                                            <div className='rating-styles'>
                                                <IoStarSharp className='star-styles' />
                                                <p>{item.rating} ({item.reviews})</p>
                                            </div>
                                        </div>

                                        <div>
                                            <img src={item.image} alt={item.name} className="menu-img" />
                                            {cartCount > 0 ? (
                                                <div className="quantity-controller">
                                                    <button onClick={() => decrementItem(item)} className="qty-btn">-</button>
                                                    <span className="qty-count">{cartCount}</span>
                                                    <button onClick={() => incrementItem(item)} className="qty-btn">+</button>
                                                </div>
                                            ) : (
                                                <button className='adding-btn-styles' onClick={() => openCustomization(item)} data-bs-toggle="modal" data-bs-target="#myModal">
                                                    ADD
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    <hr className="break-styles" />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Modal */}
            <div className="modal fade" id="myModal" tabIndex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content modal-color">
                        <div className="modal-header">
                            <h5 className="modal-title" id="myModalLabel">
                                {selectedItem?.name} - ₹{updatedPrice}
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <h5 className='custamize-text'>Customize as per your taste</h5>

                        <div className="modal-body" style={{ maxHeight: "400px", overflowY: "auto" }}>
                            {selectedItem ? (
                                <>
                                    {selectedItem.customizationOptions?.map((optionGroup, idx) => (
                                        <div key={idx}>
                                            <h6 className='mt-2'>{optionGroup.name || 'Options'}</h6>
                                            <div className='cust-border-styles'>
                                                {optionGroup.options?.map((eachOption, subIdx) => {
                                                    const optionKey = `${optionGroup.name}-${eachOption.name}`;
                                                    return (
                                                        <div key={subIdx} className='custmize-styles'>
                                                            <div className='sub-flex-styles'>
                                                                <img src={selectedItem.type_image} alt={selectedItem.name} className="type_image_styles" />
                                                                <p className='para-styles'>{eachOption.name}</p>
                                                            </div>
                                                            <div className='sub-flex-styles'>
                                                                <span>₹</span>
                                                                <p>{eachOption.price}</p>
                                                                <input
                                                                    type='checkbox'
                                                                    className='checkbox-styles para-styles'
                                                                    checked={!!selectedOptions[optionKey]}
                                                                    onChange={(e) => handleOptionChange(optionGroup.name, eachOption, e.target.checked)}
                                                                />
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <p>No item selected.</p>
                            )}
                        </div>

                        <div className="modal-footer footer-styles-main">
                            <p className="total-price">₹{updatedPrice}</p>
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={onAddItemData}
                                data-bs-dismiss="modal"
                                disabled={!selectedItem}
                            >
                                Add Item to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemTypes;
