"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileNav({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <div className="relative">
      {/* Hamburger Button */}
      <Button
        onClick={onToggle}
        className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="size-8" /> : <Menu className="size-8" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full right-0 bg-grey-200 border-b border-border shadow-lg z-50">
          <nav className="flex flex-col space-y-4 p-6 bg-white">
            <Link
              href="#about"
              className="text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={onToggle}
            >
              ABOUT US
            </Link>
            <Link
              href="#services"
              className="text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={onToggle}
            >
              SERVICES
            </Link>
            <Link
              href="#examples"
              className="text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={onToggle}
            >
              EXAMPLES
            </Link>
            <Link
              href="#work"
              className="text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={onToggle}
            >
              OUR WORK
            </Link>
            <Link
              href="#blog"
              className="text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={onToggle}
            >
              BLOG
            </Link>
            <Link
              href="#careers"
              className="text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={onToggle}
            >
              CAREERS
            </Link>
            <Button
              variant="default"
              className="bg-blue-500 text-white font-bold hover:bg-secondary/90 w-full mt-4 hover:bg-blue-600"
            >
              BOOK ONLINE
            </Button>
            <Link
              href="#contact"
              className="text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={onToggle}
            >
              CONTACT US
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
