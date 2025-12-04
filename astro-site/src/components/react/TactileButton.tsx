import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface TactileButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  className?: string;
}

export default function TactileButton({ href, children, variant = 'primary', className = '' }: TactileButtonProps) {
  const baseClasses = "px-8 py-3 md:py-4 rounded-xl font-bold text-lg text-center border-2 transition-all";

  const variantClasses = {
    primary: "bg-akali-primary text-white border-akali-dark shadow-flat hover:shadow-flat-hover hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-flat-sm",
    secondary: "bg-white border-black/10 text-akali-dark hover:border-black/30",
    outline: "border-black/10 text-gray-700 hover:border-black hover:text-black hover:bg-white",
    dark: "bg-akali-primary text-white shadow-flat hover:shadow-flat-hover hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-flat-sm border-transparent"
  };

  return (
    <motion.a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}
