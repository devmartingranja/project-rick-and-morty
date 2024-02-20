import { render, screen } from "@testing-library/react";
import DetailCharacter from "@/components/detailCharacter/DetailCharacter";

describe("Header", () => {
  test("renders logo", () => {
    render(<DetailCharacter id="123" />);
    const logoElement = screen.getByAltText("Image user");
    expect(logoElement).toBeInTheDocument();
  });
});
