import { constructNow, format, isAfter } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CircleDashed, LucideCircleCheck, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../../components/button';
import { api } from '../../../lib/axios';

interface ActivitiesListProps {
  toggleCreateActivityModal: () => void;
}

interface Activity {
  date: string;
  activities: {
    id: string;
    title: string;
    occurs_at: string;
    trip_id: string;
  }[];
}

export function ActivitiesList({ toggleCreateActivityModal }: ActivitiesListProps) {
  const { tripId } = useParams();

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    api.get(`/trips/${tripId}/activities`).then((response) => setActivities(response.data.activities));
  }, [tripId]);

  function renderDayItem(activities: Activity['activities']) {
    return activities.map((activity) => {
      const occursAt = format(activity.occurs_at, 'HH:mm', { locale: ptBR });

      const hasHappen = isAfter(constructNow(new Date()), activity.occurs_at);

      return (
        <div key={activity.id} className="space-y-2.5">
          <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
            {hasHappen ? (
              <LucideCircleCheck className="size-5 text-lime-300" />
            ) : (
              <CircleDashed className="size-5 text-zinc-400" />
            )}
            <span className="text-zinc-100">{activity.title}</span>
            <span className="text-zinc-400 text-sm ml-auto">{`${occursAt}h`}</span>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="flex-1 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Atividades</h2>

        <Button onClick={toggleCreateActivityModal}>
          <Plus className="size-5" />
          Cadastrar atividade
        </Button>
      </div>

      {/* Activities */}
      <div className="space-y-8">
        {/* Activity Day */}
        {activities.map((activity) => {
          const activityDay = format(activity.date, 'd', { locale: ptBR });
          const activityExtendedDay = format(activity.date, 'EEEE', { locale: ptBR });

          return (
            <div key={activity.date} className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">{`Dia ${activityDay}`}</span>
                <span className="text-xs text-zinc-500">{activityExtendedDay}</span>
              </div>

              {activity.activities.length > 0 ? (
                renderDayItem(activity.activities)
              ) : (
                <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
