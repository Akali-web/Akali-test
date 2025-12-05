import { motion } from 'framer-motion';

interface PortfolioProps {
  eleganceImageSrc: string;
  terapieImageSrc: string;
  campImageSrc: string;
}

export default function Portfolio({ eleganceImageSrc, terapieImageSrc, campImageSrc }: PortfolioProps) {
  const projects = [
    {
      href: "https://akali-web.github.io/nails-website",
      imageSrc: eleganceImageSrc,
      tag: "Osobní projekt",
      tagColor: "bg-akali-secondary",
      title: "Nehtové studio Elegance",
      desc: "Elegantní prezentace a rezervace."
    },
    {
      href: "https://khgporadenstvi.cz/",
      imageSrc: terapieImageSrc,
      tag: "Web",
      tagColor: "bg-akali-primary",
      title: "Terapie online",
      desc: "Osobní brand a blog pro psychologa."
    },
    {
      href: "https://akali-web.github.io/camp-website/",
      imageSrc: campImageSrc,
      tag: "Osobní projekt",
      tagColor: "bg-akali-secondary",
      title: "Kemp pod lesem",
      desc: "Moderní web pro autokemp v Beskydech."
    }
  ];

  return (
    <section id="prace" className="py-16 px-6 bg-akali-bg relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-left mb-12">
          <motion.span
            className="text-akali-primary font-bold tracking-widest uppercase text-sm block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.span>
          <motion.h2
            className="font-sans font-bold text-4xl mt-2 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
          >
            Vybrané projekty
          </motion.h2>
          <motion.p
            className="text-gray-500 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ukázky práce, která pomáhá mým klientům růst.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => {
            // Alternate: right, left, right
            const direction = i % 2 === 0 ? 100 : -100;
            return (
              <motion.a
                key={i}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
                initial={{ opacity: 0, x: direction }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
              >
              <div className="relative overflow-visible rounded-3xl border-2 border-black/5 shadow-flat hover:shadow-flat-hover transition-all duration-300 bg-white mb-6">
                <div className="absolute inset-0 bg-akali-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20 rounded-3xl"></div>
                <span className={`absolute -top-3 -right-3 ${project.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-akali-dark shadow-neo-sm z-30`}>
                  {project.tag}
                </span>
                <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center overflow-hidden rounded-3xl">
                  <img src={project.imageSrc} alt={project.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <h3 className="font-bold text-2xl mb-1 group-hover:text-akali-primary transition-colors">{project.title}</h3>
              <p className="text-gray-500">{project.desc}</p>
            </motion.a>
          )})}
        </div>
      </div>
    </section>
  );
}
