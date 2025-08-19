import Link from "next/link";
import { Button } from "../ui/button";

export const NavMenu = () => {
  return (
    <nav className="hidden md:flex items-center space-x-8 font-light">
      <Link
        href="#about"
        className="text-foreground hover:text-primary transition-colors font-light"
      >
        ABOUT US
      </Link>
      <Link
        href="#services"
        className="text-foreground hover:text-primary transition-colors font-light"
      >
        SERVICES
      </Link>
      <Link
        href="#examples"
        className="text-foreground hover:text-primary transition-colors font-light"
      >
        EXAMPLES
      </Link>
      <Link
        href="#work"
        className="text-foreground hover:text-primary transition-colors font-light"
      >
        OUR WORK
      </Link>
      <Link
        href="#blog"
        className="text-foreground hover:text-primary transition-colors font-light"
      >
        BLOG
      </Link>
      <Link
        href="#careers"
        className="text-foreground hover:text-primary transition-colors font-light"
      >
        CAREERS
      </Link>
      <Button
        variant="default"
        className="bg-blue-500 text-white font-bold hover:bg-secondary/90"
      >
        BOOK ONLINE
      </Button>
      <Link
        href="#contact"
        className="text-foreground hover:text-primary transition-colors font-light"
      >
        CONTACT US
      </Link>
    </nav>
  );
};
