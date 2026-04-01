import { describe, it, expect, vi, beforeEach } from 'vitest';

import AuthActionFactory from '../AuthActionFactory';

const signIn = vi.fn();
const signUp = vi.fn();
const authService: IAuthService = {
    signIn,
    signUp,
    signOut: vi.fn(),
}

describe('AuthActionFactory', () => {
    const setSession = vi.fn().mockResolvedValue(void (0));
    const redirect = vi.fn((dest: string) => {
        throw new Error(dest);
    });
    const factory = new AuthActionFactory({ authService, setSession, redirect });

    beforeEach(() => {
        vi.resetAllMocks();
    });

    it('should set session and redirect on successul sign in', async () => {
        const action = factory.createSignIn();
        const formData = new FormData();

        signIn.mockResolvedValue({ email: 'test@mail.com' });
        formData.set('email', 'test@mail.com');
        formData.set('password', '123');

        await expect(action(formData)).rejects.toThrow('/auth/success');

        expect(signIn).toHaveBeenCalled();
        expect(setSession).toHaveBeenCalled();
    });

    it('should set session and redirect on successul sign up', async () => {
        const action = factory.createSignUp();
        const formData = new FormData();

        signUp.mockResolvedValue({ email: 'test@mail.com' });
        formData.set('email', 'test@mail.com');
        formData.set('password', '123');

        await expect(action(formData)).rejects.toThrow('/auth/success');

        expect(signUp).toHaveBeenCalled();
        expect(setSession).toHaveBeenCalled();
    });

    it('should throw if credentials are missing', async () => {
        const action = factory.createSignIn();

        const formData = new FormData();

        await expect(action(formData)).rejects.toThrow(
            'Email and password are required'
        );
    });

    it('should throw if user is not found', async () => {
        const action = factory.createSignIn();

        const formData = new FormData();
        formData.set('email', 'test@mail.com');
        formData.set('password', '123');

        await expect(action(formData)).rejects.toThrow(
            'Invalid credentials'
        );
    });

    it('should throw if user is not created', async () => {
        const action = factory.createSignUp();

        const formData = new FormData();
        formData.set('email', 'test@mail.com');
        formData.set('password', '123');

        await expect(action(formData)).rejects.toThrow(
            'Invalid credentials'
        );
    });
});