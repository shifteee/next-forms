import { type ChangeEvent, useState } from 'react';

import validatePassword from '@/features/auth/models/validation/validatePassword';

export default function usePasswordField() {
    const [errors, setErrors] = useState<string[]>([]);
    const [isValid, setIsValid] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    return {
        errors,
        isValid,
        isFocused,
        onChange(e: ChangeEvent<HTMLInputElement>) {
            const password = e.target.value;

            const res = validatePassword(password);

            if (res.status) {
                setIsValid(true);

                return;
            }

            setErrors(res.errors);
            setIsValid(false);
        },
        toggleFocus(isFocused: boolean) {
            setIsFocused(isFocused)
        }
    };
}
