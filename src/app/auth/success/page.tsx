import { cookies } from 'next/headers';
import { SESSION_KEY } from '@/features/auth/static/consts';
import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar';

export default async function SuccessPage() {
    const cookieStore = await cookies();
    const session = cookieStore.get(SESSION_KEY)?.value;

    let userEmail = 'User';
    if (session) {
        try {
            const user = JSON.parse(session) as User;
            userEmail = user.email;
        } catch {
            // Fallback if cookie is malformed
        }
    }

    // Generate GitHub-style placeholder initials
    const initials = userEmail
        .split(/[@.]/)
        .map((x) => x[0].toUpperCase())
        .slice(0, 2)
        .join('');

    return (
        <div className="flex flex-col items-center space-y-4">
            <Avatar className="w-24 h-24">
                <AvatarImage alt={userEmail} />
                <AvatarFallback className="bg-gray-300 text-xl text-white">
                    {initials}
                </AvatarFallback>
            </Avatar>

            <h1 className="text-2xl font-semibold">
                Welcome, {userEmail}!
            </h1>
        </div>
    );
}