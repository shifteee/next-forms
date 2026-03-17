import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import SignUpPage from "../page";

vi.mock("@/features/auth/components/SignUpForm", () => ({
    default: () => <div data-testid="sign-up-form" />,
}));

describe("SignUpPage", () => {
    it("renders SignUpForm", () => {
        render(<SignUpPage />);

        expect(screen.getByTestId("sign-up-form")).toBeInTheDocument();
    });
});