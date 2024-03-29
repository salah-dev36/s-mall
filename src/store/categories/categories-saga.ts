import { all, call, put, takeLatest } from "typed-redux-saga/macro";

import { getCategoriesAndDocs } from "../../utils/firebase/firebase-utils";

import {CATEGORIES_ACTION_TYPES} from "./category-types";
import {
  fetchingCategoriesSuccess,
  fetchingCategoriesFailure,
} from "./category-action";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield* call(getCategoriesAndDocs);
    yield* put(fetchingCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchingCategoriesFailure(error as Error));
  }
}

export function* onCategoriesFetching() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield* all([call(onCategoriesFetching)]);
}
