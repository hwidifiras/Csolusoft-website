# Configuration du Formulaire de Contact

Le formulaire de contact est maintenant configuré pour envoyer les emails à **contact@csolusoft.com**.

## 📧 Options d'envoi d'emails

### ✅ Option 1: Formspree (RECOMMANDÉ - Déjà implémenté)

**Avantages:**
- ✅ Gratuit jusqu'à 50 soumissions/mois
- ✅ Configuration en 2 minutes
- ✅ Pas de backend nécessaire
- ✅ Protection anti-spam intégrée
- ✅ Notifications email instantanées

**Configuration:**

1. **Créez un compte Formspree:**
   - Allez sur https://formspree.io/
   - Cliquez sur "Get Started" (gratuit)
   - Inscrivez-vous avec votre email

2. **Créez un nouveau formulaire:**
   - Cliquez sur "+ New Form"
   - Nom du formulaire: "Contact CSoluSoft"
   - Email de destination: **contact@csolusoft.com**
   - Cliquez sur "Create Form"

3. **Copiez votre Form ID:**
   - Vous verrez quelque chose comme: `https://formspree.io/f/xyzabc123`
   - Copiez la partie après `/f/` (exemple: `xyzabc123`)

4. **Mettez à jour le code:**
   - Ouvrez `pages/Contact.tsx`
   - Ligne 72, remplacez `YOUR_FORM_ID` par votre ID
   - Exemple: `https://formspree.io/f/xyzabc123`

5. **Testez:**
   - Remplissez le formulaire sur votre site
   - Vérifiez votre boîte mail contact@csolusoft.com

---

### Option 2: EmailJS (Alternative)

**Avantages:**
- ✅ Gratuit jusqu'à 200 emails/mois
- ✅ Templates d'emails personnalisables
- ✅ Plusieurs services email supportés

**Configuration:**

1. Allez sur https://www.emailjs.com/
2. Créez un compte gratuit
3. Ajoutez un service email (Gmail, Outlook, etc.)
4. Créez un template d'email
5. Installez la dépendance:
   ```bash
   npm install @emailjs/browser
   ```

6. Remplacez le code dans `Contact.tsx`:
   ```tsx
   import emailjs from '@emailjs/browser';

   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     if (!validateForm()) return;
     setStatus('submitting');

     try {
       await emailjs.send(
         'YOUR_SERVICE_ID',
         'YOUR_TEMPLATE_ID',
         {
           from_name: formData.name,
           from_email: formData.email,
           company: formData.company,
           subject: formData.subject,
           message: formData.message,
           to_email: 'contact@csolusoft.com'
         },
         'YOUR_PUBLIC_KEY'
       );
       
       setStatus('success');
       setFormData({ name: '', company: '', email: '', subject: 'Facturation Électronique', message: '' });
       setTimeout(() => setStatus('idle'), 5000);
     } catch (error) {
       console.error('Error:', error);
       setStatus('error');
       setTimeout(() => setStatus('idle'), 5000);
     }
   };
   ```

---

### Option 3: Backend personnalisé (Avancé)

Si vous voulez un contrôle total, créez votre propre API:

**Avec Netlify Functions (recommandé pour Netlify):**

1. Créez `netlify/functions/contact.ts`:
   ```typescript
   import type { Handler } from '@netlify/functions';
   import nodemailer from 'nodemailer';

   export const handler: Handler = async (event) => {
     if (event.httpMethod !== 'POST') {
       return { statusCode: 405, body: 'Method Not Allowed' };
     }

     const { name, email, company, subject, message } = JSON.parse(event.body || '{}');

     const transporter = nodemailer.createTransport({
       host: 'smtp.gmail.com',
       port: 587,
       secure: false,
       auth: {
         user: process.env.EMAIL_USER,
         pass: process.env.EMAIL_PASS
       }
     });

     try {
       await transporter.sendMail({
         from: process.env.EMAIL_USER,
         to: 'contact@csolusoft.com',
         replyTo: email,
         subject: `Nouveau contact: ${subject}`,
         html: `
           <h2>Nouveau message de contact</h2>
           <p><strong>Nom:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Entreprise:</strong> ${company}</p>
           <p><strong>Sujet:</strong> ${subject}</p>
           <p><strong>Message:</strong></p>
           <p>${message}</p>
         `
       });

       return {
         statusCode: 200,
         body: JSON.stringify({ message: 'Email sent successfully' })
       };
     } catch (error) {
       return {
         statusCode: 500,
         body: JSON.stringify({ error: 'Failed to send email' })
       };
     }
   };
   ```

2. Installez les dépendances:
   ```bash
   npm install nodemailer
   npm install -D @types/nodemailer
   ```

3. Configurez les variables d'environnement dans Netlify:
   - `EMAIL_USER`: votre email SMTP
   - `EMAIL_PASS`: votre mot de passe d'application

4. Mettez à jour `Contact.tsx`:
   ```tsx
   const response = await fetch('/.netlify/functions/contact', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData)
   });
   ```

---

## 🎯 Recommandation

**Utilisez Formspree** - C'est la solution la plus simple et la plus rapide. Vous serez opérationnel en 5 minutes!

## 📝 Checklist

- [ ] Créer un compte Formspree
- [ ] Créer un formulaire avec l'email contact@csolusoft.com
- [ ] Copier le Form ID
- [ ] Remplacer `YOUR_FORM_ID` dans Contact.tsx ligne 72
- [ ] Tester le formulaire
- [ ] Vérifier la réception des emails

## 🔒 Sécurité

Formspree inclut automatiquement:
- ✅ Protection anti-spam
- ✅ Validation des emails
- ✅ Rate limiting
- ✅ CAPTCHA optionnel

---

**Besoin d'aide?** Contactez-moi si vous avez des questions!
