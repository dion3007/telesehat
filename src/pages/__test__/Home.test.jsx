import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../Home";

test("renders Home", () => {
  render(<Home />);
  const TitleElement = screen.getByText(/Tele Sehat/i);
  expect(TitleElement).toBeInTheDocument();
});
