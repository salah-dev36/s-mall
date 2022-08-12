import CATEGORIES_ACTION_TYPES from "./category-types";

export const setCategories = (categoriesArray) => ({
  type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
  payload: categoriesArray,
});

export const startFetchingCategories = () => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
});

export const fetchingCategoriesSuccess = (categoriesArray) => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  payload: categoriesArray,
});

export const fetchingCategoriesFailure = (error) => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  payload: error,
});
