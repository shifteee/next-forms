import { AuthTabs } from "@/src/features/auth/components/AuthTabs";

export default function Home() {
  return (
    <div data-testid="home-root">
      <AuthTabs />
    </div>
  );
}
