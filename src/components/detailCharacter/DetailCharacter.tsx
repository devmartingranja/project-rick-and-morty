"use client";

// Libs
import React from "react";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

// Components
import CardCharacterDetail from "../ui/cardCharacterDetail/CardCharacterDetail";

// Hooks
import useContextProvider from "@/context/ContextProvider";

// Utils
import { query, IResponse } from "./DetailCharacter.utils";

const DetailCharacter = ({ id }: { id: string }) => {
  const {
    data: { character },
  } = useSuspenseQuery<IResponse>(query, { variables: { id } });
  const { listCharactersIdFavoritesProvider } = useContextProvider();
  const isFavorite = listCharactersIdFavoritesProvider.some(
    (id) => id === Number(character.id)
  );

  return <CardCharacterDetail {...character} isFavorite={isFavorite} />;
};

export default DetailCharacter;
