import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { AuthTabs } from "../AuthTabs";

const mockUsePathname = vi.fn();

vi.mock("next/navigation", () => ({
    usePathname: () => mockUsePathname(),
}));

describe("AuthTabs", () => {
    it("activates Sign In tab on /auth/sign-in", () => {
        mockUsePathname.mockReturnValue("/auth/sign-in");

        render(<AuthTabs />);

        const tab = screen.getByRole("tab", { name: /sign in/i });

        expect(tab).toHaveAttribute("data-state", "active");
    });

    it("activates Sign Up tab on /auth/sign-up", () => {
        mockUsePathname.mockReturnValue("/auth/sign-up");

        render(<AuthTabs />);

        const tab = screen.getByRole("tab", { name: /sign up/i });

        expect(tab).toHaveAttribute("data-state", "active");
    });
});