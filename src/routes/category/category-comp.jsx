import React, { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card-comp";
import Spinner from "../../components/spinner/spinner-comp";

import {
  categoriesSelector,
  loadingStateSelector,
} from "../../store/categories/category-selector";

import "./category-styles.scss";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(categoriesSelector);
  const loading = useSelector(loadingStateSelector);
  const [products, SetProducts] = useState([]);

  useEffect(() => {
    SetProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {loading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
