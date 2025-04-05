
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 px-6 md:px-12 transition-all duration-300 ${
        scrolled ? "py-4 backdrop-blur-lg bg-background/90 shadow-md" : "py-6"
      }`}
    >
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
        <a href="#" className="text-purple-light font-semibold text-2xl">GD.</a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navItems.map((item, index) => (
              <li key={item.name} className="text-slate">
                <a 
                  href={item.href} 
                  className="group hover-underline transition-colors duration-300"
                >
                  <span className="text-purple-light font-mono text-sm mr-1">0{index + 1}.</span>
                  <span className="group-hover:text-foreground">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <Button className="bg-transparent hover:bg-purple-light/10 text-purple-light border border-purple-light hover:border-purple hover:text-purple rounded-full px-4 py-2 transition-colors duration-300">
            Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-purple-light"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-background/95 z-50 flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-8 items-center">
          {navItems.map((item, index) => (
            <li key={item.name} className="text-center">
              <a 
                href={item.href} 
                className="text-lg group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="text-purple-light font-mono mb-1">0{index + 1}.</div>
                <span className="group-hover:text-purple-light transition-colors duration-300">{item.name}</span>
              </a>
            </li>
          ))}
          <li className="mt-8">
            <Button 
              className="bg-transparent hover:bg-purple-light/10 text-purple-light border border-purple-light hover:border-purple hover:text-purple rounded-full px-4 py-2 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
