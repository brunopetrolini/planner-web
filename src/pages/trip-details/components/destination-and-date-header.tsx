import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar, MapPin, Settings2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../../components/button';
import { api } from '../../../lib/axios';

interface Trip {
  id: string;
  destination: string;
  starts_at: string;
  ends_at: string;
  is_confirmed: boolean;
}

export function DestinationAndDateHeader() {
  const { tripId } = useParams();

  const [trip, setTrip] = useState<Trip | undefined>();

  useEffect(() => {
    api.get(`/trips/${tripId}`).then((response) => setTrip(response.data.trip));
  }, [tripId]);

  function dateFormat(date: string) {
    return format(date, "d' de 'LLL", { locale: ptBR });
  }

  let displayedDate = null;
  if (trip) {
    const from = dateFormat(trip.starts_at);
    const to = dateFormat(trip.ends_at);

    displayedDate = `${from} até ${to}`;
  }

  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      {/* Left Container */}
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className=" text-zinc-100">{trip?.destination}</span>
      </div>

      {/* Right Container */}
      <div className="flex items-center gap-5">
        {/* Date */}
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100">{displayedDate}</span>
        </div>

        {/* Separator */}
        <div className="w-px h-6 bg-zinc-800" />

        <Button onClick={() => alert('onClick')} variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  );
}
