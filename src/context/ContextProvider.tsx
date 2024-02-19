"use client";
import { PropsWithChildren, createContext, useContext, useState } from "react";

interface IState {
  listCharactersIdFavoritesProvider: Number[];
  setListCharactersIdFavoritesProvider(list: Number[]): void;
  filterSelectProvider: { [key: string]: string };
  setFilterSelectProvider: (data: { [key: string]: string }) => void;
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

  return (
    <ThemeContext.Provider
      value={{
        listCharactersIdFavoritesProvider,
        setListCharactersIdFavoritesProvider,
        filterSelectProvider,
        setFilterSelectProvider,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default useContextProvider;
