import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest'

import SignInClientForm from '../SignInClientForm';

describe('SignInClientForm', () => {
    it('should disable button when fields are empty', () => {
        render(<SignInClientForm />);

        const button = screen.getByRole('button', { name: /sign in/i });

        expect(button).toBeDisabled();
    });

    it('should enable button when both fields are filled', async () => {
        const user = userEvent.setup();
        render(<SignInClientForm />);

        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const button = screen.getByRole('button', { name: /sign in/i });

        await user.type(emailInput, 'test@mail.com');
        await user.type(passwordInput, '123456');

        expect(button).toBeEnabled();
    });
});