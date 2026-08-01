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
    <div className="h-screen w-screen flex flex-col gap-5 justify-center items-center">
      <h1 className="text-3xl font-bold my-10">Welcome to TeamTask</h1>
      <button onClick={()=>router.push("/signup")} className="w-40 border-blue-200 border-1 rounded-[8px] px-5 py-1 transition-all duration-300 shadow-blue-400 shadow-[0_0_10px] hover:bg-blue-200 hover:rounded-[15px] hover:text-black">Signup ---&gt;</button>
      <button onClick={()=>router.push("/login")} className="w-40 border-blue-200 border-1 rounded-[8px] px-5 py-1 transition-all duration-300 shadow-blue-400 shadow-[0_0_10px] hover:bg-blue-200 hover:rounded-[15px] hover:text-black">Login ---&gt;</button>
    </div>
  );
}
