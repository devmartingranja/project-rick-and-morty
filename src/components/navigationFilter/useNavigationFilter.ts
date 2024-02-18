import { useParams } from "next/navigation";
import { use, useEffect, useState } from "react";
import { ICharacter } from "../detailCharacter/DetailCharacter.utils";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { IResponse, getSortedListById, query } from "./NavigationFilter.utils";
import useContextProvider from "@/context/ContextProvider";

const useNavigationFilter = () => {
  const { id: idCharacterSelected } = useParams();
  const [listCharacters, setListCharacters] = useState<ICharacter[]>([]);
  const [listFavoritesCharacters, setListFavoritesCharacters] = useState<
    ICharacter[]
  >([]);
  const { setListCharactersFavoritesProvider } = useContextProvider();

  const { data, loading } = useQuery<IResponse>(query, {
    variables: { page: 1 },
  });

  useEffect(() => {
    if (data?.characters) setListCharacters(data.characters.results);
  }, [data]);

  useEffect(() => {
    setListCharactersFavoritesProvider(listFavoritesCharacters);
  }, [listFavoritesCharacters, setListCharactersFavoritesProvider]);

  const handlerAddFavorite = (id: number) => {
    const character = listCharacters.find((character) => character.id === id);
    if (character)
      setListFavoritesCharacters(
        getSortedListById([...listFavoritesCharacters, character])
      );

    setListCharacters(
      getSortedListById([
        ...listCharacters.filter((character) => character.id !== id),
      ])
    );
  };

  const handlerDeleteFavorite = (id: number) => {
    const character = listFavoritesCharacters.find(
      (character) => character.id === id
    );
    if (character)
      setListCharacters(getSortedListById([...listCharacters, character]));

    setListFavoritesCharacters(
      getSortedListById([
        ...listFavoritesCharacters.filter((character) => character.id !== id),
      ])
    );
  };

  return {
    loading,
    listCharacters,
    listFavoritesCharacters,
    idCharacterSelected,
    handlerAddFavorite,
    handlerDeleteFavorite,
  };
};

export default useNavigationFilter;
