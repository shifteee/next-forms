'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { createAuthContainer } from '@/features/auth/libs/container';
import { SESSION_KEY } from '@/features/auth/static/consts';

export async function signInAction(formData: FormData): Promise<void> {
    const email = String(formData.get('email') ?? '');
    const password = String(formData.get('password') ?? '');

    if (!email || !password) {
        throw new Error('Email and password are required');
    }

    const { authService } = createAuthContainer();
    const user = await authService.signIn({ email, password });

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
}