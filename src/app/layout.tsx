import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import Nav from "@/components/Nav";
import "./globals.css";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Jonathan Li",
  description: "SWE Intern and Applied Mathematics Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <Sidebar />
          <main className={styles.main}>
            <Nav />
            <div className={styles.content}>{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
