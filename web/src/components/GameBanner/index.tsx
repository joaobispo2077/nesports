import { FunctionComponent } from 'react';

interface GameBannerProps {
  name: string;
  ads: number;
  bannerUrl: string;
}

export const GameBanner: FunctionComponent<GameBannerProps> = ({
  name,
  ads,
  bannerUrl,
}) => {
  return (
    <a
      key={name}
      href={bannerUrl}
      className="relative rounded-lg overflow-hidden"
    >
      <img src={bannerUrl} alt="game1" />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 bottom-0 right-0">
        <strong className="text-white font-bold block">{name}</strong>
        <p className="text-zinc-300 text-sm block">{ads} anúncios</p>
      </div>
    </a>
  );
};
