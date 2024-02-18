import { gql } from "@apollo/client";
import { ICharacter } from "../detailCharacter/DetailCharacter.utils";

export const query = gql`
  query getCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        species
        image
        gender
        species
        type
      }
    }
  }
`;

export interface IResponse {
  characters: {
    info: {
      count: number;
      pages: number;
      next: number | null;
      prev: number | null;
    };
    results: ICharacter[];
  };
}

export const getSortedListById = (array: ICharacter[]) => {
  return array.sort(function (a, b) {
    return a.id - b.id;
  });
};
