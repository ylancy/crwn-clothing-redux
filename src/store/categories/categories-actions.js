import { creationAction } from "../../untilities/reducer/reducer.util";

export const CATEGORIES_ACTION_TYPES = {
    SET_CATEGORIES: 'SET_CATEGORIES',
}

export const setCategories = (categories) => creationAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);