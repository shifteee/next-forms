'use server';

import createAuthContainer from '@/features/auth/libs/container';

export default async function signIn(formData: FormData): Promise<void> {
    const { signInAction } = createAuthContainer();

    return signInAction(formData);
}
