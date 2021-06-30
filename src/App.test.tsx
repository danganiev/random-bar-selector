import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  return render(<App />);
});

test("app has header with its name", () => {
  const headingElement = screen.getByText(/Barhopping Hare/i);

  expect(headingElement).toBeInTheDocument();
});

test("app has a search form", () => {
  const searchForm = screen.getByRole("search", {});
  expect(searchForm).toBeInTheDocument();
});

test("app has a city input", () => {
  const cityInput = screen.getByLabelText("City");
  expect(cityInput).toBeInTheDocument();
});

test("app has a choose next bar for me button", () => {
  const nextBarButton = screen.getByRole("button");
  expect(nextBarButton).toBeInTheDocument();
});

test(
  'when you push the button with empty input it will return "empty" ' +
    "validation error",
  () => {}
);
// test('when you enter the city it autocompletes', () => {})
// test('when you choose the autocompleted city and press search, result appears after request', () => {})
