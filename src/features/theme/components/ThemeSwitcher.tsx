'use client';

import { useState, useRef, useEffect } from 'react';

import { Label } from '@/ui/label';
import { Switch } from '@/ui/switch';
import { Skeleton } from '@/ui/skeleton';

type Theme = 'light' | 'dark';

function* themeGenerator(start: Theme): Generator<Theme> {
    let current: Theme = start;

    while (true) {
        yield current;
        current = (current === 'dark') ? 'light' : 'dark';
    }
}

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState<Theme | null>(null);
    const generatorRef = useRef<Generator<Theme> | null>(null);

    useEffect(() => {
        const initial: Theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';

        generatorRef.current = themeGenerator(initial);
        setTheme(generatorRef.current.next().value);
    }, []);

    const toggleTheme = () => {
        if (!generatorRef.current) {
            return;
        }

        const next = generatorRef.current.next().value;

        setTheme(next);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <>
            <Switch
                id="theme-switcher"
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                disabled={!theme}
            />
            <Label htmlFor="theme-switcher">
                {theme === null ? <Skeleton className="h-4 w-5" /> : theme}
            </Label>
        </>
    );
}