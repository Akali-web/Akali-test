import { motion } from 'framer-motion';
import TactileButton from './TactileButton';

export default function Pricing() {
  return (
    <section id="investice" className="py-16 px-6 relative bg-white border-t border-black/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-left mb-12">
          <motion.span
            className="text-akali-primary font-bold tracking-widest uppercase text-sm block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Ceník
          </motion.span>
          <motion.h2
            className="font-sans font-bold text-4xl mt-2 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
          >
            Transparentní investice
          </motion.h2>
          <motion.p
            className="text-gray-500 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Žádné skryté poplatky. Víte přesně, za co platíte. Vyberte si balíček, který sedí vašim cílům.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Start Package */}
          <motion.div
            className="group bg-white p-8 md:p-12 rounded-3xl border-2 border-akali-primary shadow-md relative hover:translate-y-[-8px] transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -top-4 left-8 bg-gray-100 px-4 py-1 rounded-full font-bold text-xs uppercase tracking-wider border border-gray-200 group-hover:bg-akali-primary group-hover:text-white group-hover:border-akali-primary transition-colors">
              Pro start
            </div>
            <h3 className="font-bold text-2xl mb-2 group-hover:text-akali-primary transition-colors">Esence</h3>
            <p className="text-gray-500 text-sm mb-6">Ideální pro osobní portfolio nebo malou službu.</p>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-black">6 000</span>
              <span className="text-gray-400 font-bold">Kč</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm font-medium">
                <div className="bg-green-100 p-1 rounded-full text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                One-page (jednostránkový) web
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                <div className="bg-green-100 p-1 rounded-full text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                Responzivní design
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                <div className="bg-green-100 p-1 rounded-full text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                Základní SEO nastavení
              </li>
            </ul>

            <TactileButton href="#kontakt" variant="outline" className="block w-full">
              Zvolit Esenci
            </TactileButton>
          </motion.div>

          {/* Business Package */}
          <motion.div
            className="bg-akali-dark text-white p-8 md:p-12 rounded-3xl border-2 border-akali-dark relative shadow-flat-primary hover:translate-y-[-4px] hover:shadow-flat-primary-hover transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="font-bold text-2xl mb-2 text-akali-secondary">Byznys</h3>
            <p className="text-gray-400 text-sm mb-6">Pro firmy, které to myslí vážně.</p>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-black">od 11 000</span>
              <span className="text-gray-400 font-bold">Kč</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm font-medium">
                <div className="bg-akali-secondary/20 p-1 rounded-full text-akali-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                Více podstránek & CMS
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                <div className="bg-akali-secondary/20 p-1 rounded-full text-akali-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                Pokročilý design & animace
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                <div className="bg-akali-secondary/20 p-1 rounded-full text-akali-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                Napojení analytiky
              </li>
            </ul>

            <TactileButton href="#kontakt" variant="dark" className="block w-full">
              Chci růst
            </TactileButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
