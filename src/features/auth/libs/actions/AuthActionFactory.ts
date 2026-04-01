declare type AuthFactoryDeps = {
    authService: IAuthService,
    setSession: (user: User) => Promise<void>;
    redirect: (path: string) => never;
};

declare type AuthActionType = 'signIn' | 'signUp';


export default class AuthActionFactory {
    private readonly authService: IAuthService;
    private readonly setSession: (user: User) => Promise<void>;
    private readonly redirect: (path: string) => never;
    private readonly handlers: Record<AuthActionType, AuthHandler>;

    constructor(deps: AuthFactoryDeps) {
        this.authService = deps.authService;
        this.setSession = deps.setSession;
        this.redirect = deps.redirect;
        this.handlers = {
            signIn: (c) => this.authService.signIn(c),
            signUp: (c) => this.authService.signUp(c),
        };
    }

    createSignIn() {
        return this.create('signIn');
    }

    createSignUp() {
        return this.create('signUp');
    }

    private create(type: AuthActionType) {
        const handler = this.handlers[type];

        if (!handler) {
            throw new Error(`Unknown auth action type: ${type}`);
        }

        return async (formData: FormData): Promise<void> => {
            const email = String(formData.get('email') ?? '');
            const password = String(formData.get('password') ?? '');

            if (!email || !password) {
                throw new Error('Email and password are required');
            }

            const user = await handler({ email, password });

            if (!user) {
                throw new Error('Invalid credentials');
            }

            await this.setSession(user);

            this.redirect('/auth/success');
        };
    }
}