import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { expect, describe, it, vi } from "vitest";

import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

import * as loginRequest from "../services/LoginRequest";

describe("=== Test the Login Compnent ===", () => {

  it("renders the login form", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  
    expect(screen.getByTestId("login-form")).toBeInTheDocument();
    expect(screen.getByTestId("login-email")).toBeInTheDocument();
    expect(screen.getByTestId("login-password")).toBeInTheDocument();
    expect(screen.getByTestId("login-submit")).toBeInTheDocument();
    expect(screen.getByTestId("signup")).toBeInTheDocument();

  });

  it("states are being recorded correctly", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
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
    const mockLogin = vi.spyOn(loginRequest, "loginRequest").mockResolvedValue("token-jwt");

    const loginData = {
      email: 'emailteste@teste.com',
      password: '123456',
    }
    
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const emailInput = screen.getByTestId("login-email") as HTMLInputElement;
    const passwordInput = screen.getByTestId("login-password") as HTMLInputElement;
    const submitButton = screen.getByTestId("login-submit");

    fireEvent.change(emailInput, { target: { value: loginData.email } });
    fireEvent.change(passwordInput, { target: { value: loginData.password } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledOnce();
      expect(mockLogin).toHaveBeenCalledWith('/login/signin', loginData);
      expect(localStorage.getItem('token')).toBe('token-jwt');

    });

    await waitFor(() => {
      expect(window.location.pathname).toBe('/');
    });

    mockLogin.mockRestore();
    localStorage.clear();

  });

  it("should display an error message when invalid credentials are provided", async () => {
    const mockLogin = vi
      .spyOn(loginRequest, "loginRequest")
      .mockRejectedValue(new Error("Customer not found."));

    const loginData = {
      email: 'emailteste@teste.com.brd',
      password: '123456',
    }

    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const emailInput = screen.getByTestId("login-email") as HTMLInputElement;
    const passwordInput = screen.getByTestId("login-password") as HTMLInputElement;
    const submitButton = screen.getByTestId("login-submit");

    fireEvent.change(emailInput, { target: { value: loginData.email } });
    fireEvent.change(passwordInput, { target: { value: loginData.password } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledOnce();
      expect(mockLogin).toHaveBeenCalledWith('/login/signin', loginData);
      expect(localStorage.getItem('token')).toBe(null);
    });

    const errorMessage = await screen.getByTestId("wrong-login");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.textContent).toBe("Usuário ou senha incorretos.");

  });
});
