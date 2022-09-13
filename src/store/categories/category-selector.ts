import { createSelector } from "reselect";

import { RootState } from "../store";
import { CategoriesState } from "./category-reducer";
import { CategoryMap } from "./category-types";

const selectCategoryReducer = (state: RootState): CategoriesState =>
  state.categories;

export const selectCategoriesArray = createSelector(
  [selectCategoryReducer],
  (categoriesPart) => categoriesPart.categories
);

export const categoriesSelector = createSelector(
  [selectCategoriesArray],
  (categories): CategoryMap =>
    categories.reduce((accumulator, category) => {
      const { title, items } = category;
      accumulator[title.toLowerCase()] = items;
      return accumulator;
    }, {} as CategoryMap)
);

export const loadingStateSelector = createSelector(
  [selectCategoryReducer],
  (categoriesPart) => categoriesPart.loading
);
