import { useNavigate } from 'react-router-dom';
import './category-item.scss';

const CategoryItem = ({ category }) => {
    const { title, imageUrl } = category;
    const route = `shop/${title}`;
    const navigate = useNavigate();

    const navigateHandler = () => navigate(route)

    return (
        <div className='category-container'>
            <div className='background-image'
                style={{ backgroundImage: `url(${imageUrl})`, }}
            />
            <div className='category-body-container' onClick={navigateHandler}>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>


        </div>
    )
}

export default CategoryItem;