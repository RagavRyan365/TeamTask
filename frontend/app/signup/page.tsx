"use client";
import {useRouter} from "next/navigation";

export default function Signup() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen flex  gap-10 justify-center items-center">
      <form className="flex flex-col gap-10">
        <input type="text" placeholder="Username" className="Input" required name="Username" />
        <input type="email" placeholder="Email" className="Input" required name="Email" />
        <input type="password" placeholder="Password" className="Input" required name="Password" />
        <input type="password" placeholder="Confirm Password" className="Input" required name="ConfirmPassword" />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}