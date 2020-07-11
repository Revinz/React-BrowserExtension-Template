import "expect-puppeteer";
import React from "react";
import { render } from "@testing-library/react";
import "expect-puppeteer";
import HelloWorld from "./HelloWorld";

describe("HelloWorld", () => {
  it("should show 'HelloWorld'", () => {
    const { getByText } = render(<HelloWorld />);
    const linkElement = getByText(/Hello World/i);
    expect(linkElement).toBeInTheDocument();
  });
});
