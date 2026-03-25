import { use } from 'react';

import SignInForm from '@/features/auth/components/SingInForm';
import SignUpForm from '@/features/auth/components/SignUpForm';
import { routes } from '@/shared/routes';

export default function ({ params }: Pick<SignPagesProps, 'params'>) {
    const { mode } = use(params);

    if (routes.auth.byMode(mode) === routes.auth.signIn()) {
        return <SignInForm />;
    }

    return <SignUpForm />;
}