import { AtSign, User, X } from 'lucide-react';
import { Button } from '../../../components/button';
import { Input } from '../../../components/input';

interface ConfirmTripModalProps {
  toggleConfirmTripModal: () => void;
  createTrip: (event: React.FormEvent<HTMLFormElement>) => void;
  setOwnerName: (name: string) => void;
  setOwnerEmail: (email: string) => void;
}

export function ConfirmTripModal({
  toggleConfirmTripModal,
  createTrip,
  setOwnerName,
  setOwnerEmail,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        {/* Modal Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirmar criação de viagem</h2>

            <button>
              <X className="size-5" onClick={toggleConfirmTripModal} />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{' '}
            <span className="font-semibold text-zinc-100">Florianópolis, Brasil</span> nas datas de{' '}
            <span className="font-semibold text-zinc-100">12 a 16 de Agosto</span> preencha seus dados abaixo.
          </p>
        </div>

        {/* Add Owner Data Input */}
        <form onSubmit={createTrip} className="space-y-3">
          <Input
            type="text"
            name="name"
            placeholder="Seu nome completo"
            onChange={(event) => setOwnerName(event.target.value)}
          >
            <User className="size-5 text-zinc-400" />
          </Input>

          <Input
            type="text"
            name="email"
            placeholder="Seu e-mail pessoal"
            onChange={(event) => setOwnerEmail(event.target.value)}
          >
            <AtSign className="size-5 text-zinc-400" />
          </Input>

          <Button type="submit" size="full">
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  );
}
