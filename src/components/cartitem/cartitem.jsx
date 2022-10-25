import './cartitem.scss';

const CartItem = ({ cartitem }) => {
    const { imageUrl, name, price, quantity } = cartitem;

    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='item-detail'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity}X${price}</span>
            </div>
        </div>
    )
}

export default CartItem;