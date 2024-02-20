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
import Comments from "../comments/Comments";

const DetailCharacter = ({ id }: { id: string }) => {
  const {
    data: { character },
  } = useSuspenseQuery<IResponse>(query, { variables: { id } });

  const { listCharactersIdFavoritesProvider, listCommentsProvider } =
    useContextProvider();

  const isFavorite = listCharactersIdFavoritesProvider.some(
    (id) => id === Number(character.id)
  );
  const listCommentsProviderAux = listCommentsProvider.filter(
    (item) => item.id === Number(id)
  );

  return (
    <>
      <CardCharacterDetail {...character} isFavorite={isFavorite} />
      <div className="w-full my-10">
        <Comments id={Number(id)} listComments={listCommentsProviderAux} />
      </div>
    </>
  );
};

export default DetailCharacter;
