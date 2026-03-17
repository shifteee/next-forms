"use client"

import * as Tabs from "@radix-ui/react-tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AuthTabs() {
    const pathname = usePathname();

    const activeTab =
        pathname === "/auth/sign-up" ? "sign-up" : "sign-in";

    return (
        <Tabs.Root value={activeTab}>
            <Tabs.List>
                <Tabs.Trigger value="sign-in" asChild>
                    <Link href="/auth/sign-in">Sign In</Link>
                </Tabs.Trigger>

                <Tabs.Trigger value="sign-up" asChild>
                    <Link href="/auth/sign-up">Sign Up</Link>
                </Tabs.Trigger>
            </Tabs.List>
        </Tabs.Root>
    );
}