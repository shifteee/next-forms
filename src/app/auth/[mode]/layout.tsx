import { AuthTabs } from "@/features/auth/components/AuthTabs";

export default async function AuthModeLayout({
    children,
    params,
}: SignPagesProps) {
    const { mode } = await params;

    return (
        <>
            <AuthTabs activeTab={mode} />

            {children}
        </>
    );
}