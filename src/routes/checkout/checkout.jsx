import { useSelector } from 'react-redux';
import { selectCartItems, selectTotal } from '../../store/cart/cart-selector';
import CheckoutItem from "../../components/checkout-item/checkout-item";
import './checkout.scss';

const Checkout = () => {
    const cartitems = useSelector(selectCartItems);
    const total = useSelector(selectTotal);

    return (
        <div className="checkout-container">
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartitems.map((cartitem) => <CheckoutItem key={cartitems.id} cartitem={cartitem} />)}
            <span className="total">Total:${total}</span>
        </div>
    )
}

export default Checkout;