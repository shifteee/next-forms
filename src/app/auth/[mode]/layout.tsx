import { AuthTabs } from "@/features/auth/components/AuthTabs";
import { Card, CardContent, CardHeader } from "@/ui/card";

export default async function AuthModeLayout({
    children,
    params,
}: SignPagesProps) {
    const { mode } = await params;

    return (
        <Card className="min-w-2xs">
            <CardHeader>
                <AuthTabs activeTab={mode} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    );
}