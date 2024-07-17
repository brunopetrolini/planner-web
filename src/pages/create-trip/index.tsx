import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ConfirmTripModal } from './modals/confirm-trip-modal';
import { InviteGuestsModal } from './modals/invite-guests-modal';
import { DestinationAndDateStep } from './steps/destination-and-date-step';
import { InviteGuestsStep } from './steps/invite-guests-step';

export function CreateTripPage() {
  const navigate = useNavigate();

  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

  function toggleGuestInput() {
    setIsGuestInputOpen(!isGuestInputOpen);
  }

  function toggleGuestsModal() {
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

    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  }

  function removeEmailToInvite(emailToRemove: string) {
    const newEmailsList = emailsToInvite.filter((email) => email !== emailToRemove);
    setEmailsToInvite(newEmailsList);
  }

  function createTrip(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
          <DestinationAndDateStep isGuestInputOpen={isGuestInputOpen} toggleGuestInput={toggleGuestInput} />

          {isGuestInputOpen && (
            <InviteGuestsStep
              toggleGuestsModal={toggleGuestsModal}
              toggleConfirmTripModal={toggleConfirmTripModal}
              emailsToInvite={emailsToInvite}
            />
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
        <InviteGuestsModal
          toggleGuestsModel={toggleGuestsModal}
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          removeEmailToInvite={removeEmailToInvite}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal toggleConfirmTripModal={toggleConfirmTripModal} createTrip={createTrip} />
      )}
    </div>
  );
}
