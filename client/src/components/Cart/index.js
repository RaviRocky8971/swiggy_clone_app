import CartItems from '../CartItems';
import './index.css';

const Cart = () => {
    return (
        <div className="cart-page-layout">
            {/* Left: Checkout section */}
            <div className="main-checkout-styles">
                <div className="check-out-styles d-flex justify-content-between align-items-center">
                    <div>
                        <h4>Account</h4>
                        <p>To place your order now, log in to your existing account or sign up</p>
                        <div className="mt-2">
                            <button className="btn btn-outline-primary me-2">Have an account? LOG IN</button>
                            <button className="btn btn-outline-success">New to Swiggy? SIGN UP</button>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"
                            className="login-checkout-img"
                            alt="Login illustration"
                        />
                    </div>
                </div>

                <div className="check-out-styles mt-3">
                    <h5>Delivery Address</h5>
                    <p>(Add delivery form here)</p>
                </div>

                <div className="check-out-styles mt-3">
                    <h5>Payment</h5>
                    <p>(Add payment methods here)</p>
                </div>
            </div>

            <div className="cart-items-wrapper mt-3">
                <CartItems />
            </div>
        </div>
    );
};

export default Cart;
