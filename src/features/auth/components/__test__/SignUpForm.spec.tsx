import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SignUpForm from "../SignUpForm";

describe("SignUpForm", () => {
    it("renders sign up form with inputs and button", () => {
        render(<SignUpForm />);

        const header = screen.getByRole("heading", {
            name: /create an account/i,
        });

        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);

        const button = screen.getByRole("button", {
            name: /sign up/i,
        });

        expect(header).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });
});