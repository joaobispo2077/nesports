import { FunctionComponent, useEffect, useState } from 'react';
import { Check, GameController } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Input } from '../Forms/Input';
import { Game } from '../../App';
import { weekDays } from '../../utils/weekDays';

export const CreateAdModal: FunctionComponent = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedWeekDays, setSelectedWeekDays] = useState<string[]>([]);

  const handleSelectWeekDay = (weekDays: string[]) => {
    setSelectedWeekDays(weekDays);
  };

  useEffect(() => {
    fetch('http://localhost:3002/games')
      .then(async (response) => await response.json())
      .then((response) => setGames(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/80 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2A2643] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl font-black">
          Publique um anúncio
        </Dialog.Title>
        <form className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="game" className="font-semibold">
              Qual o game?
            </label>
            <select
              id="game"
              className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
              placeholder="Selecione o game que deseja jogar"
            >
              <option value="" defaultValue="" className="text-zinc-500">
                Selecione o game que deseja jogar
              </option>
              {games.map((game) => (
                <option key={game.id} value={game.id}>
                  {game.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="name">
              Qual o seu nome (ou nickname)?
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Como te chamam dentro do jogo"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="yearsPlaying">
                Joga há quantos anos?
              </label>
              <Input
                id="yearsPlaying"
                type="number"
                placeholder="Tudo bem ser ZERO"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="discord">
                Qual seu Discord?
              </label>
              <Input id="discord" type="text" placeholder="nickname#0000" />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="weekDays">
                Quando costuma jogar?
              </label>
              <ToggleGroup.Root
                type="multiple"
                className="grid grid-cols-4 gap-2"
                value={selectedWeekDays}
                onValueChange={handleSelectWeekDay}
              >
                {weekDays.map((weekDay) => (
                  <ToggleGroup.Item
                    key={weekDay.info}
                    title={weekDay.info}
                    className={`w-10 h-10 rounded ${
                      selectedWeekDays.includes(weekDay.value)
                        ? 'bg-violet-500'
                        : 'bg-zinc-900'
                    }`}
                    value={weekDay.value}
                  >
                    {weekDay.label}
                  </ToggleGroup.Item>
                ))}
              </ToggleGroup.Root>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label className="font-semibold" htmlFor="hourStart">
                Qual horário do dia?
              </label>
              <div className="grid grid-cols-2 gap-2">
                <Input id="hourStart" type="time" placeholder="De" />
                <Input id="hourEnd" type="time" placeholder="Até" />
              </div>
            </div>
          </div>

          <div className="mt-2 flex gap-2 text-sm cursor-pointer">
            <Checkbox.Root className="w-6 h-6 p-1 rounded bg-zinc-900">
              <Checkbox.Indicator>
                <Check className="w-4 h-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </div>

          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold cursor-pointer hover:bg-zinc-600"
              type="button"
            >
              Cancelar
            </Dialog.Close>

            <button
              type="submit"
              className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3  cursor-pointer hover:bg-violet-600"
            >
              <GameController className="w-6 h-6" />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
