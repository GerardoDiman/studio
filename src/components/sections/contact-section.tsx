
'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/shared/section-wrapper';
import SectionTitle from '@/components/shared/section-title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos incompletos",
        description: "Por favor, rellena todos los campos del formulario.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const dataForFirebase = {
      ...formData,
      createdAt: Timestamp.now(),
    };

    const dataForN8n = { ...formData };

    let n8nSuccessful = false;
    let firestoreSuccessful = false;

    try {
      // Attempt to send to n8n webhook
      const webhookUrl = 'http://localhost:5678/webhook-test/30f766e6-dbbe-4b6d-9b9e-9b2e1fe33fa9';
      const n8nResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataForN8n),
      });

      if (n8nResponse.ok) {
        console.log("Datos enviados exitosamente a n8n");
        n8nSuccessful = true;
      } else {
        console.error("Error al enviar datos a n8n:", n8nResponse.status, n8nResponse.statusText);
        const responseBody = await n8nResponse.text();
        toast({
          title: "Error al Enviar a n8n",
          description: `Hubo un problema con el servicio de notificación (n8n). Código: ${n8nResponse.status}. ${responseBody || ''}`,
          variant: "destructive",
        });
      }
    } catch (networkError: any) {
      console.error("Error de red o conexión al enviar datos a n8n:", networkError);
      toast({
        title: "Error de Conexión (n8n)",
        description: `Hubo un problema de red al enviar tu mensaje a n8n. ${networkError.message || ''}`,
        variant: "destructive",
      });
    }

    // Attempt to save to Firestore
    try {
      await addDoc(collection(db, "contactMessages"), dataForFirebase);
      console.log("Datos guardados exitosamente en Firestore");
      firestoreSuccessful = true;
    } catch (firestoreError: any) {
      console.error("Error al guardar en Firestore:", firestoreError);
      let firestoreErrorMessage = "Hubo un problema al guardar tu mensaje en nuestra base de datos.";
      if (firestoreError.code === 'permission-denied') {
        firestoreErrorMessage = "Error de permisos al guardar en Firestore. Contacta al administrador.";
      } else if (firestoreError.message) {
        firestoreErrorMessage = `Error Firestore: ${firestoreError.message}`;
      }
      toast({
        title: "Error Guardando Mensaje",
        description: firestoreErrorMessage,
        variant: "destructive",
      });
    }

    // Final user feedback based on success of operations
    if (firestoreSuccessful) { // Primary success indicator is Firestore save
      toast({
          title: "Mensaje Enviado",
          description: "Gracias por contactarnos. Tu mensaje ha sido recibido y guardado.",
          variant: "success",
      });
      setFormData({ name: '', email: '', message: '' }); // Clear form on success
      if (!n8nSuccessful) {
          toast({ // Additional toast if n8n failed but Firestore succeeded
              title: "Aviso de Notificación",
              description: "Tu mensaje fue guardado, pero hubo un problema con el sistema de notificación externo.",
              variant: "default",
          });
      }
    } else if (n8nSuccessful && !firestoreSuccessful) {
        // n8n worked but Firestore failed
        toast({
          title: "Mensaje Enviado (Parcial)",
          description: "Tu mensaje fue enviado a nuestro sistema de notificación, pero no se pudo guardar en la base de datos principal.",
          variant: "default",
        });
        // Optionally clear form or not, depending on desired UX
    }
    // If both failed, individual error toasts would have already appeared.

    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: MapPin, text: 'San Pedro, Cholula, Puebla. 72760' },
    { icon: Phone, text: '9631372589' },
    { icon: Mail, text: 'gerardodiman@gmail.com' },
    { icon: Clock, text: 'Lunes - Viernes: 9:00 AM - 5:00 PM' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/GerardoDiman', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/GerardoDiman', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gerardodiman/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/gerarddaiz/', label: 'Instagram' },
  ];

  return (
    <SectionWrapper id="contacto" className="bg-background">
      <SectionTitle>Contáctanos</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Contact Form */}
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-primary mb-6">Envíanos un Mensaje</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Nombre Completo</label>
              <Input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                className="bg-input border-border focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Correo Electrónico</label>
              <Input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className="bg-input border-border focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Tu Mensaje</label>
              <Textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Escribe tu consulta aquí..."
                className="bg-input border-border focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground"
                required
                disabled={isSubmitting}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-md py-3 text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </Button>
          </form>
        </div>

        {/* Contact Info & Socials */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Información de Contacto</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <item.icon className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Síguenos</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button key={index} variant="outline" size="icon" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Link href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-6 w-6" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
