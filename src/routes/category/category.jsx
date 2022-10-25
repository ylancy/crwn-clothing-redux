import { useSelector } from 'react-redux';
import { selectCategories } from '../../store/categories/categories.selector';
import { useParams } from "react-router-dom";
import ProductCard from '../../components/product-card/product-card';
import './category.scss'

const Category = () => {
    const categories = useSelector(selectCategories);
    const { title } = useParams();
    const products = categories[title] || [];

    return (
        <div>
            <h2 className="pro-title">{title.toUpperCase()}</h2>
            <div className="products">
                {products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>

        </div>
    )
}

export default Category;