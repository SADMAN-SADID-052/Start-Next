"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";

export default function AboutPage() {

    const router = useRouter();
    const isLoggedIn = true;
    const handleNavigation = () =>{

        if(isLoggedIn){
            router.push("/about/address");

        }

        else{

            router.push("/");
        }
    }
  return (
    <div>

        <p className="font-bold text-3xl">About Page</p>
        <Link href="/about/address" className="bg-amber-400 rounded-3xl p-2 mt-7 text-black"> Address Page</Link>

        <p>
            <button type="button" onClick={handleNavigation} className="bg-sky-400 rounded-3xl p-2 mt-7 text-black">Address PAge</button>
        </p>
 
    </div>
  );
}
