// src/features/auth/components/AuthTabs.tsx
"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export function AuthTabs() {
    return (
        <Tabs.Root defaultValue="sign-in" className="w-[400px]">
            <Tabs.List className="flex border-b mb-4">
                <Tabs.Trigger
                    value="sign-in"
                    className={cn(
                        "px-4 py-2 border-b-2 border-transparent",
                        "data-[state=active]:border-blue-500"
                    )}
                >
                    Sign In
                </Tabs.Trigger>
                <Tabs.Trigger
                    value="sign-up"
                    className={cn(
                        "px-4 py-2 border-b-2 border-transparent",
                        "data-[state=active]:border-blue-500"
                    )}
                >
                    Sign Up
                </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="sign-in">
                <div>Sign In Form Placeholder</div>
            </Tabs.Content>
            <Tabs.Content value="sign-up">
                <div>Sign Up Form Placeholder</div>
            </Tabs.Content>
        </Tabs.Root>
    );
}