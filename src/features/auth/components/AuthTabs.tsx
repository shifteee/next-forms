import Link from 'next/link';

import { routes } from '@/shared/routes';
import * as Tabs from '@radix-ui/react-tabs';

export function AuthTabs({ activeTab }: { activeTab: AuthMode }) {
    const { byMode } = routes.auth;

    return (
        <Tabs.Root value={activeTab}>
            <Tabs.List>
                <Tabs.Trigger value="sign-in" asChild>
                    <Link
                        href={byMode(activeTab)}
                        className={`text-center py-2 ${activeTab === 'sign-in'
                            ? "bg-primary text-white"
                            : "bg-muted"
                            }`}
                    >Sign In</Link>
                </Tabs.Trigger>

                <Tabs.Trigger value="sign-up" asChild>
                    <Link
                        href={byMode(activeTab)}
                        className={`text-center py-2 ${activeTab === 'sign-up'
                            ? "bg-primary text-white"
                            : "bg-muted"
                            }`}
                    >Sign Up</Link>
                </Tabs.Trigger>
            </Tabs.List>
        </Tabs.Root>
    );
}