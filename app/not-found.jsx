import Link from "next/link";
import React from "react";

export default function Notfound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">There was a problem.</h2>
      <p>We could not find the page you are lokking for</p>
      <p>
        Got back to the <Link href="/">Dashbord</Link>
      </p>
    </main>
  );
}
