import { useState } from 'react';
import { ActivitiesList } from './components/activities-list';
import { DestinationAndDateHeader } from './components/destination-and-date-header';
import { GuestsList } from './components/guests-list';
import { ImportantLinks } from './components/important-links';
import { CreateActivityModal } from './modals/create-activity-modal';
import { CreateLinkModal } from './modals/create-link-modal';

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false);
  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false);

  function toggleCreateActivityModal() {
    setIsCreateActivityModalOpen(!isCreateActivityModalOpen);
  }

  function toggleCreateLinkModal() {
    setIsCreateLinkModalOpen(!isCreateLinkModalOpen);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />

      {/* Content */}
      <main className="flex gap-16 px-4">
        <ActivitiesList toggleCreateActivityModal={toggleCreateActivityModal} />

        {/* Sidebar */}
        <div className="w-80 space-y-6">
          <ImportantLinks createLink={toggleCreateLinkModal} />

          {/* Separator */}
          <div className="w-full h-px bg-zinc-800" />

          <GuestsList />
        </div>
      </main>

      {isCreateActivityModalOpen && <CreateActivityModal toggleCreateActivityModal={toggleCreateActivityModal} />}

      {isCreateLinkModalOpen && <CreateLinkModal toggleCreateLinkModal={toggleCreateLinkModal} />}
    </div>
  );
}
