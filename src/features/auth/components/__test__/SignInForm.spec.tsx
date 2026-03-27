import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

import SignInForm from '../SingInForm';

const signIn = vi.fn();
const authService: IAuthService = {
    signIn,
    signUp: () => Promise.resolve({ email: 'testemail' }),
    signOut: () => Promise.resolve(),
};

describe('SignInPage', () => {
    it("renders login, password inputs and submit button", async () => {
        const SignInPage = await SignInForm();

        render(SignInPage);

        const header = screen.getByRole('heading', {
            name: /login to your account/i,
        });

        const description = screen.getByText(
            /enter your email below to login to your account/i
        );
        const loginInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const button = screen.getByRole('button', {
            name: /sign in/i,
        });

        expect(header).toBeInTheDocument();
        expect(description).toBeInTheDocument();

        expect(loginInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();

        expect(button).toBeInTheDocument();
    });
});