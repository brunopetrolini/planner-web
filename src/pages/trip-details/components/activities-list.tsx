import { LucideCircleCheck, Plus } from 'lucide-react';

interface ActivitiesListProps {
  toggleCreateActivityModal: () => void;
}

export function ActivitiesList({ toggleCreateActivityModal }: ActivitiesListProps) {
  return (
    <div className="flex-1 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Atividades</h2>

        <button
          onClick={toggleCreateActivityModal}
          className="flex items-center gap-2 bg-lime-300 hover:bg-lime-400 text-lime-900 rounded-lg px-5 py-2 font-medium"
        >
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
  );
}