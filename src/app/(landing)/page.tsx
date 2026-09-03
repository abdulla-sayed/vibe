import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function LandingPage() {
  return (
    <div>
      <p>Landing page (unprotected)</p>
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
}
