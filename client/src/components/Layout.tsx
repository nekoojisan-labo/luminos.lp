import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/gallery", label: "Gallery" },
    { href: "/columns", label: "Columns" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-prism-cyan/30 selection:text-prism-cyan">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-white/10 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              LUMINOUS
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-prism-cyan relative group",
                    location === link.href
                      ? "text-prism-cyan"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-0 h-[1px] bg-prism-cyan transition-all duration-300 group-hover:w-full",
                      location === link.href ? "w-full" : ""
                    )}
                  />
                </a>
              </Link>
            ))}
            <Link href="/line">
              <Button
                className="bg-gradient-to-r from-prism-blue to-prism-cyan hover:opacity-90 text-white border-0 rounded-full px-6"
              >
                Join Now
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden flex flex-col items-center justify-center gap-8",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <a
              className={cn(
                "text-2xl font-bold transition-colors hover:text-prism-cyan",
                location === link.href ? "text-prism-cyan" : "text-foreground"
              )}
            >
              {link.label}
            </a>
          </Link>
        ))}
        <Link href="/line">
          <Button className="bg-gradient-to-r from-prism-blue to-prism-cyan text-white border-0 rounded-full px-8 py-6 text-lg mt-4">
            Join Now
          </Button>
        </Link>
      </div>

      {/* Main Content */}
      <main className="pt-0 min-h-screen flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-16 mt-auto">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4">LUMINOUS</div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              秘めたる想いを、輝きに。<br />
              メンタル・ライティング・AIを総合的に学べるコミュニティ。
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-white/50">Pages</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/"><a className="hover:text-prism-cyan transition-colors">Home</a></Link></li>
              <li><Link href="/courses"><a className="hover:text-prism-cyan transition-colors">Courses</a></Link></li>
              <li><Link href="/gallery"><a className="hover:text-prism-cyan transition-colors">Gallery</a></Link></li>
              <li><Link href="/columns"><a className="hover:text-prism-cyan transition-colors">Columns</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-white/50">Support</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/contact"><a className="hover:text-prism-cyan transition-colors">Contact</a></Link></li>
              <li><Link href="/line"><a className="hover:text-prism-cyan transition-colors">LINE登録</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-white/50">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-prism-cyan transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-prism-cyan transition-colors">利用規約</a></li>
            </ul>
          </div>
        </div>

        <div className="container mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/50">
          <p>&copy; 2024 LUMINOUS. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
