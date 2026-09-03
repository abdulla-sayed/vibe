import { UserButton } from "@clerk/nextjs";

// good naming convention: <entity>Page()
export default async function DashboardPage() {
  return (
    <div>
      <UserButton></UserButton>
    </div>
  );
}
