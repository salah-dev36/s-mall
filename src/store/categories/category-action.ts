import { CATEGORIES_ACTION_TYPES, Category } from "./category-types";

import { Action, ActionWithPayload } from "../../utils/reducer/reducer-utils";

export type StartFetchingCategories = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>

export type FetchingCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>

export type FetchingCategoriesFailure = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>


export type CategoryAction = StartFetchingCategories | FetchingCategoriesSuccess
  | FetchingCategoriesFailure


  
export const startFetchingCategories = (): StartFetchingCategories => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
});

export const fetchingCategoriesSuccess = (categoriesArray: Category[]): FetchingCategoriesSuccess => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  payload: categoriesArray,
});

export const fetchingCategoriesFailure = (error: Error) => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  payload: error,
});
