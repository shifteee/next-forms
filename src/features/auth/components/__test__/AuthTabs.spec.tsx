import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AuthTabs } from "../AuthTabs";

describe("AuthTabs component", () => {
    it("renders Sign In and Sign Up tabs", () => {
        render(<AuthTabs />);

        // Check that Sign In tab is visible
        expect(screen.getByRole("tab", { name: /sign in/i })).toBeInTheDocument();

        // Check that Sign Up tab is visible
        expect(screen.getByRole("tab", { name: /sign up/i })).toBeInTheDocument();
    });
});