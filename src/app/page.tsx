'use client'

import Navbar from "@/components/organisms/NavBar";
import styles from "./page.module.css";

const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" }
];
export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar items={navItems} />
    </div>
  );
}
