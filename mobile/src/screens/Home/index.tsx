import { useNavigation } from '@react-navigation/native';
import { FunctionComponent, useEffect, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import logoImage from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { Gamecard } from '../../components/Gamecard';
import { Heading } from '../../components/Heading';
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
  const navigation = useNavigation();

  useEffect(() => {
    fetch('http://localhost:3002/games')
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.log(error));
  }, []);

  const handleOpenGame = (game: Game) => {
    navigation.navigate('ads', game);
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
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
                onPress={() => handleOpenGame(item)}
              />
            </SafeAreaView>
          )}
        />
      </SafeAreaView>
    </Background>
  );
};
