import { describe, it, expect, vi } from "vitest";

const redirectMock = vi.fn();

vi.mock("next/navigation", () => ({
    redirect: redirectMock,
}));

describe("Home", () => {
    it("redirects to /auth/sign-in", async () => {
        const { default: Home } = await import("../page");

        Home();

        expect(redirectMock).toHaveBeenCalledWith("/auth/sign-in");
    });
});