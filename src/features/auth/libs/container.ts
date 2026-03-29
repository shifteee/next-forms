import FileAuthRepository from '../api/FileAuthRepository';
import FileStorage from '@/shared/libs/storages/FileStorage';
import AuthService from '../services/AuthService';
import AuthFatory from '@/features/auth/libs/actions/AuthActionFactory';
import setSession from '@/shared/libs/setSession';
import redirect from '@/shared/libs/redirect';

export default function createAuthContainer(): IAuthContainer {
    const repository = new FileAuthRepository(new FileStorage());
    const authService = new AuthService(repository);
    const factory = new AuthFatory({
        authService,
        setSession,
        redirect,
    });

    return {
        authService,
        signInAction: factory.createSignIn(),
        signUpAction: factory.createSignUp(),
    };
};