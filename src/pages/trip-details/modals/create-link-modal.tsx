import { Link2, Tag, X } from 'lucide-react';
import { Button } from '../../../components/button';

interface CreateLinkModalProps {
  toggleCreateLinkModal: () => void;
}

export function CreateLinkModal({ toggleCreateLinkModal }: CreateLinkModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        {/* Modal Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar link</h2>

            <button>
              <X className="size-5" onClick={toggleCreateLinkModal} />
            </button>
          </div>

          <p className="text-sm text-zinc-400">Todos os convidados podem visualizar os links importantes.</p>
        </div>

        {/* Add link Form */}
        <form onSubmit={() => {}} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="size-5 text-zinc-400" />

            <input
              type="text"
              name="title"
              placeholder="Título do link"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Link2 className="size-5 text-zinc-400" />

            <input
              type="text"
              name="url"
              placeholder="URL"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <Button type="submit" size="full">
            Salvar link
          </Button>
        </form>
      </div>
    </div>
  );
}
