import { gql } from "@apollo/client";

export const query = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      species
      image
      gender
      species
      status
    }
  }
`;

export interface IResponse {
  character: ICharacter;
}

export interface ICharacter {
  id: number;
  name: string;
  species: string;
  image: string;
  gender: string;
  status: string;
  isFavorite?: boolean;
}
