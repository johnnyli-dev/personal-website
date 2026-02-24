import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Jonathan Li",
  description: "Applied Mathematics & CS at UC Berkeley",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className={styles.main}>
          <div className={styles.content}>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
