"use client"; // this is a client component 👈🏽

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import Register from "../../pages/register/index";
import Login from "../../pages/login";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    localStorage.getItem("sucess") ? router.push("/") : router.push("/login");
  }, []);

  return (
    <div className={styles.main}>
      <Login />
      <Register />
    </div>
  );
}
