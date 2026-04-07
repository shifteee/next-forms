import ThemeSwitcher from "@/features/theme/components/ThemeSwitcher";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="flex top-0 right-0 left-0 items-center justify-end gap-2 p-2">
                <ThemeSwitcher />
            </div >
            <div className="flex min-h-screen items-center justify-center">
                <div className="w-100 space-y-6">
                    {children}
                </div>
            </div>
        </>
    );
}