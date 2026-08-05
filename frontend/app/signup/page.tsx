"use client";
import {useRouter} from "next/navigation";
import {useState} from "react";
import axios from "axios";

export default function Signup() {
  const router = useRouter();
  const Backend_Url = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await axios.post(`${Backend_Url}/api/user/signup`, {
      username,
      email,
      password,
      confirmPassword
     });
    console.log(res.data);
    if(res.status === 201) {
      router.push("/login");
    } else {
      alert("Error occurred while signing up");
    }
  }
  return (
    <div className="h-screen w-screen overflow-auto flex flex-col gap-7 justify-center items-center">
      <h1 className="text-3xl light:text-black dark:text-white font-bold">Signup</h1>
      <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" className="Input" required name="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" className="Input" required name="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="Input" required name="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" className="Input" required name="ConfirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button type="submit" className="bg-[var(--button-color)] w-auto h-8 rounded-md !text-black">Signup</button>
      </form>
      <p className="dark:text-white light:text-black">Already have an account? <span onClick={()=>router.push("/login")} className="text-blue-300 cursor-pointer">Login</span></p>
    </div>
  );
}