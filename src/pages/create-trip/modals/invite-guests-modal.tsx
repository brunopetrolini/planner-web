import { AtSign, Plus, X } from 'lucide-react';

interface InviteGuestsModalProps {
  toggleGuestsModel: () => void;
  emailsToInvite: string[];
  addNewEmailToInvite: (event: React.FormEvent<HTMLFormElement>) => void;
  removeEmailToInvite: (emailToRemove: string) => void;
}

export function InviteGuestsModal({
  toggleGuestsModel,
  emailsToInvite,
  addNewEmailToInvite,
  removeEmailToInvite,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        {/* Modal Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>

            <button>
              <X className="size-5" onClick={toggleGuestsModel} />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na viagem.
          </p>
        </div>

        {/* Email Container */}
        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => (
            <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
              <span className="text-zinc-300">{email}</span>
              <button type="button" onClick={() => removeEmailToInvite(email)}>
                <X className="size-4 text-zinc-400" />
              </button>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-zinc-800" />

        {/* Add Email Input */}
        <form
          onSubmit={addNewEmailToInvite}
          className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
        >
          <div className="flex items-center px-2 flex-1 gap-2">
            <AtSign className="size-5 text-zinc-400" />

            <input
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <button
            type="submit"
            className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400 flex gap-2 items-center"
          >
            Convidar
            <Plus className="size-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
