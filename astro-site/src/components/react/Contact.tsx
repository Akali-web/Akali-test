import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  // Set custom validation messages in Czech
  useEffect(() => {
    if (formRef.current) {
      const inputs = formRef.current.querySelectorAll('input, textarea');
      inputs.forEach((input: any) => {
        input.addEventListener('invalid', (e: Event) => {
          e.preventDefault();
          const target = e.target as HTMLInputElement;

          if (target.validity.valueMissing) {
            if (target.name === 'name') setErrors(prev => ({ ...prev, name: 'Vyplňte prosím své jméno' }));
            if (target.name === 'email') setErrors(prev => ({ ...prev, email: 'Vyplňte prosím email' }));
            if (target.name === 'message') setErrors(prev => ({ ...prev, message: 'Napište mi prosím zprávu' }));
          } else if (target.validity.typeMismatch && target.type === 'email') {
            setErrors(prev => ({ ...prev, email: 'Zadejte platný email (např. jan@novak.cz)' }));
          } else if (target.validity.patternMismatch) {
            if (target.name === 'name') setErrors(prev => ({ ...prev, name: 'Jméno může obsahovat pouze písmena' }));
          }
        });
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({ name: '', email: '', message: '' });
    setErrorMessage('');

    // Validate
    let hasError = false;
    if (!formState.name.trim()) {
      setErrors(prev => ({ ...prev, name: 'Vyplňte prosím své jméno' }));
      hasError = true;
    }
    if (!formState.email.trim()) {
      setErrors(prev => ({ ...prev, email: 'Vyplňte prosím email' }));
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      setErrors(prev => ({ ...prev, email: 'Zadejte platný email (např. jan@novak.cz)' }));
      hasError = true;
    }
    if (!formState.message.trim()) {
      setErrors(prev => ({ ...prev, message: 'Napište mi prosím zprávu' }));
      hasError = true;
    }

    if (hasError) return;

    setStatus('submitting');

    try {
      // Create FormData and add values from state
      const formData = new FormData();
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('message', formState.message);
      formData.append('access_key', 'd3db05d5-091e-4dd9-a74d-31f0411b9525');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Nastala chyba při odesílání. Zkuste to prosím znovu.');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Nastala chyba při odesílání. Kontaktujte nás prosím přímo na podpora@akali.cz');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="kontakt" className="py-16 px-6 bg-akali-bg border-t border-black/5">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            className="text-akali-primary font-bold tracking-widest uppercase text-sm block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Kontakt
          </motion.span>
          <motion.h2
            className="font-sans font-bold text-4xl mt-2 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
          >
            Pojďme tvořit.
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Napište mi, co potřebujete. Odpovím do 24 hodin a společně vymyslíme řešení, které posune váš byznys.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Contact Cards */}
          <motion.a
            href="mailto:podpora@akali.cz"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 group p-6 bg-white rounded-2xl border-2 border-transparent hover:border-akali-dark transition-all shadow-sm hover:shadow-md"
          >
            <div className="w-14 h-14 bg-akali-primary/10 rounded-full flex items-center justify-center text-akali-primary group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase">Email</p>
              <p className="text-xl font-bold">podpora@akali.cz</p>
            </div>
          </motion.a>

          <motion.a
            href="tel:+420735040975"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 group p-6 bg-white rounded-2xl border-2 border-transparent hover:border-akali-dark transition-all shadow-sm hover:shadow-md"
          >
            <div className="w-14 h-14 bg-akali-secondary/10 rounded-full flex items-center justify-center text-akali-secondary group-hover:scale-110 transition-transform">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase">Telefon</p>
              <p className="text-xl font-bold">+420 735 040 975</p>
            </div>
          </motion.a>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-akali-dark/5 shadow-xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-bold uppercase mb-2 ml-1 text-gray-500">
                  Jméno
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formState.name}
                  onChange={e => {
                    setFormState({...formState, name: e.target.value});
                    setErrors(prev => ({ ...prev, name: '' }));
                  }}
                  className={`w-full p-4 rounded-xl bg-gray-50 border-2 ${errors.name ? 'border-red-500' : 'border-transparent'} focus:border-akali-primary outline-none transition-all font-semibold`}
                  placeholder="Jan Novák"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2 ml-1 font-bold">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold uppercase mb-2 ml-1 text-gray-500">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formState.email}
                  onChange={e => {
                    setFormState({...formState, email: e.target.value});
                    setErrors(prev => ({ ...prev, email: '' }));
                  }}
                  className={`w-full p-4 rounded-xl bg-gray-50 border-2 ${errors.email ? 'border-red-500' : 'border-transparent'} focus:border-akali-primary outline-none transition-all font-semibold`}
                  placeholder="jan@email.cz"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2 ml-1 font-bold">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold uppercase mb-2 ml-1 text-gray-500">
                  Zpráva
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={e => {
                    setFormState({...formState, message: e.target.value});
                    setErrors(prev => ({ ...prev, message: '' }));
                  }}
                  className={`w-full p-4 rounded-xl bg-gray-50 border-2 ${errors.message ? 'border-red-500' : 'border-transparent'} focus:border-akali-primary outline-none transition-all font-semibold resize-none`}
                  placeholder="Jak vám mohu pomoci?"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-2 ml-1 font-bold">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={status !== 'idle'}
                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                className={`w-full py-4 rounded-xl font-bold text-lg shadow-flat hover:shadow-flat-hover hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-flat-sm transition-all border-2 border-akali-dark flex items-center justify-center gap-2
                  ${status === 'success' ? 'bg-green-500 border-green-600 text-white' : status === 'error' ? 'bg-red-500 border-red-600 text-white' : 'bg-akali-primary text-white'}
                  ${status !== 'idle' ? 'cursor-not-allowed opacity-75' : ''}`}
              >
                {status === 'idle' && (
                  <>
                    Odeslat <Send size={18} />
                  </>
                )}
                {status === 'submitting' && 'Odesílám...'}
                {status === 'success' && 'Odesláno! ✓'}
                {status === 'error' && 'Chyba'}
              </motion.button>
              {status === 'error' && errorMessage && (
                <p className="text-red-500 text-sm mt-2 text-center font-bold">{errorMessage}</p>
              )}
              {status === 'success' && (
                <p className="text-green-600 text-sm mt-2 text-center font-bold">Děkujeme! Vaše zpráva byla odeslána.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
