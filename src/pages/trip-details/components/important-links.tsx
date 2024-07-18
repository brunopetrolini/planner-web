import { Link2, Plus } from 'lucide-react';

export function ImportantLinks() {
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
      <button className="flex items-center justify-center gap-2 w-full rounded-lg px-5 h-11 bg-zinc-800 hover:bg-zinc-700 font-medium">
        <Plus className="size-5" />
        Cadastrar novo link
      </button>
    </div>
  );
}
