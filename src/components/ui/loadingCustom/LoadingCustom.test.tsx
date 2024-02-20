import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LoadingCustom from "@/components/ui/loadingCustom/LoadingCustom";

describe("Header", () => {
  test("renders logo", () => {
    render(<LoadingCustom />);
    const logoElement = screen.getByTestId("test-id-loading");
    expect(logoElement).toBeInTheDocument();
  });
});
