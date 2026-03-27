import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";

export default async function SignUpForm() {
    return (
        <div className="space-y-6">
            <div className="space-y-2 text-center">
                <h1 className="text-2xl font-semibold">
                    Create an account
                </h1>

                <p className="text-sm text-muted-foreground">
                    Enter your email below to create your account
                </p>
            </div>

            <form className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                </div>

                <Button className="w-full" type="submit">
                    Sign Up
                </Button>
            </form>
        </div>
    );
}