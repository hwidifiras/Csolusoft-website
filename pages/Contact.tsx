
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';

interface FormData {
  name: string;
  company: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    subject: 'Facturation Électronique',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('submitting');

    try {
      // Formspree endpoint - Remplacez YOUR_FORM_ID par votre ID Formspree
      // 1. Allez sur https://formspree.io/
      // 2. Créez un compte gratuit
      // 3. Créez un nouveau formulaire avec l'email: contact@csolusoft.com
      // 4. Copiez votre Form ID et remplacez ci-dessous
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email, // Pour répondre directement au client
          _subject: `Nouveau contact: ${formData.subject}` // Sujet de l'email
        })
      });

      if (response.ok) {
        console.log('Form submitted successfully:', formData);
        setStatus('success');
        setFormData({ name: '', company: '', email: '', subject: 'Facturation Électronique', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-dark-900 min-h-screen transition-colors">
      <SEO
        title="Contact"
        description="Contactez CSoluSoft pour vos projets de transformation digitale. Devis gratuit, conseils personnalisés et support 24/7. Basés à Sfax, Tunisie."
        keywords="contact CSoluSoft, devis gratuit, Sfax, Tunisie, support, conseil, projet informatique"
        url="/contact"
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">Parlons de <span className="text-primary-500 dark:text-accent-400">votre projet.</span></h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Besoin d'un audit, d'un devis ou simplement de conseils ? Notre équipe d'experts est à votre écoute.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="bg-white dark:bg-dark-800 p-10 md:p-12 rounded-[3rem] shadow-xl shadow-slate-200 dark:shadow-black/20">
              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-500/20 border border-green-200 dark:border-green-500/30 rounded-xl flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-green-700 dark:text-green-300 font-medium">Message envoyé avec succès ! Nous vous répondrons sous 24h.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-500/20 border border-red-200 dark:border-red-500/30 rounded-xl flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <span className="text-red-700 dark:text-red-300 font-medium">Une erreur est survenue. Veuillez réessayer.</span>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-slate-700 dark:text-slate-200">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-dark-700 text-slate-900 dark:text-white ${errors.name ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 dark:border-slate-600 focus:ring-primary-400 dark:focus:ring-accent-400'} focus:ring-2 outline-none transition-all`}
                      placeholder="Jean Dupont"
                    />
                    {errors.name && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-bold text-slate-700 dark:text-slate-200">Entreprise</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-dark-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-400 dark:focus:ring-accent-400 outline-none transition-all"
                      placeholder="Société SAS"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-200">Email professionnel *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-dark-700 text-slate-900 dark:text-white ${errors.email ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 dark:border-slate-600 focus:ring-primary-400 dark:focus:ring-accent-400'} focus:ring-2 outline-none transition-all`}
                    placeholder="jean@entreprise.com"
                  />
                  {errors.email && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-slate-700 dark:text-slate-200">Sujet</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-dark-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-400 dark:focus:ring-accent-400 outline-none transition-all"
                  >
                    <option value="Facturation Électronique">Facturation Électronique</option>
                    <option value="ERP / CRM">ERP / CRM</option>
                    <option value="Développement Sur Mesure">Développement Sur Mesure</option>
                    <option value="Intelligence Artificielle">Intelligence Artificielle</option>
                    <option value="Autre demande">Autre demande</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-200">Message *</label>
                  <textarea
                    rows={4}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-dark-700 text-slate-900 dark:text-white ${errors.message ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 dark:border-slate-600 focus:ring-primary-400 dark:focus:ring-accent-400'} focus:ring-2 outline-none transition-all`}
                    placeholder="Comment pouvons-nous vous aider ?"
                  ></textarea>
                  {errors.message && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-accent-500 text-white rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-accent-600 transition-all shadow-lg shadow-accent-200 dark:shadow-accent-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Envoyer la demande</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Info & Booking */}
            <div className="flex flex-col justify-between">
              <div className="space-y-12">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white dark:bg-dark-700 rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary-500 dark:text-accent-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Email</h4>
                    <a href="mailto:contact@csolusoft.com" className="text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-accent-400">contact@csolusoft.com</a>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Réponse sous 24h ouvrées</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white dark:bg-dark-700 rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary-500 dark:text-accent-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Téléphone</h4>
                    <div className="space-y-1">
                      <a href="tel:+21628118244" className="block text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-accent-400">+216 28 118 244</a>
                      <a href="tel:+21626192219" className="block text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-accent-400">+216 26 192 219</a>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Du lundi au vendredi, 9h-18h</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-green-500 rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">WhatsApp</h4>
                    <a href="https://wa.me/21658874825" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-green-500">+216 58 874 825</a>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Réponse rapide</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white dark:bg-dark-700 rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary-500 dark:text-accent-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Bureaux</h4>
                    <p className="text-slate-600 dark:text-slate-300">Route Mahdia Km 3, Imm Amal<br />Sfax, Tunisie</p>
                  </div>
                </div>

                {/* Carte OpenStreetMap */}
                <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm">
                  <iframe
                    title="Localisation CSoluSoft"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=10.770749661273449%2C34.758771300527196%2C10.774749661273449%2C34.762771300527196&layer=mapnik&marker=34.760771300527196%2C10.77274966127345"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    loading="lazy"
                    className="w-full"
                  ></iframe>
                </div>
              </div>

              <div className="mt-16 p-8 bg-dark-900 rounded-[2.5rem] text-white">
                <div className="flex items-center space-x-4 mb-6">
                  <Calendar className="w-8 h-8 text-primary-300" />
                  <h4 className="text-2xl font-bold">Un rendez-vous ?</h4>
                </div>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Planifiez un appel de 15 minutes avec l'un de nos consultants pour une pré-analyse gratuite de votre besoin.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-primary-50 transition-all text-center"
                >
                  Réserver un créneau
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
