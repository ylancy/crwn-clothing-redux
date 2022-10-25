import { useSelector } from 'react-redux';
import { selectCategories } from '../../store/categories/categories.selector';
import CategoryPreview from '../../components/categorypreview/categorypreview';
import './categories-preview.scss'

const CategoriesPreview = () => {
    const categories = useSelector(selectCategories);

    return (
        <div className='categories-preview-container'>
            {Object.keys(categories).map((title) => {
                const products = categories[title];
                return <CategoryPreview key={title} title={title} products={products} />
            })}
        </div>
    )
}

export default CategoriesPreview; 