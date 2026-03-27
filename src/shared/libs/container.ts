import { createAuthContainer } from '@/features/auth/libs/container';

export const createAppContainer = (): IAppContainer => {
    const auth = createAuthContainer();

    return {
        auth,
    };
};