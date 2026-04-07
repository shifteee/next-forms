import signUp from '@/features/auth/server/actions/signUp';
import SignInClientForm from './SignUpClientForm';

import { FieldDescription, FieldLegend, FieldSet } from '@/ui/field';

export default async function SignUpForm() {
    return (
        <FieldSet>
            <FieldLegend>Create an account</FieldLegend>
            <FieldDescription>
                Enter your email and password below to create your account
            </FieldDescription>

            <form action={signUp}>
                <SignInClientForm />
            </form>
        </FieldSet>
    );
}