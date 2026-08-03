"use client";
import {useRouter} from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen flex flex-col gap-7 justify-center items-center">
      <h1 className="text-3xl font-bold">Login</h1>
      <form className="flex flex-col gap-10">
        <input type="email" placeholder="Email" className="Input" required name="Email" />
        <input type="password" placeholder="Password" className="Input" required name="Password" />
        <button type="submit" className="bg-blue-300 w-auto h-8 rounded-md text-black">Login</button>
      </form>
      <p>Don't have an account? <span onClick={()=>router.push("/signup")} className="text-blue-300 cursor-pointer">Signup</span></p>
    </div>
  );
}