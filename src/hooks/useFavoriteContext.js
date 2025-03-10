import { FavoritesContext } from "contexts/Favorites";
import { useContext } from "react";

export function useFavoriteContext() {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  function addFavorite(newItem) {
    const exists = favorites.some((item) => item.id === newItem.id);

    // se nao existir na lista: adiciona na lista. Se houver: remove da lista (abaixo do if)
    if(!exists){
        return setFavorites([...favorites, newItem]);
    }

    const listWithoutItem = favorites.filter(f => f.id!==newItem.id);
    return setFavorites(listWithoutItem);
  }

  return {
    favorites, 
    addFavorite
  }
}
