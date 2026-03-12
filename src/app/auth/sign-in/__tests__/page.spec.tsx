import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import SignInPage from "../page";

vi.mock("@/features/auth/components/SingInForm", () => {
    return {
        default: () => <div data-testid="sign-in-form" />,
    }
});

describe("SignInPage", () => {
    it("renders SignInForm", () => {
        render(<SignInPage />);

        const form = screen.getByTestId("sign-in-form");

        expect(form).toBeInTheDocument();
    });
});