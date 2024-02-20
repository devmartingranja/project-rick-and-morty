import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import DetailCharacter from "@/components/detailCharacter/DetailCharacter";
import { MockedResponse } from "@apollo/client/testing";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

jest.mock("@/context/ContextProvider", () => ({
  __esModule: true,
  default: () => ({
    listCharactersIdFavoritesProvider: [1, 2, 3],
  }),
}));

jest.mock("@apollo/experimental-nextjs-app-support/ssr", () => ({
  __esModule: true,
  useSuspenseQuery: jest.fn(), //
}));

const mocks: readonly MockedResponse<any, any>[] | undefined = [];

describe("Header", () => {
  test("renders character details correctly", () => {
    const characterData = {
      id: "1",
      name: "Test Character",
      species: "species",
      status: "status",
      gender: "gender",
    };

    (useSuspenseQuery as jest.Mock).mockReturnValue({
      data: { character: characterData },
    });

    const { getByText } = render(<DetailCharacter id="1" />);
    expect(getByText(characterData.name)).toBeInTheDocument();
    expect(getByText(characterData.species)).toBeInTheDocument();
    expect(getByText(characterData.status)).toBeInTheDocument();
    expect(getByText(characterData.gender)).toBeInTheDocument();
  });

  test("marks character as favorite if it's in the list of favorites", () => {
    const characterData = {
      id: 1,
      name: "Test Character",
      species: "species",
      gender: "gender",
      isFavorite: true,
    };

    (useSuspenseQuery as jest.Mock).mockReturnValue({
      data: { character: characterData },
    });

    const { getByTestId } = render(<DetailCharacter id="1" />);
    const img = getByTestId("test-id-img-favorite") as HTMLImageElement;
    expect(img).toHaveAttribute("src", "/icons/heart_active.svg");
  });
});
