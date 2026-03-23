import { useState } from "react";
import { Menu, X, TreePalm } from "lucide-react";

const navLinks = ["Inicio", "Nosotros", "Servicios", "Galería", "Blog"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="flex items-center gap-2">
          <TreePalm className="h-8 w-8 text-primary" />
           <span className="font-display text-2xl tracking-wide text-primary">
             PARKLAND
           </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <li key={link} className="flex items-center">
              {i > 0 && <span className="text-muted-foreground mx-2">|</span>}
              <a
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="font-body font-bold text-sm uppercase tracking-wider text-foreground hover:text-primary transition-colors px-2 py-1"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="flex flex-col items-center py-4 gap-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="font-body font-bold text-sm uppercase tracking-wider text-foreground hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
