import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SignUpClientForm from '../SignUpClientForm';

describe('SignUpClientForm', () => {
    it('should render inputs and submit button', () => {
        render(<SignUpClientForm />);

        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /sign up/i })
        ).toBeInTheDocument();
    });

    it('should disable submit button when fields are empty', () => {
        render(<SignUpClientForm />);

        const button = screen.getByRole('button', { name: /sign up/i });

        expect(button).toBeDisabled();
    });

    it('should enable button when both fields are filled', async () => {
        const user = userEvent.setup();
        render(<SignUpClientForm />);

        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const button = screen.getByRole('button', { name: /sign up/i });

        await user.type(emailInput, 'test@mail.com');
        await user.type(passwordInput, '123456');

        expect(button).toBeEnabled();
    });

    it('should stay disabled if only one field is filled', async () => {
        const user = userEvent.setup();
        render(<SignUpClientForm />);

        const emailInput = screen.getByLabelText(/email/i);
        const button = screen.getByRole('button', { name: /sign up/i });

        await user.type(emailInput, 'test@mail.com');

        expect(button).toBeDisabled();
    });
});