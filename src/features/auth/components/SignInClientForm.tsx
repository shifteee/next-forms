'use client';

import { useState } from 'react';

import { Button } from '@/ui/button';
import { Input } from '@/ui/input';
import { Field, FieldGroup, FieldLabel } from '@/ui/field';

export default function SignInClientForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const asterisks = ''.padEnd(8, String.fromCharCode(42));
    const isDisabled = !email || !password;

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
                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder={asterisks}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Field>

            <Button type="submit" className="w-full cursor-pointer" disabled={isDisabled}>
                Sign In
            </Button>
        </FieldGroup>
    );
}