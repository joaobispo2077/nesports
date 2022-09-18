import { FunctionComponent } from 'react';
import { MagnifyingGlassPlus } from 'phosphor-react';

export const CreateAdBanner: FunctionComponent = () => {
  return (
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
  );
};
