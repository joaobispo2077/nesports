import './styles/main.css';

import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

function App() {
  const games = [
    '/assets/games/game-1.png',
    '/assets/games/game-2.png',
    '/assets/games/game-3.png',
    '/assets/games/game-4.png',
    '/assets/games/game-5.png',
    '/assets/games/game-6.png',
  ];

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
            key={game}
            ads={Math.floor(Math.random() * 1000)}
            name="Paladins"
            bannerUrl={game}
          />
        ))}
      </div>

      <CreateAdBanner />
    </div>
  );
}

export default App;
