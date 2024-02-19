import { gql } from "@apollo/client";
import { ICharacter } from "../detailCharacter/DetailCharacter.utils";

export const query = gql`
  query getCharacters(
    $page: Int!
    $filterName: String
    $filterSpecie: String
    $filterStatus: String
    $filterGender: String
  ) {
    characters(
      page: $page
      filter: {
        name: $filterName
        species: $filterSpecie
        status: $filterStatus
        gender: $filterGender
      }
    ) {
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

export const filterListCharacters = (
  list: ICharacter[],
  listComparator: ICharacter[]
) => {
  return list.filter((item) => {
    const encontrado = listComparator.find((elm) => elm.id === item.id);

    return !encontrado;
  });
};
