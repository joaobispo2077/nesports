import './styles/main.css';

import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdModal } from './components/CreateAdModal';
import axios from 'axios';

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
    axios
      .get('http://localhost:3002/games')
      .then((response) => setGames(response.data))
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
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
