import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const [cart, setCart] = useCart();
    const navigate = useNavigate();

    // event handler
    const handleRemoveProduct = product => {
        // console.log(product);
        // parameter name is product..so pd.
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }

    return (
        <div className='shop-container'>
            <div className='review-items-container'>
                {
                    cart.map(product => <ReviewItem key={product._id} product={product}
                        handleRemoveProduct={handleRemoveProduct}></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    {/* <Link to="/inventory">
                        <button>Proceed Checkout</button>
                    </Link> */}

                    {/*---- using event handler(useNavigate) -----*/}
                    <button onClick={() => navigate('/shipment')}>Proceed Shipping</button>

                </Cart>
            </div>

        </div>
    );
};

export default Orders;