import { FieldDescription, FieldLegend, FieldSet } from '@/ui/field';
import signIn from '../server/actions/signIn';
import SignInClientForm from './SignInClientForm';

export default async function SignInForm() {
    return (
        <FieldSet>
            <FieldLegend >Login to your account</FieldLegend>
            <FieldDescription>
                Enter your email below to login to your account
            </FieldDescription>

            <form action={signIn}>
                <SignInClientForm />
            </form>
        </FieldSet>
    );
}