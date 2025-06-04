
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Copy, CheckCircle } from 'lucide-react';
import SectionWrapper from '@/components/shared/section-wrapper';
import SectionTitle from '@/components/shared/section-title';
import { automationRecommendation, AutomationRecommendationInput } from '@/ai/flows/automation-recommendation';
import TypingEffect from '@/components/client/typing-effect';
import { cn } from '@/lib/utils';

// Basic Markdown to HTML parser
function simpleMarkdownToHtml(markdown: string): string {
  if (!markdown) return '';
  let html = markdown;
  // Headers (all levels to bold)
  html = html.replace(/^#+\s*(.+)$/gm, '<strong>$1</strong>');
  // Lists
  html = html.replace(/^\s*[-*+]\s+(.+)$/gm, '<li>$1</li>');
  // Wrap consecutive LIs in UL
  html = html.replace(/(<li>.*?<\/li>\s*)+/gs, (match) => `<ul>${match.replace(/\s*$/, '')}</ul>`);
  // Remove duplicate ULs if any from nested replacements
  html = html.replace(/<\/ul>\s*<ul>/gs, '');
  // Newlines to <br>
  html = html.replace(/\n/g, '<br />');
  return html;
}

export default function AiRecommendationSection() {
  const [processDescription, setProcessDescription] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!processDescription.trim()) {
      setError('Por favor, describe tu proceso o desafío.');
      return;
    }
    setIsLoading(true);
    setError('');
    setRecommendation('');

    try {
      const input: AutomationRecommendationInput = { processDescription };
      const result = await automationRecommendation(input);
      setRecommendation(result.recommendation);
    } catch (err) {
      console.error('Error getting AI recommendation:', err);
      setError('Ocurrió un error al generar la recomendación. Por favor, intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(recommendation).then(() => {
      toast({
        title: '¡Éxito!',
        description: 'Recomendación copiada al portapapeles.',
        variant: 'success',
      });
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
      toast({
        title: 'Error',
        description: 'No se pudo copiar la recomendación.',
        variant: 'destructive',
      });
    });
  };

  return (
    <SectionWrapper id="recomendacion-ia" className="bg-card">
      <SectionTitle>
        <TypingEffect texts={['Obtén tu Recomendación de Automatización']} className="inline" /> <span role="img" aria-label="sparks" className="inline-block ml-1">✨</span>
      </SectionTitle>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
        Describe tu proceso de negocio o el desafío que enfrentas, y nuestra IA te proporcionará una recomendación de automatización personalizada utilizando nuestros servicios.
      </p>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div>
          <Textarea
            placeholder="Ej: 'Pasamos mucho tiempo copiando datos manualmente de correos electrónicos a nuestra hoja de cálculo de CRM...'"
            value={processDescription}
            onChange={(e) => setProcessDescription(e.target.value)}
            rows={6}
            className="bg-input border-border focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground"
            aria-label="Descripción del proceso o desafío"
          />
        </div>
        <Button 
          type="submit" 
          disabled={isLoading} 
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg py-3 text-base"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Generando Recomendación...
            </>
          ) : (
            'Obtener Recomendación'
          )}
        </Button>
      </form>

      {error && (
        <p className="mt-6 text-center text-red-500 dark:text-red-400 font-medium">{error}</p>
      )}

      {recommendation && !isLoading && (
        <div className="mt-10 p-6 bg-background rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-primary mb-4">Tu Recomendación Personalizada:</h3>
          <div 
            className="prose prose-invert dark:prose-invert max-w-none text-foreground space-y-3"
            dangerouslySetInnerHTML={{ __html: simpleMarkdownToHtml(recommendation) }}
          />
          <Button 
            onClick={handleCopy} 
            variant="outline" 
            className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Copiar recomendación"
            >
            {isCopied ? <CheckCircle className="mr-2 h-5 w-5" /> : <Copy className="mr-2 h-5 w-5" />}
            {isCopied ? 'Copiado' : 'Copiar Recomendación'}
          </Button>
        </div>
      )}
    </SectionWrapper>
  );
}
