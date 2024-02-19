"use client";

// Components
import CardCharacter from "../ui/cardCharacter/CardCharacter";
import Search from "../ui/search/Search";
import ListCharacters from "./components/ListCharacters";

// Hooks
import useNavigationFilter from "./useNavigationFilter";

const NavigationFilter = () => {
  const {
    loading,
    idCharacterSelected,
    listCharacters,
    handlerSearch,
    handlerAddFavorite,
  } = useNavigationFilter();

  const listFavoritesCharacters = listCharacters.filter(
    (character) => character.isFavorite
  );
  const listNotFavoritesCharacters = listCharacters.filter(
    (character) => !character.isFavorite
  );

  if (loading) return <p>Loading...</p>;

  return (
    <section className="mt-10 mx-6 mb-3 ">
      <h2 className="font-bold text-2xl mb-6 ">Rick and Morty list</h2>
      <div className="w-full mb-4">
        <Search onSearch={handlerSearch} />
      </div>

      <ListCharacters
        idSelected={Number(idCharacterSelected)}
        list={listFavoritesCharacters}
        title=" STARRED CHARACTERS"
        onAddFavorite={handlerAddFavorite}
      />

      <ListCharacters
        idSelected={Number(idCharacterSelected)}
        list={listNotFavoritesCharacters}
        title="CHARACTERS"
        onAddFavorite={handlerAddFavorite}
      />
    </section>
  );
};

export default NavigationFilter;
