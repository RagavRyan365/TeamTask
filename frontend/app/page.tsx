"use client";
import {useRouter} from "next/navigation";
import {useState,useEffect} from "react";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const Backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;
  const[message,setMessage] = useState("");

  useEffect(()=>{
    axios.get(`${Backend_url}/api/user/Auth`,{withCredentials:true})
    .then((res)=>{
      if(res.status===200){
        setMessage(res.data.message);
        router.push("/dashboard");
      }
    })
  },[]);

  
  return (
    <div className="h-screen w-screen overflow-auto flex flex-col gap-5 justify-center items-center">
      <h1 className="text-3xl dark:text-white light:text-black font-bold my-10">Welcome to Team Task</h1>
      <p className="text-lg dark:text-white light:text-black">A task management application for teams</p>
      <p className="text-green-500 text-lg">{message}</p>
      <button onClick={()=>router.push("/signup")} className="w-40 border-[var(--button-color)] border-1 dark:text-white light:text-black rounded-[8px] px-5 py-1 transition-all duration-300 hover:bg-[var(--button-color)] hover:rounded-[15px] hover:text-black">Signup</button>
      <button onClick={()=>router.push("/login")} className="w-40 border-[var(--button-color)] border-1 dark:text-white light:text-black rounded-[8px] px-5 py-1 transition-all duration-300 hover:bg-[var(--button-color)] hover:rounded-[15px] hover:text-black">Login</button>
    </div>
  );
}
