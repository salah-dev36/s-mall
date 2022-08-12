import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { startFetchingCategories } from "../../store/categories/category-action";

import CategoriesPreview from "../categories-preview/categories-preview-comp";
import Category from "../category/category-comp";
import "./shop-styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startFetchingCategories());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
