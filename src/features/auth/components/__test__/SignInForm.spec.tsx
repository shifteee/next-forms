
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SignInPage from "../SingInForm";

describe("SignInPage", () => {
    it("renders login, password inputs and submit button", () => {
        render(<SignInPage />);

        const header = screen.getByRole("heading", {
            name: /login to your account/i,
        });

        const description = screen.getByText(
            /enter your email below to login to your account/i
        );

        const loginInput = screen.getByLabelText(/login/i);
        const passwordInput = screen.getByLabelText(/password/i);

        const button = screen.getByRole("button", {
            name: /sign in/i,
        });

        expect(header).toBeInTheDocument();
        expect(description).toBeInTheDocument();

        expect(loginInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();

        expect(button).toBeInTheDocument();

    });
});