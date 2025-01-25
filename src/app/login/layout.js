"use client";
import Link from "next/link";
import React from "react";
import "./logincss.css";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const path = usePathname();
  console.log(path);
  return (
    <div>
      {path !== "/login/loginteacher" ? (
        <ul className="loginmenu">
          <li>
            <h4 className="login-dashobard">Login Dashboard</h4>
          </li>
          <li>
            <Link href="/login">Main Login</Link>
          </li>
          <li>
            <Link href="/login/loginstudent">Student Login</Link>
          </li>
          <li>
            <Link href="/login/loginteacher">Teacher Login</Link>
          </li>
        </ul>
      ) : (
        <Link href={"/login"}>Back to home</Link>
      )}
      {children}
    </div>
  );
};

export default Layout;
