import { motion } from 'framer-motion';

interface WhyMeProps {
  creativeWorkSrc: string;
}

export default function WhyMe({ creativeWorkSrc }: WhyMeProps) {
  return (
    <section id="proc-ja" className="py-16 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <img src={creativeWorkSrc} alt="Creative Process" className="w-full max-w-md animate-float-delayed mx-auto" />
          </motion.div>
          <div>
            <motion.h2
              className="font-sans font-bold text-4xl mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Nejsem agentura.<br />Jsem <span className="text-akali-primary">váš partner.</span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Každý projekt je jedinečný. Tvořím weby, které odrážejí vaši značku a oslovují vaše zákazníky.
            </motion.p>
            <div className="space-y-6">
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-akali-primary/10 rounded-lg flex items-center justify-center text-akali-primary flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Rychlost je základ</h3>
                  <p className="text-gray-500 text-sm">Optimalizovaný, čistý kód, který se načte dřív, než zákazník stihne mrknout.</p>
                </div>
              </motion.div>
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-akali-secondary/10 rounded-lg flex items-center justify-center text-akali-secondary flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Mobile First</h3>
                  <p className="text-gray-500 text-sm">Design tvořím primárně pro telefony, protože tam je dnes 70 % vašich zákazníků.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
