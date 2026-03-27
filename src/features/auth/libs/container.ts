import FileAuthRepository from '../api/FileAuthRepository';
import FileStorage from '@/shared/libs/storages/FileStorage';
import AuthService from '../services/AuthService';

export const createAuthContainer = (): IAuthContainer => {
    const repository = new FileAuthRepository(new FileStorage());
    const authService = new AuthService(repository);

    return {
        authService,
    };
};