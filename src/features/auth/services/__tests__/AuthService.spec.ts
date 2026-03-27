import { describe, it, expect, beforeEach } from 'vitest';

import AuthService from '../AuthService';
import StorageAuthRepository from '@/features/auth/api/FileAuthRepository';
import InMemoryFileStorage from '@/shared/libs/storages/InMemoryStorage';

describe('AuthService', () => {
    let service: AuthService;

    beforeEach(() => {
        const repository = new StorageAuthRepository(new InMemoryFileStorage());

        service = new AuthService(repository);
    });

    it('signs up and returns a User without password', async () => {
        const credentials: UserCredentials = { email: 'a@test.com', password: '123' };
        const user = await service.signUp(credentials);

        expect(user.email).toBe('a@test.com');
        expect((user as any).password).toBeUndefined();
    });

    it('signs in existing user', async () => {
        const credentials: UserCredentials = { email: 'b@test.com', password: '456' };

        await service.signUp(credentials);

        const signedIn = await service.signIn(credentials);

        expect(signedIn?.email).toBe('b@test.com');
    });

    it('returns null for sign-in with wrong password', async () => {
        const credentials: UserCredentials = { email: 'c@test.com', password: '789' };

        await service.signUp(credentials);

        const signedIn = await service.signIn({ email: 'c@test.com', password: 'wrong' });

        expect(signedIn).toBeNull();
    });
});