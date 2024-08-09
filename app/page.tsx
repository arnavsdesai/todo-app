import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function Home() {
  return (
    <div className="flex flex-col space-y-10 items-center justify-center h-screen">
      <h1 className="font-bold text-6xl text-white">Todo App</h1>
      <div className="space-x-5">
        <Login />
        <Signup />
      </div>
    </div>
  );
}

function Signup() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="font-bold text-2xl w-28 h-12">Sign up</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-bold text-2xl">Sign up</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

function Login() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="font-bold text-2xl w-24 h-12">Log in</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-bold text-2xl">Log in</DialogTitle>
        </DialogHeader>
        <div>
          <Link href="#">
            <p className="text-muted-foreground text-sm underline underline-offset-2 hover:text-primary">Forgot Password?</p>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}