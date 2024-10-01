import { render, screen, fireEvent } from "@testing-library/react";
import { expect, describe, it } from "vitest";

import Login from "./Login";

describe("=== Test the Login Compnent ===", () => {

  it("renders the login form", () => {
    render(<Login />);
  
    expect(screen.getByTestId("login-form")).toBeInTheDocument();
    expect(screen.getByTestId("login-email")).toBeInTheDocument();
    expect(screen.getByTestId("login-password")).toBeInTheDocument();
    expect(screen.getByTestId("login-submit")).toBeInTheDocument();
    expect(screen.getByTestId("signup")).toBeInTheDocument();

  });

  it("states are being recorded correctly", () => {
    render(<Login />);
    const data = {
      email: "dzno23@gmail.com",
      password: "password",
    }
  
    const email = screen.getByTestId("login-email") as HTMLInputElement;
    const password = screen.getByTestId("login-password") as HTMLInputElement;
  
    fireEvent.change(email, { target: { value: "dzno23@gmail.com" } });
    fireEvent.change(password, { target: { value: "password" } });

    expect(email.value).toBe(data.email);
    expect(password.value).toBe(data.password);
  });

  it("should log in successfully when valid credentials are provided", async () => {
    render(<Login />);

    const emailInput = screen.getByTestId("login-email") as HTMLInputElement;
    const passwordInput = screen.getByTestId("login-password") as HTMLInputElement;
    const submitButton = screen.getByTestId("login-submit");

    fireEvent.change(emailInput, { target: { value: "emailteste@teste.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    fireEvent.click(submitButton);

    expect(window.location.pathname).toBe("/home");

  });
});
