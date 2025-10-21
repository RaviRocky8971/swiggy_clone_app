import './index.css';
import { useSelector } from 'react-redux';

const CartItems = () => {
    const cartData = useSelector((state) => state.cart.cartData);
    const restaurantName = useSelector((state) => state.cart.restaurantName);
 
    return (
        <div className="cart-items-container">
            <h2>Cart Items</h2>
            {restaurantName && <h3>From: {restaurantName}</h3>}
            {/* Render cart items below */}
            <ul>
                {cartData.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.count} x ₹{item.basePrice} = ₹{item.totalPrice}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartItems;
