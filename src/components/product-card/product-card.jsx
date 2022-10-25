
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart-actions';
import { selectCartItems } from '../../store/cart/cart-selector';
import Button from '../button/button'
import './product-card.scss';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const addToCartHandler = () => dispatch(addItemToCart(cartItems, product));

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addToCartHandler}>Add to card</Button>
        </div>
    )
}

export default ProductCard;