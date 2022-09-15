import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryItem } from "../../store/categories/category-types";

import Button from "../button/button-comp";
import ProductCard from "../product-card/product-card-comp";

import "./category-preview-styles.scss";

export type CategoryPreviewProps = {
  products: CategoryItem[];
  title: string
}

const CategoryPreview: FC<CategoryPreviewProps> = ({ products, title }) => {
  const navigate = useNavigate();
  const goToCategory = () => {
    navigate(`${title}`);
  };

  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>

      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <div className="see-more">
        <Button children="See More..." onClick={goToCategory} />
      </div>
    </div>
  );
};

export default CategoryPreview;
