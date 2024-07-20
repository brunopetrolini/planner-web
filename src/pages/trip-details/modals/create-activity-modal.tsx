import { Calendar, Tag, X } from 'lucide-react';
import { Button } from '../../../components/button';
import { Input } from '../../../components/input';

interface CreateActivityModalProps {
  toggleCreateActivityModal: () => void;
}

export function CreateActivityModal({ toggleCreateActivityModal }: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        {/* Modal Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button>
              <X className="size-5" onClick={toggleCreateActivityModal} />
            </button>
          </div>

          <p className="text-sm text-zinc-400">Todos os convidados podem visualizar as atividades.</p>
        </div>

        {/* Add Activity Form */}
        <form className="space-y-3">
          <Input type="text" name="name" placeholder="Qual a atividade?">
            <Tag className="size-5 text-zinc-400" />
          </Input>

          <Input type="datetime-local" name="occurs_at" placeholder="Data e horário da atividade">
            <Calendar className="size-5 text-zinc-400" />
          </Input>

          <Button type="submit" size="full">
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  );
}
