import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview-comp";
import Spinner from "../../components/spinner/spinner-comp";

import {
  categoriesSelector,
  loadingStateSelector,
} from "../../store/categories/category-selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(categoriesSelector);
  const loading = useSelector(loadingStateSelector);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
