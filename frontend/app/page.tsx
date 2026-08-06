"use client";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();
  function apitest(){
    fetch("http://localhost:8080/api")
    .then((res) => res.json())
    .then((data) => console.log(data))
  }
  return (
    <div className="h-screen w-screen overflow-auto flex flex-col gap-5 justify-center items-center">
      <h1 className="text-3xl dark:text-white light:text-black font-bold my-10">Welcome to Team Task</h1>
      <button onClick={()=>router.push("/signup")} className="w-40 border-[var(--button-color)] border-1 dark:text-white light:text-black rounded-[8px] px-5 py-1 transition-all duration-300 hover:bg-[var(--button-color)] hover:rounded-[15px] hover:text-black">Signup</button>
      <button onClick={()=>router.push("/login")} className="w-40 border-[var(--button-color)] border-1 dark:text-white light:text-black rounded-[8px] px-5 py-1 transition-all duration-300 hover:bg-[var(--button-color)] hover:rounded-[15px] hover:text-black">Login</button>
    </div>
  );
}
