import FileAuthRepository from '../api/FileAuthRepository';
import FileStorage from '@/shared/libs/storages/FileStorage';
import AuthService from '../services/AuthService';
import AuthFatory from '@/features/auth/libs/actions/AuthActionFactory';

export default function createAuthContainer(): IAuthContainer {
    const repository = new FileAuthRepository(new FileStorage());
    const authService = new AuthService(repository);
    const factory = new AuthFatory(authService);

    return {
        authService,
        signInAction: factory.create('signIn'),
        signUpAction: factory.create('signUp'),
    };
};