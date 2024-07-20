import { Link2, Tag, X } from 'lucide-react';
import { Button } from '../../../components/button';
import { Input } from '../../../components/input';

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
          <Input type="text" name="title" placeholder="Título do link">
            <Tag className="size-5 text-zinc-400" />
          </Input>

          <Input type="text" name="url" placeholder="URL">
            <Link2 className="size-5 text-zinc-400" />
          </Input>

          <Button type="submit" size="full">
            Salvar link
          </Button>
        </form>
      </div>
    </div>
  );
}
