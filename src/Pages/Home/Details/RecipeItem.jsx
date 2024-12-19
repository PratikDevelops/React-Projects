import React from "react";
import "./RecipeItem.css";
import { Link} from "react-router-dom";
function RecipeItem({ item }) {
  const { title, image_url, publisher } = item;

  return (
    <>
      <div className="recipe-container">
        <div className="recipe-item">
          <img src={image_url} alt={title} className="recipe-item-image" />
          <h2 className="recipe-item-title">{title}</h2>
          <p className="recipe-item-publisher">
            Published by: <strong>{publisher}</strong>
          </p>
          <Link to={`/recipe-item/${item.id}`}>Recipe Details</Link>
        </div>
      </div>
    </>
  );
}

export default RecipeItem;
