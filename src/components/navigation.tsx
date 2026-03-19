"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/background", label: "Background" },
  { href: "/projects", label: "Projects" },
  { href: "/my-thoughts", label: "My Thoughts" },
  { href: "/cv", label: "CV" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="max-w-[1000px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-medium tracking-tight text-foreground hover:opacity-70 transition-opacity"
        >
          Jonathan Li
        </Link>

        <ul className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href))

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-mono transition-all duration-200 relative py-1",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 right-0 h-px bg-foreground transition-transform duration-200 origin-left",
                      isActive ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
