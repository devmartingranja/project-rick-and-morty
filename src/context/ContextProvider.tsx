"use client";
import { IItemComment } from "@/components/comments/components/ItemComment.utils";
import { PropsWithChildren, createContext, useContext, useState } from "react";

interface IState {
  listCharactersIdFavoritesProvider: Number[];
  setListCharactersIdFavoritesProvider(list: Number[]): void;

  filterSelectProvider: { [key: string]: string };
  setFilterSelectProvider: (data: { [key: string]: string }) => void;

  listCommentsProvider: IItemComment[];
  setListCommentsProvider(list: IItemComment[]): void;
}

const ThemeContext = createContext<IState | null>(null);

const useContextProvider = (): IState => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Please use ThemeProvider in parent component");
  }

  return context;
};

export const ContextProvider = (props: PropsWithChildren) => {
  const [
    listCharactersIdFavoritesProvider,
    setListCharactersIdFavoritesProvider,
  ] = useState<Number[]>([]);

  const [filterSelectProvider, setFilterSelectProvider] = useState<{
    [key: string]: string;
  }>({});

  const [listCommentsProvider, setListCommentsProvider] = useState<
    IItemComment[]
  >([]);

  return (
    <ThemeContext.Provider
      value={{
        listCharactersIdFavoritesProvider,
        setListCharactersIdFavoritesProvider,
        filterSelectProvider,
        setFilterSelectProvider,
        listCommentsProvider,
        setListCommentsProvider,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default useContextProvider;
