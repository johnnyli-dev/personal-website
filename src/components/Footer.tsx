"use client";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-[1000px] mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a
            href="https://github.com/jonathanli1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jonathanli1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:johnnylii@berkeley.edu"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Jonathan Li
        </p>
      </div>
    </footer>
  );
}
