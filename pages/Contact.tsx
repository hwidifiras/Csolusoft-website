
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

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
    
    // Simulate API call - Replace with actual API endpoint (EmailJS, Formspree, etc.)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send to your backend or service like:
      // await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', company: '', email: '', subject: 'Facturation Électronique', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Parlons de <span className="text-primary-500">votre projet.</span></h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Besoin d'un audit, d'un devis ou simplement de conseils ? Notre équipe d'experts est à votre écoute.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl shadow-slate-200">
               {status === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                     <CheckCircle className="w-5 h-5 text-green-600" />
                     <span className="text-green-700 font-medium">Message envoyé avec succès ! Nous vous répondrons sous 24h.</span>
                  </div>
               )}
               
               {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3">
                     <AlertCircle className="w-5 h-5 text-red-600" />
                     <span className="text-red-700 font-medium">Une erreur est survenue. Veuillez réessayer.</span>
                  </div>
               )}
               
               <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label htmlFor="name" className="text-sm font-bold text-slate-700">Nom complet *</label>
                       <input 
                         type="text" 
                         id="name"
                         name="name"
                         value={formData.name}
                         onChange={handleChange}
                         className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 focus:ring-primary-400'} focus:ring-2 outline-none transition-all`}
                         placeholder="Jean Dupont" 
                       />
                       {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                       <label htmlFor="company" className="text-sm font-bold text-slate-700">Entreprise</label>
                       <input 
                         type="text" 
                         id="company"
                         name="company"
                         value={formData.company}
                         onChange={handleChange}
                         className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-400 outline-none transition-all" 
                         placeholder="Société SAS" 
                       />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label htmlFor="email" className="text-sm font-bold text-slate-700">Email professionnel *</label>
                     <input 
                       type="email" 
                       id="email"
                       name="email"
                       value={formData.email}
                       onChange={handleChange}
                       className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 focus:ring-primary-400'} focus:ring-2 outline-none transition-all`}
                       placeholder="jean@entreprise.com" 
                     />
                     {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                     <label htmlFor="subject" className="text-sm font-bold text-slate-700">Sujet</label>
                     <select 
                       id="subject"
                       name="subject"
                       value={formData.subject}
                       onChange={handleChange}
                       className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-400 outline-none transition-all"
                     >
                        <option value="Facturation Électronique">Facturation Électronique</option>
                        <option value="ERP / CRM">ERP / CRM</option>
                        <option value="Développement Sur Mesure">Développement Sur Mesure</option>
                        <option value="Intelligence Artificielle">Intelligence Artificielle</option>
                        <option value="Autre demande">Autre demande</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label htmlFor="message" className="text-sm font-bold text-slate-700">Message *</label>
                     <textarea 
                       rows={4} 
                       id="message"
                       name="message"
                       value={formData.message}
                       onChange={handleChange}
                       className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 focus:ring-primary-400'} focus:ring-2 outline-none transition-all`}
                       placeholder="Comment pouvons-nous vous aider ?"
                     ></textarea>
                     {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-accent-500 text-white rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-accent-600 transition-all shadow-lg shadow-accent-200 disabled:opacity-70 disabled:cursor-not-allowed"
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
                     <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6 text-primary-500" />
                     </div>
                     <div>
                        <h4 className="text-xl font-bold mb-2">Email</h4>
                        <p className="text-slate-600">contact@csolusoft.com</p>
                        <p className="text-slate-600 text-sm">Réponse sous 24h ouvrées</p>
                     </div>
                  </div>
                  <div className="flex items-start space-x-6">
                     <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-primary-500" />
                     </div>
                     <div>
                        <h4 className="text-xl font-bold mb-2">Téléphone</h4>
                        <p className="text-slate-600">+33 (0)1 23 45 67 89</p>
                        <p className="text-slate-600 text-sm">Du lundi au vendredi, 9h-18h</p>
                     </div>
                  </div>
                  <div className="flex items-start space-x-6">
                     <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6 text-primary-500" />
                     </div>
                     <div>
                        <h4 className="text-xl font-bold mb-2">Bureaux</h4>
                        <p className="text-slate-600">123 Avenue de l'Innovation, 75000 Paris</p>
                     </div>
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
