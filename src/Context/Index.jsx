import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchparams, setSearchParams] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); 
  const [recipeList, setRecipe] = useState(null);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favorites, setFavorites] = useState([]); 

  async function handleSubmit(event) {
    event.preventDefault();
    setError(""); 
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchparams}`
      );
      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipe(data?.data?.recipes); 
      } else {
        setRecipe([]); 
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setSearchParams("");
    }
  }

  const addToFavorites = (recipe) => {
    setFavorites((prevFavorites) => [...prevFavorites, recipe]);
  };

  return (
    <GlobalContext.Provider
      value={{
        searchparams,
        loading,
        recipeList,
        error,
        setSearchParams,
        handleSubmit,
        recipeDetails,
        setRecipeDetails,
        favorites,
        addToFavorites
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
