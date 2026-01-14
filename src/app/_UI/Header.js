
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import LogoutBtn from "./LogoutBtn";

export default async function Header() {
  const cookieStore = await cookies();          // ← function call
  const token = cookieStore.get("token"); // returns { name, value } or undefined
  const loggedIn = !!token;

  const logoutHandler = async (e) =>{
        e.preventDefault();

        const res = await fetch('/api/logout',{
            method:'POST',
        });

        if(res.ok){
            router.push('/login');
        }else{
            alert("user logged out successfully!");
        }

    }
  return (
    <header style={{ backgroundColor: "white", color: "black", fontSize: "1.5rem", padding: "20px" }}>
      <div className="flex justify-around items-center">
        <div className="flex items-center">
          <Image src="/assets/logo.png" alt="logoDB" width={50} height={50} />
          Next JS Practice
        </div>

        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </div>

        <div>
          {!loggedIn && <Link href="/login">Login</Link>}
          {loggedIn && (
            <LogoutBtn/>
          )}
        </div>
      </div>
    </header>
  );
}
