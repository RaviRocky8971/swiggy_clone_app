import './index.css';
import { useSelector } from 'react-redux';

const CartItems = () => {
    const cartData = useSelector((state) => state.cart.cartData);
    console.log(cartData);
    return (
        <div className="cart-items-container">
            <h2>Cart Items</h2>
        </div>
    );
};

export default CartItems;
