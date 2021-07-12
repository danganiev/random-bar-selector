import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "./App";

interface ChooseBody {
  city: string;
}

interface ChooseResponse {
  name: string;
  img: string;
}

const server = setupServer(
  rest.post<ChooseBody, ChooseResponse>("/choose", (req, res, ctx) => {
    return res(ctx.json({ name: "Big Bloody Bar", img: "" }));
  })
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("app has header with its name", () => {
  render(<App />);
  const headingElement = screen.getByText(/Barhopping Hare/i);

  expect(headingElement).toBeInTheDocument();
});

test("app has a search form", () => {
  render(<App />);
  const searchForm = screen.getByRole("search", {});
  expect(searchForm).toBeInTheDocument();
});

test(
  'when you push the button with empty input it will return "empty" ' +
    "validation error",
  async () => {
    act(() => {
      render(<App />);
      fireEvent.click(screen.getByRole("submit"));
    });
    await waitFor(() => screen.getByText("Please enter your city"));
  }
);
test("when you enter the city it autocompletes", () => {
  const app = render(<App />);
  const cities = app.container.querySelector("#cities");
  expect(cities).toBeInTheDocument();
});

test(
  "when you choose the autocompleted city and press search," +
    "results appear after request",
  async () => {
    act(() => {
      render(<App />);
    });
    const input = screen.getByLabelText("City");
    const button = screen.getByRole("submit");
    act(() => {
      fireEvent.change(input, { target: { value: "Kazan" } });
    });
    act(() => {
      fireEvent.click(button);
    });
    expect(button).toBeDisabled();
    await waitFor(() => screen.getByText("I am a bar"));
    expect(button).toBeEnabled();
    //todo: change to normal bar
  }
);

// test("bar search handles server error", () => {
// });
