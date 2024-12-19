import React, { useContext } from 'react';
import { GlobalContext } from '../../../Context/Index';

function Favourites() {
  const { favorites } = useContext(GlobalContext);

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet</p>
      ) : (
        <ul>
          {favorites.map((recipe, index) => (
            <li key={index}>
              <h3>{recipe.title}</h3>
              <img src={recipe.image_url} alt={recipe.title} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favourites;
