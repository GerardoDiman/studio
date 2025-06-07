
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

    const dataForN8n = { ...formData };

    try {
      const webhookUrl = 'https://n8n.srv858616.hstgr.cloud/webhook/30f766e6-dbbe-4b6d-9b9e-9b2e1fe33fa9';
      const n8nResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataForN8n),
      });

      if (n8nResponse.ok) {
        console.log("Datos enviados exitosamente a n8n webhook.");
        toast({
          title: "Mensaje Enviado",
          description: "Gracias por contactarnos. Tu mensaje ha sido enviado.",
          variant: "success",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const responseBody = await n8nResponse.text();
        const n8nErrorDetails = `Error del servidor n8n: ${n8nResponse.status}. ${responseBody || n8nResponse.statusText}`;
        console.error("Error al enviar datos a n8n:", n8nErrorDetails);
        toast({
          title: "Error en Envío",
          description: `Hubo un problema al enviar tu mensaje. ${n8nErrorDetails}`,
          variant: "destructive",
        });
      }
    } catch (networkError: any) {
      console.error("Detailed Fetch Error:", networkError);
      let userMessage = `No se pudo conectar con el servidor (${networkError.message || 'Error desconocido'}).`;
      if (networkError.name === 'TypeError' && networkError.message === 'Failed to fetch') {
        userMessage += " Esto suele ser un problema de CORS o de red. Por favor, verifica la configuración CORS de tu webhook n8n y tu conexión a internet. Revisa la pestaña 'Network' en las herramientas de desarrollador de tu navegador para más detalles (busca solicitudes fallidas en rojo).";
      } else {
        userMessage += " Verifica tu conexión a internet o la configuración CORS del webhook.";
      }
      toast({
        title: "Error de Red/CORS",
        description: userMessage,
        variant: "destructive",
      });
    }

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

