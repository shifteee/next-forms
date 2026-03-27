import Link from 'next/link';

import { routes } from '@/shared/routes';
import { Tabs, TabsList, TabsTrigger } from '@/ui/tabs';

export async function AuthTabs({ activeTab }: { activeTab: AuthMode }) {
    const { signIn, signUp } = routes.auth;

    return (
        <Tabs value={activeTab}>
            <TabsList variant="line">
                <TabsTrigger value="sign-in" asChild>
                    <Link
                        href={signIn()}
                    >Sign In</Link>
                </TabsTrigger>

                <TabsTrigger value="sign-up" asChild>
                    <Link
                        href={signUp()}
                    >Sign Up</Link>
                </TabsTrigger>
            </TabsList>
        </Tabs>
    );
}