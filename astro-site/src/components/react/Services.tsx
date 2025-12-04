import { PenTool, Code, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: PenTool,
    title: "Design & UI/UX",
    desc: "Vytvářím vizuální styl, který si lidé zapamatují. Čistý, moderní a použitelný na každém zařízení."
  },
  {
    icon: Code,
    title: "Vývoj & Kód",
    desc: "Kvalitní kód bez balastu. React, TypeScript, Tailwind. Weby, které se načtou bleskově a jsou bezpečné."
  },
  {
    icon: TrendingUp,
    title: "SEO & Růst",
    desc: "Webem to nekončí. Nastavím ho tak, aby vás vyhledávače milovaly a zákazníci našli."
  }
];

export default function Services() {
  return (
    <section id="sluzby" className="py-16 bg-white border-y border-black/5">
      <div className="container mx-auto max-w-6xl px-6 mb-12">
        <div className="text-left max-w-2xl">
          <span className="text-akali-primary font-bold tracking-widest uppercase text-sm">Co umím</span>
          <h2 className="font-sans font-bold text-4xl mt-2 mb-6">Kompletní digitální servis</h2>
          <p className="text-gray-500 text-lg">
            Nestavím jen weby. Stavím nástroje, které vám ušetří čas a vydělají peníze. Od návrhu po kód.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group p-8 rounded-3xl bg-akali-bg border-2 border-transparent hover:border-akali-dark hover:shadow-neo transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-2xl border-2 border-akali-dark/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-akali-primary group-hover:text-akali-primary transition-all text-akali-dark">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
