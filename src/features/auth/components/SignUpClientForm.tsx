'use client';

import { useState } from 'react';

import { Button } from '@/ui/button';
import { Input } from '@/ui/input';
import { Label } from '@/ui/label';

export default function SignInClientForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isDisabled = !email || !password;

    return (
        <>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    name="email"
                    type="text"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <Button type="submit" className="w-full" disabled={isDisabled}>
                Sign Up
            </Button>
        </>
    );
}