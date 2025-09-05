import Link from "next/link";
import React from "react";

export default function NotFoundPage404() {
  return (
    <div>
        <h2 className="flex text-6xl content-center  font-bold">404 Not Found</h2>
        <Link href="/">Go back to Home</Link>
 
    </div>
  );
}
