'use client';

import { useState } from 'react';

import { Button } from '@/ui/button';
import { Input } from '@/ui/input';
import { Field, FieldGroup, FieldLabel } from '@/ui/field';
import { TooltipProvider } from '@/ui/tooltip';

import PasswordWithTooltip from './PasswordWithTooltip';

import usePasswordField from '@/features/auth/libs/hooks/usePasswordField';

export default function SignInClientForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { errors, isFocused, isValid, toggleFocus, onChange } = usePasswordField();

    const asterisks = ''.padEnd(8, String.fromCharCode(42));
    const isDisabled = !email || !isValid;


    return (
        <FieldGroup>
            <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Field>

            <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <TooltipProvider>
                    <PasswordWithTooltip errors={errors} isFocused={isFocused}>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            placeholder={asterisks}
                            aria-invalid={!isValid && (isFocused || password.length > 0)}
                            required
                            onChange={(e) => {
                                onChange(e);
                                setPassword(e.target.value);

                            }}
                            onFocus={() => toggleFocus(true)}
                            onBlur={() => toggleFocus(false)}
                        />
                    </PasswordWithTooltip>
                </TooltipProvider>
            </Field>

            <Button type="submit" className="w-full cursor-pointer" disabled={isDisabled}>
                Sign In
            </Button>
        </FieldGroup>
    );
}