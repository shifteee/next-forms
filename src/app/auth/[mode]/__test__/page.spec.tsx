import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import AuthPage from '../page';

describe("AuthPage", () => {
    it("renders sign-in form", async () => {
        const ui = await AuthPage({
            params: Promise.resolve({ mode: "sign-in" }),
        });

        render(ui);

        expect(
            screen.getByText(/login to your account/i)
        ).toBeInTheDocument();
    });

    it("renders sign-up form", async () => {
        const ui = await AuthPage({
            params: Promise.resolve({ mode: "sign-up" }),
        });

        render(ui);

        expect(
            screen.getByText(/create an account/i)
        ).toBeInTheDocument();
    });
});