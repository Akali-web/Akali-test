import { motion } from 'framer-motion';
import TactileButton from './TactileButton';

interface HeroProps {
  productLaunchSrc: string;
}

export default function Hero({ productLaunchSrc }: HeroProps) {
  return (
    <header className="pt-32 pb-8 md:pt-48 md:pb-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Text Content */}
        <motion.div
          className="order-2 md:order-1 relative z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="font-sans font-extrabold text-4xl md:text-7xl leading-[1.1] mb-4 text-akali-dark"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          >
            Weby, co <br />
            <span className="highlight-text">vydělávají.</span>
          </motion.h1>
          <motion.p
            className="font-sans text-base md:text-lg text-gray-600 mb-6 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Stavím moderní weby s důrazem na čistý design a funkčnost. Přímá cesta k vašim zákazníkům.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <TactileButton href="#investice" variant="primary">
              Chci nový web
            </TactileButton>
            <TactileButton href="#sluzby" variant="secondary">
              Jak to funguje?
            </TactileButton>
          </motion.div>

          <motion.p
            className="font-hand text-gray-400 mt-4 rotate-2 ml-4 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            *Kódováno pomocí AI
          </motion.p>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="order-1 md:order-2 relative flex justify-center mb-4 md:mb-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={productLaunchSrc} alt="Web Launch Illustration" className="w-2/3 md:w-full md:max-w-md object-contain animate-float drop-shadow-2xl rotate-6" />
          <div className="absolute w-4 h-4 bg-akali-primary rounded-full top-10 left-10 animate-bounce"></div>
          <div className="absolute w-3 h-3 bg-akali-secondary rounded-full bottom-10 right-10 animate-pulse"></div>
        </motion.div>
      </div>
    </header>
  );
}
