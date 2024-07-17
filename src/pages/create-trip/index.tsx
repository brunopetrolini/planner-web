import { ArrowRight, AtSign, Calendar, MapPin, Plus, Settings2, User, UserRoundPlus, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function CreateTripPage() {
  const navigate = useNavigate();

  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

  function toggleGuestInput() {
    setIsGuestInputOpen(!isGuestInputOpen);
  }

  function toggleGuestsModel() {
    setIsGuestsModalOpen(!isGuestsModalOpen);
  }

  function toggleConfirmTripModal() {
    setIsConfirmTripModalOpen(!isConfirmTripModalOpen);
  }

  function addNewEmailToInvite(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get('email')?.toString();

    if (!email) return;

    if (emailsToInvite.includes(email)) return;

    if (emailsToInvite.includes('exemplo@mail.com')) {
      return setEmailsToInvite([email]);
    }

    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  }

  function removeEmailToInvite(emailToRemove: string) {
    const newEmailsList = emailsToInvite.filter((email) => email !== emailToRemove);
    setEmailsToInvite(newEmailsList);
  }

  function createTrip() {
    navigate('/trips/1');
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="./src/assets/banner.svg" alt="planner" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">
          {/* Destination Input */}
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                disabled={isGuestInputOpen}
                onChange={(event) => setDestination(event.target.value)}
                type="text"
                placeholder="Para onde você vai?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                disabled={isGuestInputOpen}
                onChange={(event) => setDate(event.target.value)}
                type="text"
                placeholder="Quando?"
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
              />
            </div>

            <div className="w-px h-6 bg-zinc-800" />

            {isGuestInputOpen ? (
              <button
                className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700"
                onClick={toggleGuestInput}
              >
                Alterar local/data
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
                onClick={toggleGuestInput}
              >
                Continuar
                <ArrowRight className="size-5" />
              </button>
            )}
          </div>

          {/* Guest Input */}
          {isGuestInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <button onClick={toggleGuestsModel} type="button" className="flex items-center gap-2 flex-1 text-left">
                <UserRoundPlus className="size-5 text-zinc-400" />
                {emailsToInvite.length > 0 ? (
                  <span className="text-zinc-100 text-lg flex-1">{emailsToInvite.length} pessoa(s) convidada(s)</span>
                ) : (
                  <span className="text-zinc-400 text-lg flex-1">Quem estará na viagem?</span>
                )}
              </button>

              <div className="w-px h-6 bg-zinc-800" />

              <button
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
                onClick={toggleConfirmTripModal}
              >
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda
          <br />
          com nossos{' '}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{' '}
          e{' '}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen && (
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
      )}

      {isConfirmTripModalOpen && (
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
                <span className="font-semibold text-zinc-100">{destination}</span> nas datas de{' '}
                <span className="font-semibold text-zinc-100">{date}</span> preencha seus dados abaixo.
              </p>
            </div>

            {/* Add Owner Data Input */}
            <form onSubmit={addNewEmailToInvite} className="space-y-3">
              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <User className="size-5 text-zinc-400" />

                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>

              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <AtSign className="size-5 text-zinc-400" />

                <input
                  type="text"
                  name="email"
                  placeholder="Seu e-mail pessoal"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>

              <button
                onClick={createTrip}
                type="submit"
                className="bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium hover:bg-lime-400 flex gap-2 items-center justify-center w-full"
              >
                Confirmar criação da viagem
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
