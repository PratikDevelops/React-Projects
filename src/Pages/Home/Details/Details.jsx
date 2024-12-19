import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../../Context/Index';
import './Details.css';

function Details() {
  const { id } = useParams();
  const { recipeDetails, setRecipeDetails, addToFavorites } = useContext(GlobalContext);
  const navigate = useNavigate(); 

  useEffect(() => {
    async function getDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      setRecipeDetails(data.data.recipe);
    }
    getDetails();
  }, [id, setRecipeDetails]);

  const handleAddToFavorites = () => {
    if (recipeDetails) {
      addToFavorites(recipeDetails);
      navigate('/favourites');
    }
  };

  return (
    <div className="details-container">
      {recipeDetails ? (
        <div className="recipe-details">
          <h2 className="recipe-title">{recipeDetails.title}</h2>
          <img
            className="recipe-image"
            src={recipeDetails.image_url}
            alt={recipeDetails.title}
          />
          <p className="recipe-description">{recipeDetails.description}</p>
          <a
            className="recipe-link"
            href={recipeDetails.source_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Recipe
          </a>
          <br></br>
          <button className="add-to-favorites-btn" onClick={handleAddToFavorites}>
            Add to Favorites
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Details;
