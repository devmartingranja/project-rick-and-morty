import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import NavigationFilter from "./NavigationFilter";
import useNavigationFilter from "./useNavigationFilter";

jest.mock("./useNavigationFilter");

jest.mock("next/navigation", () => ({
  __esModule: true,
  useParams: jest.fn(() => ({ id: "1" })),
}));

jest.mock("@apollo/experimental-nextjs-app-support/ssr", () => ({
  __esModule: true,
  useSuspenseQuery: jest.fn(), //
}));

describe("NavigationFilter Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders NavigationFilter component with loading", () => {
    (useNavigationFilter as jest.Mock).mockReturnValue({
      loading: true,
      idCharacterSelected: "",
      listCharacters: [{}, {}, {}],
      handlerSearch: jest.fn(),
      handlerAddFavorite: jest.fn(),
    });

    render(<NavigationFilter />);
    expect(screen.getByTestId("test-id-loading")).toBeInTheDocument();
  });

  test("renders NavigationFilter component without loading", () => {
    (useNavigationFilter as jest.Mock).mockReturnValue({
      loading: false,
      idCharacterSelected: "",
      listCharacters: [
        { id: 1, name: "Character 1", isFavorite: true },
        { id: 1, name: "Character 2", isFavorite: false },
      ],
      handlerSearch: jest.fn(),
      handlerAddFavorite: jest.fn(),
    });

    render(<NavigationFilter />);

    expect(screen.queryByTestId("test-id-loading")).not.toBeInTheDocument();
    expect(screen.getByText("STARRED CHARACTERS (1)")).toBeInTheDocument();
    expect(screen.getByText("CHARACTERS (1)")).toBeInTheDocument();
  });
});
