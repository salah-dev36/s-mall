import React, { FC } from "react";

import { useNavigate } from "react-router-dom";

import "./directory-item-styles.scss";

import { DirectoryItemType } from "../directory/directory-comp";

export type DirectoryItemProps = {
  category: DirectoryItemType
}

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { title, imageUrl, size } = category;

  const navigate = useNavigate();

  const goToCategory = () => {
    navigate(`shop/${title}`);
  };

  return (
    <div onClick={goToCategory} className={`directory-item ${size}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body-container">
        <h2>{title.toUpperCase()}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
