"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="p-3 w-full max-w-2xl font-[family-name:var(--font-roboto-mono)]">
      <div className="container mx-auto">
        <nav className="flex justify-end gap-2">
          <Link
            href="/"
            className={`link hover:underline ${
              pathname === "/"
                ? "underline font-bold text-black"
                : "text-gray-700"
            }`}
          >
            Home
          </Link>
          <div>|</div>
          <Link
            href="/blog"
            className={`link hover:underline ${
              pathname === "/blog"
                ? "underline font-bold text-black"
                : "text-gray-700"
            }`}
          >
            Blog
          </Link>
          <div>|</div>
          <Link
            href="/about"
            className={`link hover:underline ${
              pathname === "/about"
                ? "underline font-bold text-black"
                : "text-gray-700"
            }`}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
