import { cookies } from 'next/headers';
import { SESSION_KEY } from '@/features/auth/static/consts';

export default async function setSession(user: User): Promise<void> {
    const cookieStore = await cookies();

    cookieStore.set(SESSION_KEY, JSON.stringify(user), {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
    });
}
