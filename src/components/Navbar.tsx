"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();
  const [active, setActive] = useState(false);
  return (
    <nav className="nav">
      <Link href="/" className="navLogo navItem ">
        <Image src={logo} alt="Quiz Genius Logo" width={40} height={40} />
        <h1 className="logoText logoText">Quiz Genius</h1>
      </Link>
      {!session ? (
        <>
          <button
            onClick={() => signIn()}
            className="navItem navLogin navDesktop"
          >
            Login
          </button>
          <button
            onClick={() => signIn()}
            className="navItem navSignup navDesktop"
          >
            Signup
          </button>
        </>
      ) : (
        <>
          <Image
            src={session?.user?.image || ""}
            alt="Profile Picture"
            width={50}
            height={50}
            className="navProfilePicture navDesktop"
          />

          <button
            onClick={() => signOut()}
            className="navItem navLogin navDesktop"
            style={{ marginLeft: "1rem" }}
          >
            Logout
          </button>
        </>
      )}
      <div className="navIcon navItem" onClick={() => setActive(!active)}>
        <div className="navIconLine"></div>
        <div className="navIconLine"></div>
        <div className="navIconLine"></div>
      </div>
      {active && (
        <div className="navMenu">
          {!session ? (
            <>
              <button onClick={() => signIn()} className="navMenuItem">
                Login
              </button>
              <button onClick={() => signIn()} className="navMenuItem">
                Signup
              </button>
            </>
          ) : (
            <>
              <button onClick={() => signOut()} className="navMenuItem">
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
