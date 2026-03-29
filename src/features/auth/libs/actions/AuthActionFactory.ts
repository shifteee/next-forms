import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { SESSION_KEY } from '@/features/auth/static/consts';

export default class AuthActionFactory {
    private readonly handlers: Record<AuthActionType, AuthHandler>;

    constructor(private readonly authService: IAuthService) {
        this.handlers = {
            signIn: (c) => this.authService.signIn(c),
            signUp: (c) => this.authService.signUp(c),
        };
    }

    create(type: AuthActionType) {
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

            const cookieStore = await cookies();

            cookieStore.set(SESSION_KEY, JSON.stringify(user), {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
            });

            redirect('/dashboard');
        };
    }
}