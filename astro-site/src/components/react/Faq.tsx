import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { q: "Kolik stojí nový web?", a: "Cena závisí na rozsahu. Jednostránkový web (vizitka) začíná na 6 000 Kč. Komplexnější firemní weby s více podstránkami se pohybují od 11 000 Kč výše. Vždy dostanete přesnou kalkulaci předem." },
  { q: "Jak dlouho trvá vytvoření?", a: "Web v balíčku Esence zvládnu do 1 týdne od dodání podkladů. Větší projekty (Byznys) trvají obvykle 2–3 týdny. Záleží také na rychlosti naší komunikace." },
  { q: "Co potřebujete ode mě?", a: "Ideálně texty a fotografie. Pokud je nemáte, nevadí – mohu vám pomoci s jejich tvorbou nebo zajistit fotobanku. Důležitá je také představa o cílech webu." },
  { q: "Bude web fungovat na mobilu?", a: "Rozhodně. Uplatňuji přístup 'Mobile First', takže web bude vypadat a fungovat skvěle na všech zařízeních – od telefonu přes tablet až po desktop." }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 px-6 bg-akali-bg relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-left mb-12">
          <motion.span
            className="text-akali-primary font-bold tracking-widest uppercase text-sm block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            FAQ
          </motion.span>
          <motion.h2
            className="font-sans font-bold text-4xl mt-2 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
          >
            Časté dotazy
          </motion.h2>
          <motion.p
            className="text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Vše, co potřebujete vědět před začátkem spolupráce.
          </motion.p>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="border-b border-black/10 pb-4 last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-4 text-left hover:text-akali-primary transition-colors group"
              >
                <span className="font-bold text-xl pr-4">{item.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-1 rounded-full border-2 border-transparent group-hover:border-akali-primary/20 transition-all flex-shrink-0"
                >
                  {openIndex === i ? <Minus size={20} className="text-akali-primary" /> : <Plus size={20} />}
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-600 leading-relaxed text-base">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
