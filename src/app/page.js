"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const hancleRouter = (url) => {
    router.push(url);
  };
  return (
    <main>
      <a href="/login">login</a>
      {/* <Link href={"/productlist"}>Go to Product List</Link> */}
      <Link href={"/serverproductlist"}>Go to Server Product List</Link>
      <br></br>
      <button onClick={() => hancleRouter("/login")}>Login</button>
    </main>
  );
}
