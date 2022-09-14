import { FunctionComponent } from 'react';
import { FlatList, Image, SafeAreaView, View } from 'react-native';

import logoImage from '../../assets/logo-nlw-esports.png';
import { Gamecard } from '../../components/Gamecard';
import { Heading } from '../../components/Heading';
import { GAMES } from '../../utils/games';
import { styles } from './styles';

export const Home: FunctionComponent = () => {
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
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SafeAreaView style={styles.cardItem}>
            <Gamecard
              data={{
                ads: item.ads,
                image: item.cover,
                title: item.name,
              }}
            />
          </SafeAreaView>
        )}
      />
    </View>
  );
};
