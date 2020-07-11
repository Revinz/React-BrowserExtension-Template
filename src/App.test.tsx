import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import "expect-puppeteer";

describe("App", () => {
  it("should show 'learn react", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
