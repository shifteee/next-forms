import { signInAction } from '@/features/auth/server/authAction';

import SignInClientForm from './SignInClientForm';

export default async function SignInForm() {
    return (
        <div className="w-[400px] space-y-6">
            <div className="space-y-2 text-center">
                <h1 className="text-2xl font-semibold">Login to your account</h1>
                <p className="text-sm text-muted-foreground">
                    Enter your email below to login to your account
                </p>
            </div>

            <form action={signInAction} className="space-y-4">
                <SignInClientForm />
            </form>
        </div>
    );
}