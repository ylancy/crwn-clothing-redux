import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card';
import './categorypreview.scss';

const CategoryPreview = ({ title, products }) => {
    return (
        <div className='category-preview-container'>
            <Link to={title} className='title' >{title.toUpperCase()}</Link>
            <div className='preview'>
                {products.filter((product, idx) => idx < 4).map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
        </div>
    )
}

export default CategoryPreview;