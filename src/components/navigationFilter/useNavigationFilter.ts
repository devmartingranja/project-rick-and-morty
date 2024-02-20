import { useParams } from "next/navigation";
import { use, useEffect, useState } from "react";
import { ICharacter } from "../detailCharacter/DetailCharacter.utils";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { IResponse, query } from "./NavigationFilter.utils";
import useContextProvider from "@/context/ContextProvider";
import { NetworkStatus } from "@apollo/client";

const useNavigationFilter = () => {
  const { id: idCharacterSelected } = useParams();
  const [listCharacters, setListCharacters] = useState<ICharacter[]>([]);
  const {
    listCharactersIdFavoritesProvider,
    setListCharactersIdFavoritesProvider,
    setFilterSelectProvider,
  } = useContextProvider();

  const { data, loading, refetch } = useQuery<IResponse>(query, {
    variables: { page: 1 },
  });

  useEffect(() => {
    if (data?.characters) {
      const listResult = data.characters.results.map((character) => {
        return {
          ...character,
          isFavorite: listCharactersIdFavoritesProvider.includes(
            Number(character.id)
          ),
        };
      });
      setListCharacters(listResult);
    }
  }, [data, listCharactersIdFavoritesProvider]);

  const handlerAddFavorite = (id: number, isFavorite: boolean) => {
    const listCharactersAux = listCharacters.map((character) => {
      if (Number(character.id) === id) return { ...character, isFavorite };
      return character;
    });

    setListCharactersIdFavoritesProvider(
      listCharactersAux
        .filter((item) => item.isFavorite)
        .map((item) => Number(item.id))
    );

    setListCharacters(listCharactersAux);
  };

  const handlerSearch = (data: {}) => {
    setFilterSelectProvider(data);
    refetch({ page: 1, ...data });
  };

  return {
    loading,
    listCharacters,
    idCharacterSelected,
    handlerSearch,
    handlerAddFavorite,
  };
};

export default useNavigationFilter;
