import './styles/main.css';

import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';
import { Input } from './components/Forms/Input';

export interface Game {
  id: string;
  name: string;
  bannerUrl: string;
  createdAt: string;
  updatedAt: string;
  _count: Count;
}

export interface Count {
  ads: number;
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3002/games')
      .then(async (response) => await response.json())
      .then((response) => setGames(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src="/assets/logo.svg" alt="logo" />

      <h1 className="text-6xl  text-white font-black mt-20">
        Seu{' '}
        <span className="bg-galaxy-gradient bg-clip-text text-transparent">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <GameBanner
            key={game.id}
            ads={game._count.ads}
            name={game.name}
            bannerUrl={game.bannerUrl}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

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
                <Input
                  id="game"
                  type="text"
                  placeholder="Selecione o game que deseja jogar"
                />
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
                  <div className="grid grid-cols-4 gap-2">
                    <button
                      title="Domingo"
                      className="w-10 h-10 rounded bg-zinc-900"
                    >
                      D
                    </button>
                    <button
                      className="w-10 h-10 rounded bg-zinc-900"
                      title="Segunda"
                    >
                      S
                    </button>
                    <button
                      className="w-10 h-10 rounded bg-zinc-900"
                      title="Terça"
                    >
                      T
                    </button>
                    <button
                      className="w-10 h-10 rounded bg-zinc-900"
                      title="Quarta"
                    >
                      Q
                    </button>
                    <button
                      className="w-10 h-10 rounded bg-zinc-900"
                      title="Quinta"
                    >
                      Q
                    </button>
                    <button
                      className="w-10 h-10 rounded bg-zinc-900"
                      title="Sexta"
                    >
                      S
                    </button>
                    <button
                      className="w-10 h-10 rounded bg-zinc-900"
                      title="Sabádo"
                    >
                      S
                    </button>
                  </div>
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
                <input type="checkbox" /> Costumo me conectar ao chat de voz
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
      </Dialog.Root>
    </div>
  );
}

export default App;
