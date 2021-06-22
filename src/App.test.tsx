import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("app has header with its name", () => {
  render(<App />);

  const headingElement = screen.getByText(/Barhopping Hare/i);

  expect(headingElement).toBeInTheDocument();
});

test("app has a search form", () => {
  const searchForm = screen.getByRole("search", { name: /search form/i });
  expect(searchForm).toBeInTheDocument();
});

// test('app has a city input', () => {
//   const cityInput = screen.getByLabelText('City')
// })

// test('app has an input for the city', () => {
//   const cityInput = screen.getByRole('searchbox')
// })
// test('app has a choose next bar for me button', () => {})
// test('when you push the button with empty input it will need validation', () => {})
// test('when you enter the city it autocompletes', () => {})
// test('when you choose the autocompleted city and press search, result appears after request', () => {})
