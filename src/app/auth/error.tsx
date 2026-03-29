'use client';

import AuthLayout from './layout';

export default function AuthError({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <AuthLayout>
            <div className="text-center">
                <h1 className="text-2xl font-semibold text-red-600">
                    Something went wrong
                </h1>
                <p className="mt-2 text-gray-700">{error.message}</p>
                <button
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
                    onClick={() => reset()}
                >
                    Try Again
                </button>
            </div>
        </AuthLayout>

    );
}