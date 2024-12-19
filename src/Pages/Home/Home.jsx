import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/Index';
import RecipeItem from './Details/RecipeItem';

function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) {
    
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item, index) => (
          <RecipeItem key={index} item={item} /> 
        ))
      ) : (
        <div>
          <h1>Nothing to show. Please search something</h1>
        </div>
      )}
    </div>
  );
}

export default Home;
