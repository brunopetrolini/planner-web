import { ptBR } from 'date-fns/locale';
import { ArrowRight, Calendar, MapPin, Settings2, X } from 'lucide-react';
import { useState } from 'react';
import { DateRange, DayPicker } from 'react-day-picker';

import { Button } from '../../../components/button';

import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean;
  toggleGuestInput: () => void;
  setDestination: (destination: string) => void;
  setEventStartAndEndDates: (dates: DateRange | undefined) => void;
  eventStartAndEndDates: DateRange | undefined;
}

export function DestinationAndDateStep({
  isGuestInputOpen,
  toggleGuestInput,
  setDestination,
  setEventStartAndEndDates,
  eventStartAndEndDates,
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  function toggleDatePicker() {
    setIsDatePickerOpen(!isDatePickerOpen);
  }

  function dateFormat(date: Date) {
    return format(date, "d' de 'LLL", { locale: ptBR });
  }

  let displayedDate = null;
  if (eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to) {
    const from = dateFormat(eventStartAndEndDates.from);
    const to = dateFormat(eventStartAndEndDates.to);

    displayedDate = `${from} até ${to}`;
  }

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          onChange={(event) => setDestination(event.target.value)}
          disabled={isGuestInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
        />
      </div>

      <button
        disabled={isGuestInputOpen}
        onClick={toggleDatePicker}
        className="flex items-center gap-2 text-left w-[240px]"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 w-40 flex-1">{displayedDate || 'Quando?'}</span>
      </button>

      <div className="w-px h-6 bg-zinc-800" />

      {isGuestInputOpen ? (
        <Button variant="secondary" onClick={toggleGuestInput}>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={toggleGuestInput}>
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            {/* Modal Header */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>

                <button>
                  <X className="size-5" onClick={toggleDatePicker} />
                </button>
              </div>
            </div>

            <DayPicker
              locale={ptBR}
              mode="range"
              selected={eventStartAndEndDates}
              onSelect={setEventStartAndEndDates}
            />
          </div>
        </div>
      )}
    </div>
  );
}
