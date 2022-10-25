import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCategories } from '../../store/categories/categories-actions';
import { getCategoriesAndDoc } from '../../untilities/firebase/firebase';
import CategoriesPreview from '../categories-preview/categories-preview';
import Category from '../../routes/category/category';
import './shop.scss';

const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDoc();
            dispatch(setCategories(categoryMap));
        };

        getCategoriesMap();
    }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':title' element={<Category />} />
        </Routes>

    )
}

export default Shop;