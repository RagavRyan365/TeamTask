"use client";
import {useRouter} from "next/navigation";

export default function Signup() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen overflow-auto flex flex-col gap-7 justify-center items-center">
      <h1 className="text-3xl font-bold">Signup</h1>
      <form className="flex flex-col gap-10">
        <input type="text" placeholder="Username" className="Input" required name="Username" />
        <input type="email" placeholder="Email" className="Input" required name="Email" />
        <input type="password" placeholder="Password" className="Input" required name="Password" />
        <input type="password" placeholder="Confirm Password" className="Input" required name="ConfirmPassword" />
        <button type="submit" className="bg-blue-300 w-auto h-8 rounded-md !text-black">Signup</button>
      </form>
      <p>Already have an account? <span onClick={()=>router.push("/login")} className="text-blue-300 cursor-pointer">Login</span></p>
    </div>
  );
}