import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setCartOpen } from '../../store/cart/cart-actions';
import { selectCount, selectCartOpen } from '../../store/cart/cart-selector';
import './cart-icon.scss';

const CartIcon = () => {
    const count = useSelector(selectCount);
    const isCartOpen = useSelector(selectCartOpen);
    const dispatch = useDispatch();
    const toggleIsCartOpen = () => dispatch(setCartOpen(!isCartOpen));

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <span className='item-count'>{count}</span>
        </div>
    )
}

export default CartIcon;