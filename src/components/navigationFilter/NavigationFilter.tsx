"use client";

// Components
import CardCharacter from "../ui/cardCharacter/CardCharacter";

// Hooks
import useNavigationFilter from "./useNavigationFilter";

const NavigationFilter = () => {
  const {
    loading,
    idCharacterSelected,
    listCharacters,
    listFavoritesCharacters,
    handlerAddFavorite,
    handlerDeleteFavorite,
  } = useNavigationFilter();

  if (loading) return <p>Loading...</p>;

  return (
    <section className="mt-10 mx-6 mb-3 ">
      <h2 className="font-bold text-2xl mb-6 ">Rick and Morty list</h2>
      <input className="w-full mb-4" type="text" placeholder="Search" />

      {listFavoritesCharacters.length > 0 && (
        <>
          <h3 className="py-4 border-b-2 text-xs font-bold">
            STARRED CHARACTERS ({listFavoritesCharacters.length})
          </h3>
          <article>
            {listFavoritesCharacters.map((character, id) => (
              <CardCharacter
                key={id}
                {...character}
                isSelected={
                  Number(idCharacterSelected) === Number(character.id)
                }
                isFavorite
                onDeleteFavorite={handlerDeleteFavorite}
              />
            ))}
          </article>
        </>
      )}

      {listCharacters.length > 0 && (
        <>
          <h3 className="py-4 border-b-2 text-xs font-bold">
            CHARACTERS ({listCharacters.length})
          </h3>
          <article>
            {listCharacters.map((character, id) => (
              <CardCharacter
                key={id}
                {...character}
                isSelected={
                  Number(idCharacterSelected) === Number(character.id)
                }
                onAddFavorite={handlerAddFavorite}
              />
            ))}
          </article>
        </>
      )}
    </section>
  );
};

export default NavigationFilter;
