"use client";

// Libs
import React from "react";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

// Components
import CardCharacterDetail from "../ui/cardCharacterDetail/CardCharacterDetail";

// Context
import useContextProvider from "@/context/ContextProvider";

// Utils
import { query, IResponse } from "./DetailCharacter.utils";

const DetailCharacter = ({ id }: { id: string }) => {
  const {
    data: { character },
  } = useSuspenseQuery<IResponse>(query, { variables: { id } });
  const { listCharactersFavoritesProvider } = useContextProvider();
  const isFavorite = listCharactersFavoritesProvider.some(
    (characterFavorite) => characterFavorite.id === character.id
  );

  return <CardCharacterDetail {...character} isFavorite={isFavorite} />;
};

export default DetailCharacter;
