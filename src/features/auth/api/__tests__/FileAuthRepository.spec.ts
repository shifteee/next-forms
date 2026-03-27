import { describe, it, expect, beforeEach } from 'vitest';

import FileAuthRepository from '../FileAuthRepository';
import InMemoryFileStorage from '@/shared/libs/storages/InMemoryStorage';

describe('FileAuthRepository', () => {
    let storage: IStorage;
    let repository: IAuthRepository;

    beforeEach(() => {
        storage = new InMemoryFileStorage();
        repository = new FileAuthRepository(storage);
    });

    it('creates a user', async () => {
        await repository.createUser({
            email: 'test@test.com',
            password: '123',
        });

        const user = await repository.findUser('test@test.com');

        expect(user).not.toBeNull();
        expect(user?.email).toBe('test@test.com');
    });

    it('returns null if user does not exist', async () => {
        const user = await repository.findUser('missing@test.com');

        expect(user).toBeNull();
    });
});