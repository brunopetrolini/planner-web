import { Link2, Plus } from 'lucide-react';
import { Button } from '../../../components/button';

interface ImportantLinksProps {
  createLink: () => void;
}

export function ImportantLinks({ createLink }: ImportantLinksProps) {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links Importantes</h2>

      {/* Links */}
      <div className="space-y-5">
        {/* Link */}
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
            <a href="#" className="block text-xs text-zinc-400 hover:text-zinc-200 truncate">
              https://www.airbnb.com.br/rooms/10470001146378264873264823687467836487236478
            </a>
          </div>

          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>

        {/* Link */}
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Regras da casa</span>
            <a href="#" className="block text-xs text-zinc-400 hover:text-zinc-200 truncate">
              https://www.notion.so/pages/10470001146378264873264823687467836487236478
            </a>
          </div>

          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>

      {/* Add Links Button */}
      <Button size="full" variant="secondary" onClick={createLink}>
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  );
}
