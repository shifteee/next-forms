import { use } from 'react';
import { AuthTabs } from "@/features/auth/components/AuthTabs";


export default function AuthModeLayout({
    children,
    params,
}: SignPagesProps) {
    const { mode } = use(params);

    return (
        <>
            <AuthTabs activeTab={mode} />

            {children}
        </>
    );
}