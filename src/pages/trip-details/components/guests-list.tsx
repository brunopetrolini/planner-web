import { CircleDashed, UserCog } from 'lucide-react';

export function GuestsList() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      {/* List */}
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
  );
}
