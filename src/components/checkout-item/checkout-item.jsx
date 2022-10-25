import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart-actions'
import { selectCartItems } from '../../store/cart/cart-selector';
import './checkout-item.scss';

const CheckoutItem = ({ cartitem }) => {
    const { imageUrl, name, quantity, price } = cartitem;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const addItem = () => dispatch(addItemToCart(cartItems, cartitem));
    const removeItem = () => dispatch(removeItemFromCart(cartItems, cartitem));
    const clearItem = () => dispatch(clearItemFromCart(cartItems, cartitem));
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeItem}>&#10094;</div>
                <div className="value">{quantity}</div>
                <div className="arrow" onClick={addItem}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={clearItem}>&#10005;</div>

        </div>
    )
}

export default CheckoutItem;