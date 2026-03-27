import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { AuthTabs } from '../AuthTabs';

describe("AuthTabs", () => {
    it("activates Sign In tab on /auth/sign-in", async () => {
        const TabsComponent = await AuthTabs({ activeTab: 'sign-in' });

        render(TabsComponent);
        const tab = screen.getByRole('tab', { name: /sign in/i });

        expect(tab).toHaveAttribute("data-state", "active");
    });

    it("activates Sign Up tab on /auth/sign-up", async () => {
        const TabsComponent = await AuthTabs({ activeTab: 'sign-up' });

        render(TabsComponent);
        const tab = screen.getByRole('tab', { name: /sign up/i });

        expect(tab).toHaveAttribute("data-state", "active");
    });
});