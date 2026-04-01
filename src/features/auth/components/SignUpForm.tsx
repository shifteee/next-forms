import signUp from '@/features/auth/server/actions/signUp';
import SignInClientForm from './SignUpClientForm';

export default async function SignUpForm() {
    return (
        <div className="space-y-6">
            <div className="space-y-2 text-center">
                <h1 className="text-2xl font-semibold">
                    Create an account
                </h1>

                <p className="text-sm text-muted-foreground">
                    Enter your email below to create your account
                </p>
            </div>

            <form action={signUp} className="space-y-4">
                <SignInClientForm />
            </form>
        </div>
    );
}