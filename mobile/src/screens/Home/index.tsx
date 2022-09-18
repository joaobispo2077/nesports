import { FunctionComponent, useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, View } from 'react-native';

import logoImage from '../../assets/logo-nlw-esports.png';
import { Gamecard } from '../../components/Gamecard';
import { Heading } from '../../components/Heading';
import { GAMES } from '../../utils/games';
import { styles } from './styles';

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

export const Home: FunctionComponent = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3002/games')
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardList}
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SafeAreaView style={styles.cardItem}>
            <Gamecard
              data={{
                ads: item._count.ads,
                image: item.bannerUrl,
                title: item.name,
              }}
            />
          </SafeAreaView>
        )}
      />
    </View>
  );
};
