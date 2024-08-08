import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-10 items-center justify-center h-screen">
      <h1 className="font-bold text-6xl text-white">Todo App</h1>
      <div className="space-x-5">
        <Link href="/auth/login">
          <Button variant="secondary" className="font-bold text-2xl w-24 h-12">Log in</Button>
        </Link>
        <Link href="/auth/signup">
          <Button variant="secondary" className="font-bold text-2xl w-28 h-12">Sign up</Button>
        </Link>
      </div>
    </div>
  );
}
