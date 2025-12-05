import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Proč já?', href: '#proc-ja' },
  { label: 'Co umím', href: '#sluzby' },
  { label: 'Portfolio', href: '#prace' },
  { label: 'Ceník', href: '#investice' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-5 py-2.5 md:py-4
          ${scrolled ? 'py-2 md:py-3 bg-white/80 backdrop-blur-md border-b-2 border-akali-dark/5' : 'bg-transparent'}
        `}
      >
        <div className="container mx-auto max-w-6xl flex justify-between items-center">
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileTap={{ scale: 0.95, y: 1 }}
          >
            <div className="w-10 h-10 bg-akali-primary rounded-lg border-2 border-akali-dark shadow-neo-sm group-hover:shadow-neo transition-all flex items-center justify-center text-white">
              <Terminal size={20} />
            </div>
            <span className="font-sans font-black text-2xl tracking-tight text-akali-dark">AKALI</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 bg-white/90 backdrop-blur-sm px-2 py-2 rounded-2xl border-2 border-akali-dark/5 shadow-sm">
             {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-5 py-2 rounded-xl text-sm font-bold text-gray-600 hover:text-akali-primary hover:bg-akali-primary/5 transition-all"
                >
                  {link.label}
                </a>
             ))}
          </div>

          <div className="hidden md:block">
            <a href="#kontakt" className="bg-akali-primary text-white border-2 border-akali-dark px-6 py-3 rounded-xl font-bold text-sm shadow-flat hover:shadow-flat-hover hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-flat-sm transition-all">
              Napište mi
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 bg-white border-2 border-akali-dark rounded-xl shadow-neo-sm active:translate-y-1 active:shadow-none transition-all"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-akali-bg z-[60] flex flex-col p-6 md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-black text-2xl">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 bg-white border-2 border-akali-dark rounded-xl shadow-neo-sm"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-6 items-center justify-center flex-1">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-4xl font-bold hover:text-akali-primary active:scale-95 transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <a
                  href="#kontakt"
                  onClick={() => setIsOpen(false)}
                  className="block bg-akali-primary text-white border-2 border-akali-dark px-8 py-4 rounded-xl font-bold text-lg shadow-flat hover:shadow-flat-hover transition-all"
                >
                  Kontakt
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
