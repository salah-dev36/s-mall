import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategoriesArray = createSelector(
  [selectCategoryReducer],
  (categoriesPart) => categoriesPart.categories
);

export const categoriesSelector = createSelector(
  [selectCategoriesArray],
  (categories) =>
    categories.reduce((accumulator, category) => {
      const { title, items } = category;
      accumulator[title.toLowerCase()] = items;
      return accumulator;
    }, {})
);

export const loadingStateSelector = createSelector(
  [selectCategoryReducer],
  (categoriesPart) => categoriesPart.loading
);
