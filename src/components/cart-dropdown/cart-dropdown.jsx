import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart-selector";
import { useNavigate } from "react-router-dom";
import CartItem from "../cartitem/cartitem";
import Button from "../button/button";
import './cart-dropdown.scss';

const CartDropdown = () => {
    const cartitems = useSelector(selectCartItems);
    const navigate = useNavigate();
    const checkoutHandler = () => navigate('/checkout');

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartitems.map((cartitem) => <CartItem key={cartitem.id} cartitem={cartitem} />)}
            </div>
            <Button onClick={checkoutHandler}>GO TO CHECKOUT</Button>
        </div>

    )
}

export default CartDropdown;