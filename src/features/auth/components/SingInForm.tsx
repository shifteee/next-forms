import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";

export default function SignInPage() {
    return (
        <div className="w-[400px] space-y-6">
            <div className="space-y-2 text-center">
                <h1 className="text-2xl font-semibold">
                    Login to your account
                </h1>
                <p className="text-sm text-muted-foreground">
                    Enter your email below to login to your account
                </p>
            </div>

            <form className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="login">Login</Label>
                    <Input id="login" type="text" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                </div>

                <Button type="submit" className="w-full">
                    Sign In
                </Button>
            </form>
        </div>
    );
}