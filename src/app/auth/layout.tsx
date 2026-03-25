export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-[400px] space-y-6">
                {children}
            </div>
        </div>
    );
}