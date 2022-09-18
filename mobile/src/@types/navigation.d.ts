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
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      ads: Pick<Game, 'id' | 'name' | 'bannerUrl'>;
    }
  }
}
