"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Background" },
  { href: "/projects", label: "Projects" },
  { href: "/my-thoughts", label: "My Thoughts" },
  { href: "/cv", label: "CV" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.name}>
        Jonathan Li
      </Link>
      <nav className={styles.nav}>
        {links.map(({ href, label }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`${styles.link} ${isActive ? styles.active : ""}`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
