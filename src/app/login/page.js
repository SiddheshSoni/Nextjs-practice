"use client"
import { useRouter } from "next/navigation";
import { useState } from "react"


const Page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const submitHandler = async (e) =>{
        e.preventDefault();

        if(password.length < 6){
            alert("password is too short");
            return;
        }

        const res = await fetch("/api/login",{
            method:'POST',
            body:JSON.stringify({
                email,
                password,
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        });

        if(res.ok){
            router.push('/products')
        }else{
            alert("Login Failed!");
        }
    };
  return (
    <div className="m-9 gap-2">
        <form onSubmit={submitHandler}>
            <label>Email:</label>
            <input className=" bg-amber-50 text-black" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <label>Password:</label>
            <input className=" bg-amber-50 text-black" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Page