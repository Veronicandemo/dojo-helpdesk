import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./dojo-logo.png";

export default function NavBar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Dojo Helpdesk Logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>Dojo help desk</h1>
      <Link href="/">Home</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
