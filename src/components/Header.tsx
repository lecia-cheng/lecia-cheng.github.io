'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="py-6 md:py-8 px-5 md:px-10 max-w-[1400px] mx-auto">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-normal text-[#333] font-serif no-underline">
          Lecia Cheng
        </Link>
        <nav className="flex gap-5 md:gap-8">
          <Link
            href="/"
            className={`text-sm md:text-base font-serif no-underline transition-colors ${
              pathname === '/' ? 'text-[#333] font-medium' : 'text-[#333] hover:text-[#666]'
            }`}
          >
            Home
          </Link>
          <Link
            href="/experiences"
            className={`text-sm md:text-base font-serif no-underline transition-colors ${
              pathname === '/experiences' ? 'text-[#333] font-medium' : 'text-[#333] hover:text-[#666]'
            }`}
          >
            Experiences
          </Link>
          <Link
            href="/projects"
            className={`text-sm md:text-base font-serif no-underline transition-colors ${
              pathname === '/projects' ? 'text-[#333] font-medium' : 'text-[#333] hover:text-[#666]'
            }`}
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}

