import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button text="Test Button" />);
    expect(screen.getByText("Test Button")).toBeTruthy();
  });

  it("calls onClick when pressed", () => {
    const onClickMock = jest.fn();
    render(<Button text="Click Me" onClick={onClickMock} />);
    
    const button = screen.getByText("Click Me");
    fireEvent.click(button); // Use fireEvent.click for web
    
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
