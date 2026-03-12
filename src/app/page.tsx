import { AuthTabs } from "@/features/auth/components/AuthTabs";

export default function Home() {
  return (
    <div data-testid="home-root">
      <AuthTabs />
    </div>
  );
}
