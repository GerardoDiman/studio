
'use client';

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import {
  collection,
  query,
  orderBy,
  doc,
  deleteDoc,
  Timestamp,
  onSnapshot
} from 'firebase/firestore';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Loader2, Trash2, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import SectionWrapper from '@/components/shared/section-wrapper';
import SectionTitle from '@/components/shared/section-title';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt?: Timestamp;
}

export default function ContactMessagesAdminPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterText, setFilterText] = useState('');
  const [messageToDelete, setMessageToDelete] = useState<ContactMessage | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    setIsLoading(true);
    const messagesCol = collection(db, 'contactMessages');
    const q = query(messagesCol, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedMessages: ContactMessage[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        fetchedMessages.push({
          id: doc.id,
          name: data.name,
          email: data.email,
          message: data.message,
          createdAt: data.createdAt as Timestamp,
        });
      });
      setMessages(fetchedMessages);
      setIsLoading(false);
      setError(null);
    }, (err) => {
      console.error("Error fetching contact messages:", err);
      setError("Fallo al cargar los mensajes. Revisa la consola para más detalles.");
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async () => {
    if (!messageToDelete) return;
    try {
      await deleteDoc(doc(db, 'contactMessages', messageToDelete.id));
      toast({
        title: 'Mensaje Eliminado',
        description: `El mensaje de ${messageToDelete.name} ha sido eliminado.`,
        variant: 'success',
      });
      setMessageToDelete(null);
    } catch (err) {
      console.error("Error deleting message:", err);
      toast({
        title: 'Error al Eliminar',
        description: 'No se pudo eliminar el mensaje. Intenta de nuevo.',
        variant: 'destructive',
      });
      setError("Fallo al eliminar el mensaje.");
    }
  };

  const filteredMessages = messages.filter(
    (msg) =>
      msg.name.toLowerCase().includes(filterText.toLowerCase()) ||
      msg.email.toLowerCase().includes(filterText.toLowerCase()) ||
      msg.message.toLowerCase().includes(filterText.toLowerCase())
  );

  if (isLoading) {
    return (
      <SectionWrapper className="min-h-screen py-10">
        <div className="flex justify-center items-center min-h-[400px]">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="ml-4 text-lg text-muted-foreground">Cargando mensajes...</p>
        </div>
      </SectionWrapper>
    );
  }

  if (error) {
    return (
      <SectionWrapper className="min-h-screen py-10">
        <div className="text-center text-destructive bg-destructive/10 p-6 rounded-md">
          <p className="text-xl font-semibold">Error</p>
          <p>{error}</p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="admin-contact-messages" className="min-h-screen py-10">
      <SectionTitle>Mensajes de Contacto</SectionTitle>
      <div className="mb-6 relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
        <Input
          type="text"
          placeholder="Filtrar por nombre, email o mensaje..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="pl-10 w-full md:w-1/2 lg:w-1/3 bg-input border-border focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground"
          aria-label="Filtrar mensajes"
        />
      </div>

      {filteredMessages.length === 0 && !isLoading ? (
        <div className="text-center text-muted-foreground mt-12 py-8 bg-card rounded-md shadow">
            <p className="text-lg">No se encontraron mensajes{filterText && ' que coincidan con el filtro'}.</p>
        </div>
      ) : (
      <div className="overflow-x-auto bg-card p-4 sm:p-6 rounded-lg shadow-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px] text-muted-foreground">Fecha</TableHead>
              <TableHead className="w-[200px] text-muted-foreground">Nombre</TableHead>
              <TableHead className="w-[250px] text-muted-foreground">Email</TableHead>
              <TableHead className="text-muted-foreground">Mensaje</TableHead>
              <TableHead className="text-right w-[100px] text-muted-foreground">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMessages.map((msg) => (
              <TableRow key={msg.id} className="hover:bg-muted/50">
                <TableCell className="text-sm">
                  {msg.createdAt
                    ? msg.createdAt.toDate().toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'short' })
                    : 'N/A'}
                </TableCell>
                <TableCell className="font-medium text-foreground">{msg.name}</TableCell>
                <TableCell className="text-sm text-primary hover:underline">
                    <a href={`mailto:${msg.email}`}>{msg.email}</a>
                </TableCell>
                <TableCell className="max-w-xs truncate text-sm text-muted-foreground" title={msg.message}>{msg.message}</TableCell>
                <TableCell className="text-right">
                   <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={() => setMessageToDelete(msg)} aria-label="Eliminar mensaje">
                        <Trash2 className="h-5 w-5 text-destructive hover:text-destructive/80 transition-colors" />
                      </Button>
                    </AlertDialogTrigger>
                    {messageToDelete && messageToDelete.id === msg.id && (
                        <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>¿Estás realmente seguro?</AlertDialogTitle>
                            <AlertDialogDescription>
                            Esta acción no se puede deshacer. Esto eliminará permanentemente el mensaje de
                            <span className="font-semibold text-foreground"> {messageToDelete.name}</span>.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel onClick={() => setMessageToDelete(null)}>Cancelar</AlertDialogCancel>
                            <AlertDialogAction
                            onClick={handleDelete}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                            Sí, Eliminar Mensaje
                            </AlertDialogAction>
                        </AlertDialogFooter>
                        </AlertDialogContent>
                    )}
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      )}
    </SectionWrapper>
  );
}

