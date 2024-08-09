import { Login, Signup } from "@/components/Auth";


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