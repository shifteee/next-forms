import { routes } from '@/shared/routes';

import SignInForm from '@/features/auth/components/SignInForm';
import SignUpForm from '@/features/auth/components/SignUpForm';

export default async function ({ params }: Pick<SignPagesProps, 'params'>) {
    const { mode } = await params;

    if (routes.auth.byMode(mode) === routes.auth.signIn()) {
        return <SignInForm />;
    }

    return <SignUpForm />;
}