import './styles/main.css';
import { MagnifyingGlassPlus } from 'phosphor-react';

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
          <a
            key={game}
            href={game}
            className="relative rounded-lg overflow-hidden"
          >
            <img src={game} alt="game1" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 bottom-0 right-0">
              <strong className="text-white font-bold block">Paladins</strong>
              <p className="text-zinc-300 text-sm block">10 anúncios</p>
            </div>
          </a>
        ))}
      </div>

      <div className="bg-galaxy-gradient pt-1 self-stretch rounded-lg mt-8 overflow-hidden">
        <div className=" bg-[#2A2634] flex justify-between py-6 px-8">
          <div>
            <h2 className="text-white font-black text-2xl block">
              Não encontrou seu duo?
            </h2>
            <p className="text-zinc-300 block">
              Publique um anúncio para encontrar novos players!
            </p>
          </div>

          <button
            type="button"
            className="bg-violet-500 text-white py-3 gap-3 rounded-md px-4 hover:bg-violet-700 flex items-center"
          >
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
