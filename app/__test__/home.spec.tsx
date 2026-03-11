import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../page";

describe("Home page", () => {
    it("renders root container", () => {
        render(<Home />);

        const root = screen.getByTestId("home-root");

        expect(root).toBeInTheDocument();
    });
});