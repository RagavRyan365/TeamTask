"use client";
import {useRouter} from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <form className="flex flex-col gap-10">
        <input type="email" placeholder="Email" className="Input" required name="Email" />
        <input type="password" placeholder="Password" className="Input" required name="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}