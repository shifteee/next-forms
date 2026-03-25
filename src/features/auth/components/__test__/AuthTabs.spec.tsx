import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { AuthTabs } from "../AuthTabs";

describe("AuthTabs", () => {
    it("activates Sign In tab on /auth/sign-in", () => {
        const $form = render(<AuthTabs activeTab="sign-in" />);

        const tab = screen.getByRole("tab", { name: /sign in/i });

        expect(tab).toHaveAttribute("data-state", "active");
    });

    it("activates Sign Up tab on /auth/sign-up", () => {

        render(<AuthTabs activeTab="sign-up" />);

        const tab = screen.getByRole("tab", { name: /sign up/i });

        expect(tab).toHaveAttribute("data-state", "active");
    });
});