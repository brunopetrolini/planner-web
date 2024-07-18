import { Calendar, CircleDashed, Link2, LucideCircleCheck, MapPin, Plus, Settings2, UserCog } from 'lucide-react';

export function TripDetailsPage() {
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      {/* Header */}
      <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
        {/* Left Container */}
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className=" text-zinc-100">Poços de Caldas, Brasil</span>
        </div>

        {/* Right Container */}
        <div className="flex items-center gap-5">
          {/* Date */}
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100">17 a 23 de Agosto</span>
          </div>

          {/* Separator */}
          <div className="w-px h-6 bg-zinc-800" />

          {/* Alter Local/Date Button */}
          <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
            Alterar local/data
            <Settings2 className="size-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <main className="flex gap-16 px-4">
        {/* Left Column */}
        <div className="flex-1 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>

            <button className="flex items-center gap-2 bg-lime-300 hover:bg-lime-400 text-lime-900 rounded-lg px-5 py-2 font-medium">
              <Plus className="size-5" />
              Cadastrar atividade
            </button>
          </div>

          {/* Activities */}
          <div className="space-y-8">
            {/* Activity Day */}
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                <span className="text-xs text-zinc-500">Sábado</span>
              </div>

              <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
            </div>

            {/* Activity Day */}
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                <span className="text-xs text-zinc-500">Domingo</span>
              </div>

              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <LucideCircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <LucideCircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Almoço</span>
                  <span className="text-zinc-400 text-sm ml-auto">12:00h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-80 space-y-6">
          {/* Important Links */}
          <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links Importantes</h2>

            {/* Links */}
            <div className="space-y-5">
              {/* Link */}
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
                  <a href="#" className="block text-xs text-zinc-400 hover:text-zinc-200 truncate">
                    https://www.airbnb.com.br/rooms/10470001146378264873264823687467836487236478
                  </a>
                </div>

                <Link2 className="size-5 text-zinc-400 shrink-0" />
              </div>

              {/* Link */}
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">Regras da casa</span>
                  <a href="#" className="block text-xs text-zinc-400 hover:text-zinc-200 truncate">
                    https://www.notion.so/pages/10470001146378264873264823687467836487236478
                  </a>
                </div>

                <Link2 className="size-5 text-zinc-400 shrink-0" />
              </div>
            </div>

            {/* Add Links Button */}
            <button className="flex items-center justify-center gap-2 w-full rounded-lg px-5 h-11 bg-zinc-800 hover:bg-zinc-700 font-medium">
              <Plus className="size-5" />
              Cadastrar novo link
            </button>
          </div>

          {/* Separator */}
          <div className="w-full h-px bg-zinc-800" />

          {/* Guests */}
          <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>

            {/* Guests List */}
            <div className="space-y-5">
              {/* Guest */}
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">John Doe</span>
                  <span className="block text-sm text-zinc-400 truncate">john.doe@mail.com</span>
                </div>

                <CircleDashed className="size-5 text-zinc-400 shrink-0" />
              </div>

              {/* Guest */}
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">Jane Doe</span>
                  <span className="block text-sm text-zinc-400 truncate">jane.doe@mail.com</span>
                </div>

                <CircleDashed className="size-5 text-zinc-400 shrink-0" />
              </div>
            </div>

            {/* Manager Guest Button */}
            <button className="flex items-center justify-center gap-2 w-full rounded-lg px-5 h-11 bg-zinc-800 hover:bg-zinc-700 font-medium">
              <UserCog className="size-5" />
              Gerenciar convidados
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
