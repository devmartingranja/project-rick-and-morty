"use client";
import { ICharacter } from "@/components/detailCharacter/DetailCharacter.utils";
import { PropsWithChildren, createContext, useContext, useState } from "react";

interface IState {
  listCharactersFavoritesProvider: ICharacter[];
  setListCharactersFavoritesProvider(list: ICharacter[]): void;
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
  const [listCharactersFavoritesProvider, setListCharactersFavoritesProvider] =
    useState<ICharacter[]>([]);

  return (
    <ThemeContext.Provider
      value={{
        listCharactersFavoritesProvider,
        setListCharactersFavoritesProvider,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default useContextProvider;
