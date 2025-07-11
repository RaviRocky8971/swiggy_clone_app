import { useState } from 'react';
import './index.css';
import { IoStarSharp } from "react-icons/io5";


const ItemTypes = ({ category, items }) => {
    const [isOpen, setIsOpen] = useState(true); // Initially expanded

    const toggleOpen = () => {
        setIsOpen(prev => !prev);
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
                        {items.map(item => (
                            <div key={item._id}>
                                <div className="menu-item">
                                    <div>
                                        <img src={item.type_image} alt='image-type'className='image-type-styles'/>
                                        <h5 className='heading-styles'>{item.name}</h5>
                                        <p>{item.description}</p>
                                        <p className='price-styles'>₹{item.price}</p>
                                        <div className='rating-styles'>
                                            <IoStarSharp className='star-styles'/>
                                            <p>{item.rating}({item.reviews})</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={item.image} alt={item.name} className="menu-img" />
                                    </div>
                                </div>
                                <hr className="break-styles" />
                    </div>
                        ))}
                        {/* {<hr className="break-styles" />} */}
                    </div>
                )}
            </div>
            <div className="category-break-styles">

            </div>
        </div>
    );
};

export default ItemTypes;


