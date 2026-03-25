export const routes = {
    home: () => '/',

    auth: {
        root: () => '/auth',

        byMode: (mode: AuthMode) => `/auth/${mode}`,

        signIn: () => '/auth/sign-in',
        signUp: () => '/auth/sign-up',
    },
} as const;
